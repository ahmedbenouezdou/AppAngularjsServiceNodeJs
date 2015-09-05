

var gulp  = require('gulp');
var inject = require('gulp-inject');
var connect = require('gulp-connect');
var bower = require('gulp-bower');
var vendor = require('gulp-concat-vendor');
var notify = require('gulp-notify');
var runSequence = require('run-sequence');

/****** Task start server******/
gulp.task('connect', function () {
    connect.server({
        root: 'src/',
        port: 8001,
        livereload: true
    });
});

gulp.task('html', function () {
    return gulp.src('./src/**/*.html')
        .pipe(connect.reload());
});

gulp.task('build-css', function () {
    return gulp.src('./src/**/*.css')
        .pipe(connect.reload());
});

gulp.task('build-js', function () {
    return gulp.src('./src/app/**/*.js')
        .pipe(connect.reload());
});

gulp.task('styles', function() {
    return sass('sass', { style: 'expanded' })
        .pipe(gulp.dest('css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('css'));
});

/****** Task create dowloud bower file ******/
gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest('./lib'))
});

/****** Task create dowloud bower file ******/


gulp.task('scripts-vendor', function () {
    return gulp.src('./lib/*')
        .pipe(vendor('vendor.js'))
        .pipe(gulp.dest('./src/js/'))
        .pipe(connect.reload())
        .pipe(notify({
            message: 'Scripts vendor task complete'
        }));
});

gulp.task('index', function () {
    return gulp.src('src/*.html')
        .pipe(inject(gulp.src(['src/js/vendor.js', 'src/app/**/*.js', 'src/css/**/*.css'], {
            read: false
        }), {
            ignorePath: 'src',
            addRootSlash: false
        }))
        .pipe(gulp.dest('src'))
        .pipe(notify({
            message: 'Index task complete'
        }));
});

gulp.task('watch', function () {
    gulp.watch(['./src/*.html'], ['html']);
    gulp.watch(['./src/**/*.scss', 'layouts/**/*.css'], ['build-css']);
    gulp.watch(['./src/app/**/*.js'], ['build-js']);
});

gulp.task('default', function (callback) {
    runSequence('bower', ['scripts-vendor'], 'index','connect', 'watch', callback);
});
