// npm i -D gulp-replace
import replace from "gulp-replace"; // Поиск и замена
import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Сообщения (подсказки)
import browsersync from "browser-sync"; // Локальный сервер
import newer from "gulp-newer"; // Проверка обновлений
import ifPlugin from "gulp-if" // условный аператор
//  Экспартируем объект с плагинами
export const plugins = {
    replace: replace,
    newer: newer,
    if: ifPlugin,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
}