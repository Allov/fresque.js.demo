'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var gutil = require('gulp-util');
var open = require('open');
var server = require('./server/server');
var configManager = require('./configuration/configManager');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var del = require('del');

gulp.task('less', function() {
    gulp.src('./src/less/styles.less')
        .pipe(less({
            sourceMap: configManager.get('sourceMap')
        }).on('error', gutil.log))
        .pipe(gulp.dest('./src/css'))
        .pipe(livereload());
});

gulp.task('js', function() {
    gulp.src(['./src/**/*.js'])
        // .pipe(plumber())
        // .pipe(jshint())
        // .pipe(jshint.reporter('default'))
        //     .pipe(plumber.stop())
        .pipe(livereload());
});

gulp.task('html', function() {
    gulp.src(['./src/**/*.html'])
        // .pipe(plumber())
        // .pipe(jshint())
        // .pipe(jshint.reporter('default'))
        //     .pipe(plumber.stop())
        .pipe(livereload());
});

gulp.task('watch', ['less', 'js'], function() {
    gulp.watch(['./src/**/*.less'], ['less']);
    gulp.watch(['./src/**/*.js'], ['js']);
    gulp.watch(['./src/**/*.html'], ['html']);
});

gulp.task('clean:dev', function(callback) {
    //del(['build-dev/**/*.*'], callback);
});

gulp.task('dev', ['watch'], function(callback) {
    var log = gutil.log;
    var colors = gutil.colors;

    log("starting...");
    server.start(function(err, url) {
        //TODO: Handle err

        if (gutil.env.open) {
            log('Opening dev server URL in browser');
            open(url);
        } else {
            log(colors.gray('(Run with --open to automatically open URL on startup)'));
        }

        callback(); // we're done with this task for now
    });
});

gulp.task('default', ['dev']);
