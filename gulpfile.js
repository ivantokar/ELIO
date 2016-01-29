var gulp = require('gulp'),
	sass = require('gulp-sass'),
	minifycss = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	livereload = require('gulp-livereload'),
	jade = require('gulp-jade');


gulp.task('watcher', ['jade', 'styles', 'scripts'], function() {
	livereload.listen();
	gulp.watch('sass/**/*.scss', ['styles', 'sources']);
	gulp.watch('jade/**/*.jade', ['jade']);
	gulp.watch('scripts/**/*.js', ['scripts', 'sources']);
});

gulp.task('jade', function () {
	return gulp.src('jade/**/*.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('assets/html/'))
		.pipe(livereload());
});

gulp.task('styles', function () {
	return gulp.src(['./sass/**/*.scss'])
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./assets/css/'))
		.pipe(concat('all.css'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(minifycss())
		.pipe(gulp.dest('./assets/css'))
		.pipe(livereload());
});

gulp.task('scripts', function() {
	return gulp.src(['./scripts/app.js'])
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./assets/js/'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest('./assets/js/'))
		.pipe(livereload());
});

gulp.task('default', ['watcher']);