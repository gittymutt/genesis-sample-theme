'use strict';

var gulp = require('gulp'),
    bourbon = require('bourbon').includePaths,
    neat = require('bourbon-neat').includePaths,
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    sortMediaQueries = require('postcss-sort-media-queries')


gulp.task('styles', function(){
    return gulp.src('assets/sass/style.scss')
        .pipe(sourcemaps.init())
        .pipe( sass({
            includePaths: [].concat( bourbon, neat ),
            errLogToConsole: true,
            outputStyle: 'expanded'
        }))
        .pipe(postcss([ autoprefixer() ]))
        // .pipe(postcss([
        //     sortMediaQueries({
        //       sort: 'desktop-first' // default
        //     })
        //   ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('.'));
});    
gulp.task('autoprefixer', () => {
    
    return gulp.src('*.css')
      .pipe(sourcemaps.init())
      .pipe(postcss([ autoprefixer() ]))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('.'))
})

gulp.task('watch', function () {
    gulp.watch('assets/sass/**/*.scss', gulp.series ('styles'));
});

