import dartSass from 'sass'; //сам препроцесор
import gulpSass from 'gulp-sass'; 
import rename from 'gulp-rename'; // переименование

import cleanCss from 'gulp-clean-css'; // Сжатее CSS файла
import webpcss from 'gulp-webpcss'; // вывод WEBP изображений / не работает без $ npm i -D webp-converter@2.2.3
import autoprefixer from 'gulp-autoprefixer'; // Добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'// Групировка медиа запросов



const sass = gulpSass(dartSass);

export const scss = () =>{
    return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
        .pipe(
            app.plugins.if(
                app.isBuild, 
                app.plugins.plumber(
                    app.plugins.notify.onError({
                        title: "SCSS",
                        message: "Error: <%= error.message %>"
                    })
                )
            )
        )
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(
            app.plugins.if(
                app.isBuild, 
                groupCssMediaQueries()
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild, 
                webpcss(
                    {
                        webpClass: ".webp",
                        noWebpClass: ".no-webp"
                    }
                )
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild, 
                autoprefixer(
                    {
                        grid:true,
                        overrideBrowsersList: ["lasr 3 versions"],
                        cascade: true
                    }
                )
            )
        )
        // Не сжатый дубль файла css
        .pipe(
            app.plugins.if(
                app.isDev, 
                app.gulp.dest(app.path.build.css)
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                cleanCss()
            )
        )
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());
} 