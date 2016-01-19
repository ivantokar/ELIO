var gulp = require('gulp'),
	sass = require('gulp-sass'),
	minifycss = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	notify = require('gulp-notify'),
	livereload = require('gulp-livereload'),
	uglify = require('gulp-uglify');

gulp.task('default', function() {
	gulp.run('watch', 'copy', 'styles', 'scripts');
});

gulp.task('styles', function () {
	return gulp.src(['./sass/**/*.scss', './bower_components/font-awesome/css/font-awesome.min.css'])
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./assets/css/'))
		.pipe(concat('all.css'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(minifycss())
		.pipe(gulp.dest('./assets/css'))
		.pipe(livereload())
		.pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('copy', function() {
	gulp.src(['bower_components/font-awesome/fonts/**'])
		.pipe(gulp.dest('./assets/fonts/'));
});

gulp.task('scripts', function() {
	return gulp.src(['./bower_components/jquery/dist/jquery.min.js',
					// './bower_components/waypoints/lib/jquery.waypoints.min.js',
					// './bower_components/jquery-smooth-scroll/jquery.smooth-scroll.min.js',
					// './bower_components/parallax.js/parallax.min.js',
					// './scripts/src/jquery.elio.animation.js',
					// './scripts/src/functions.js',
					// './scripts/src/main.js'
					])
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./assets/js/'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest('./assets/js/'))
		.pipe(livereload())
		.pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('watch', function() {
	livereload.listen();

	gulp.watch('sass/**/*.scss', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		gulp.run('styles');
	});

	gulp.watch('scripts/**/*.js', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		gulp.run('scripts');
	});
});
