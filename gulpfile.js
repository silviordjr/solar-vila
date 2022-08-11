const gulp = require('gulp');
const cssMin = require('gulp-cssimport');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const webpack = require('webpack-stream');
const webpackConfigs = require('./webpack.config.js');

function compilaCss() {
  return gulp
    .src('./css/style.css')
    .pipe(cssMin())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cleanCss({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./css/build'));
}

gulp.task('css', compilaCss);

function webpackScripts() {
  return gulp
    .src('./js/script.js')
    .pipe(webpack(webpackConfigs))
    .pipe(gulp.dest('./js'));
}

gulp.task('js', webpackScripts);

function watch() {
  return gulp.watch(['./css/**/*.css', '!./css/build/style.css', './js/modules/**.js', './js/script.js'], gulp.parallel('css', 'js'));
}

gulp.task('default', watch);
