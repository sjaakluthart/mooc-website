'use strict';

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    jscs = require('gulp-jscs'),
    jshint = require('gulp-jshint'),
    stylish = require('gulp-jscs-stylish'),
    scsslint = require('gulp-scss-lint'),
    tar = require('gulp-tar'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    header = require('gulp-header'),
    sources,
    bowerComponents,
    bowerBanner;

sources = [
    'gulpfile.js',
    'src/**/*.js',
    '!node_modules/**/*.js',
    '!bower_components/**/*.js',
    '!src/**/*.min.js'
];

bowerComponents = [
    './bower_components/jquery/dist/jquery.min.js',
    './bower_components/scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
    './bower_components/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js',
    './bower_components/elevator.js/elevator.min.js',
    './bower_components/jquery.scrollTo/jquery.scrollTo.min.js'
];

bowerBanner = ['/**',
  ' * Bower Components',
  ' * jQuery 2.2.0 - https://github.com/jquery/jquery',
  ' * ScrollMagic.js 2.0.5 - https://github.com/janpaepke/ScrollMagic',
  ' * Elevator.js - https://github.com/tholman/elevator.js',
  ' * jquery.scrollTo 2.1.2 - https://github.com/flesler/jquery.scrollTo',
  ' */',
  ''].join('\n');

gulp.task('jscs', function() {
    return gulp.src(sources)
        .pipe(jscs())
        .pipe(stylish());
});

gulp.task('scss', function() {
    return gulp.src([
            'src/**/*.scss',
            '!**/bourbon/**',
            '!**/animatewithsass/**',
            '!**/meyer-reset.scss'
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

gulp.task('sass', function() {
    return sass('src/assets/sass/**/style.scss', {style: 'compressed'})
        .on('error', sass.logError)
        .pipe(gulp.dest('src/assets/stylesheets'));
});

gulp.task('bower', function() {
  return gulp.src(bowerComponents)
  .pipe(concat('bower_components.js'))
  .pipe(header(bowerBanner))
  .pipe(gulp.dest('./src/assets/'));
});

gulp.task('watch', function() {
    gulp.watch('src/assets/sass/*.scss', ['sass']);
});

gulp.task('compress', ['sass', 'bower'], function() {
    gulp.src([
        'src/**/*',
        '!src/assets/sass/',
        '!src/assets/sass/**/*'
    ])
        .pipe(tar('archive.zip'))
        .pipe(gulp.dest('build'));
});
