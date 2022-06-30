export const copyPlugin = () => { 
    return app.gulp.src(app.path.src.jsplugin)
    .pipe(app.gulp.dest(app.path.build.jsplugin))
}