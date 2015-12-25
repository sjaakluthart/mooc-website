'use strict';

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    jscs = require('gulp-jscs'),
    jshint = require('gulp-jshint'),
    stylish = require('gulp-jscs-stylish'),
    scsslint = require('gulp-scss-lint'),
    sources;

sources = [
    'gulpfile.js',
    'src/**/*.js',
    '!node_modules/**/*.js',
    '!src/**/*.min.js'
];

gulp.task('default', function() {
    return gulp.src(sources)
        .pipe(jshint())
        .pipe(jscs())
        .pipe(stylish.combineWithHintResults())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('jscs', function() {
    return gulp.src(sources)
        .pipe(jscs())
        .pipe(stylish());
});

gulp.task('scss', function() {
    return gulp.src([
            'src/**/*.scss',
            '!**/bourbon/**'
        ])
        .pipe(scsslint({
            'config': 'scss-lint.yml',
            'maxBuffer': 1307200
        }));
});

gulp.task('lint', function() {
    return gulp.src(sources)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sass', function () {
    return sass('src/assets/sass/**/*.scss', { style: 'compressed' })
        .on('error', sass.logError)
        .pipe(gulp.dest('src/assets/stylesheets'));
});

gulp.task('watch', function() {
    gulp.watch('src/assets/sass/*.scss', ['sass']);
});