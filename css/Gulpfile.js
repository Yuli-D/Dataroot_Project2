var gulp=require('gulp');
var sass=require('gulp-sass');
var watch = require('gulp-watch');
gulp.task('styles',function()
		  {
	gulp.src('../sass/**/*.scss')
	.pipe(sass().on('error',sass.logError))
	.pipe(gulp.dest(''))
          });
gulp.task('default',['sass','sass:watch']); 
gulp.task('sass:watch', function () { 
gulp.watch('../sass/**/*.scss', ['sass']); 
});