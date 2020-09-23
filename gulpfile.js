var gulp         = require('gulp'),
		sass         = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		cleanCSS    = require('gulp-clean-css'),
		rename       = require('gulp-rename'),
		browserSync  = require('browser-sync').create(),
		concat       = require('gulp-concat'),
		uglify       = require('gulp-uglify'),
		imagemin = require('gulp-imagemin'),
		del = require('del'),
		newer = require('gulp-newer');

gulp.task('browser-sync', ['styles', 'scripts'], function() {
		browserSync.init({
				server: {
						baseDir: "./app"
				},
				notify: false
		});
});

gulp.task('styles', function () {
	return gulp.src('sass/*.sass')
	.pipe(sass({
		includePaths: require('node-bourbon').includePaths
	}).on('error', sass.logError))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
	.pipe(cleanCSS())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream());
});

gulp.task('scripts', function() {
	return gulp.src([
		'./app/libs/modernizr/modernizr.js',
		'./app/libs/jquery/jquery-1.11.2.min.js',
		'./app/libs/waypoints/waypoints.min.js',
		'./app/libs/animate/animate-css.js',
		'./app/libs/slick/slick.min.js',
		'./app/libs/bootstrap/js/bootstrap.min.js',
		'./app/libs/magnific-popup/jquery.magnific-popup.min.js',
		//'./app/js/common.js'
		])
		.pipe(concat('app.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./app/js/'));
});

gulp.task('watch', function () {
	gulp.watch('sass/*.sass', ['styles']);
	gulp.watch('app/libs/**/*.js', ['scripts']);
	gulp.watch('app/js/*.js').on("change", browserSync.reload);
	gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('cleandist', function () {
	return del('dist/**/*', { force: true })
});

gulp.task('images', function () {
	return gulp.src('app/minimized_images/**/*')
		.pipe(newer('app/minimized_images/'))
		.pipe(imagemin())
		.pipe(gulp.dest('app/minimized_images/'))
});

gulp.task('buildcopy', function () {
	return gulp.src([
		'app/css/**/*.min.css',
		'app/js/**/*.js',
		'app/minimized_images/**/*',
		'app/**/*.html',
		'app/libs/**/*',
		'app/fonts/**/*'
	], { base: 'app' })
		.pipe(gulp.dest('dist'));
});

gulp.task('build', ['cleandist', 'styles', 'scripts', 'images', 'buildcopy']);

gulp.task('default', ['browser-sync', 'watch']);
