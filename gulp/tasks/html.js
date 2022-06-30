// npm i -D gulp-file-include
import fileinclude from "gulp-file-include" // позволяет импортировать части html
//  npm i -D gulp-webp-html-nosvg
import webppHtmlNosvg from "gulp-webp-html-nosvg"; // добавляет к изображениям webp версию

import versionNumber from "gulp-version-number"; // добавляет версию в текс

export const html = () => { 
    return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "HTML",
            message: "Error: <%= error.message %>"
        }))
    )
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    .pipe(app.plugins.if(app.isBuild, webppHtmlNosvg()))
    .pipe(app.plugins.if(
        app.isBuild, 
            versionNumber({
                'value': '%DT%',
                'append': {
                    'key': '_v',
                    'cover': 0,
                    'to': [
                        'css',
                        'js',
                    ]
                },
                'output': {
                    'file': 'gulp/version.json'
                }
            })
        )
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream())
}