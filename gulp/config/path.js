// получаем имя папки проекта 
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve())

/**
 * ↓buildFolder
 * путь к папке с результатом 
 * также можно использовать название проекта "rootFolder" 
 * создается автоматически
 */
const buildFolder = `./dist`; 
const srcFolder = `./src`; //путь к папке с исходниками

export const path = { // вся информация о пути к той или иной папке
    build: { // →Объект путей к папке с результатом
        files: `${buildFolder}/files/`, // перенести все файлы в
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        jsplugin: `${buildFolder}/js/plugin/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
    }, 
    src: { // →Объект путей к исходным файлам
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/style.scss`,
        js: `${srcFolder}/js/app.js`,
        jsplugin: `${srcFolder}/js/plugin/*.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        svgicons: `${srcFolder}/svgicons/*.svg`
    }, 
    watch: {// →Папки и файлы за которыми должен слидить gulp
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        jsplugin: `${srcFolder}/js/plugin/*.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`
    }, 
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}