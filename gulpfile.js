// #VARS

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var csslint = require('gulp-csslint');

var magician = require('postcss-font-magician');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

var jade = require('gulp-jade');

// #CSS

gulp.task('css', function() {
  var processors = [
    magician,
    autoprefixer,
    cssnano
  ];
  return gulp.src('./source/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./build'));
});

// # LINT

gulp.task('lint', function() {
  gulp.src('./build/*.css')
    .pipe(csslint())
    .pipe(csslint.reporter());
});

// #HTML

gulp.task('html', function() {
  gulp.src('./source/jade/*.jade')
    .pipe(jade({pretty:true}))
    .pipe(gulp.dest('./build'));
});

// #WATCH

gulp.task('watch', function() {
  gulp.watch('./source/sass/**/*.scss', ['css']);
  gulp.watch('./source/jade/**/*.jade', ['html']);
});
