'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('default',['sass','sass:watch']);
gulp.task('sass',function(){
  gulp.src('src/styles/sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('built/css'));
});
gulp.task('sass:watch', function () {
  gulp.watch('src/styles/sass/**/*.scss', ['sass']);
});
