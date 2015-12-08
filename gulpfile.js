// gulp
var gulp = require('gulp');
var sass = require('gulp-sass');

// // plugins
// var connect = require('gulp-connect');


// gulp.task('connect', function () {
//   connect.server({
//     root: 'feather/',
//     port: 8888
//   });
// });

gulp.task('styles', function(){
	gulp.src('public/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./public/css/'));
});

gulp.task('default', function(){
	gulp.watch('public/sass/**/*.scss', ['styles']);
});