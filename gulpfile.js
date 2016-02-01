var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var csslint = require('gulp-csslint');

var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

var jade = require('gulp-jade');

gulp.task('css', function() {
  var processors = [
    autoprefixer,
    cssnano
  ];
  return gulp.src('./source/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./build'));
});

gulp.task('lint', function() {
  gulp.src('./build/*.css')
    .pipe(csslint())
    .pipe(csslint.reporter());
});

gulp.task('html', function() {
  gulp.src('./source/jade/**/*.jade')
    .pipe(jade({pretty:true}))
    .pipe(gulp.dest('./build'));
});
