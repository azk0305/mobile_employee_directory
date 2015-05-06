var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require("vinyl-source-stream");

gulp.task('browserify', function(){
  var b = browserify({
    entries: ['./src/main.jsx'],
    transform: [babelify]
  });
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./public/js'));
});