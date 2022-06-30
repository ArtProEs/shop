//  Импортируем Основной модуль gulp 
import gulp from "gulp";
//  Импартируем обект с путями из gulp/config/path.js
import { path } from "./gulp/config/path.js";
// Импорт Общих плагинов
import { plugins } from "./gulp/config/plugins.js"

// передаем значения в глобальную переменную
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path, 
    gulp: gulp,
    plugins: plugins
}

// Импорт задач
import { js } from "./gulp/tasks/js.js"; // Управление JavaScript
import { ftp } from "./gulp/tasks/ftp.js";
import { zip } from "./gulp/tasks/zip.js";
import { copy } from "./gulp/tasks/copy.js"; //копирование елементов
import { html } from "./gulp/tasks/html.js";//управление HTML
import { scss } from "./gulp/tasks/scss.js"; // Управление SCSS
import { reset } from "./gulp/tasks/reset.js";//удаление папки с результатами
import { images } from "./gulp/tasks/images.js"; // Управление images
import { server } from "./gulp/tasks/server.js"; // Локалльный сервер
import { svgSprive } from "./gulp/tasks/svgSprive.js";
import { copyPlugin } from "./gulp/tasks/copypluginjs.js"; //копирование елементов
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js"

// Наблюдение за изменениями в файлах
/**
 * # gulp.watch(путь за кем нужно следить, функцию которую нужно выполнить)
 */
function watcher() { 
    gulp.watch(path.watch.files, copy);//gulp.series(<>, ftp)
    gulp.watch(path.watch.jsplugin, copyPlugin);//gulp.series(<>, ftp)
    gulp.watch(path.watch.html, html);//gulp.series(<>, ftp)
    gulp.watch(path.watch.scss, scss);//gulp.series(<>, ftp)
    gulp.watch(path.watch.js, js);//gulp.series(<>, ftp)
    gulp.watch(path.watch.images, images);//gulp.series(<>, ftp)
}

export { svgSprive }

//  последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)

//Основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(copy, copyPlugin, html, scss, js, images));


// Построение сценариев выаолнения задач
// метод gulp.series() выполняет задачи последовательно
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

// export сценариев
export { dev }
export { build }
export { deployZIP }
export { deployFTP }

// выполнение сценария по умолчанию
gulp.task('default', dev);