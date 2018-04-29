var gulp = require('gulp');
var csso = require('gulp-csso');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('css', function(){
  return gulp.src([
      'public/css/bootstrap.css',
      'public/css/style.css',
  ])
    .pipe(csso())
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('dist/public/css'))
});

gulp.task('js', function(){
    return gulp.src([
        'public/js/jquery-3.2.1.js',
        'public/js/bootstrap.js',
    ])
      .pipe(uglify())
      .pipe(concat('main.min.js'))
      .pipe(gulp.dest('dist/public/js'))
  });

gulp.task('default', [ 'css', 'js' ]);