'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('sass', function() {
	gulp.src('./src/css/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./src/css/'));
});

gulp.task('sass:watch', function() {
	gulp.watch('./src/css/main.scss', ['sass']);
});