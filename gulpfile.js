var gulp = require('gulp');
var csso = require('gulp-csso');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
const template = require('gulp-template');

const image = require('gulp-image');

var data = require('./data/data.json');


gulp.task('css', function(){
  return gulp.src([
      'public/css/bootstrap.css',
      'public/css/style.css',
  ])
    .pipe(csso({ comments: false }))
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('dist/public/css'))
});

gulp.task('js', function(){
    return gulp.src([
        'public/js/jquery-3.2.1.js',
        'public/js/bootstrap.js',
        'public/js/main.js'
    ])
      .pipe(uglify())
      .pipe(concat('main.min.js'))
      .pipe(gulp.dest('dist/public/js'))
  });

gulp.task('html', () =>
  gulp.src('index.html')
    .pipe(template(data))
    .pipe(gulp.dest('dist'))
);

gulp.task('images', function () {
    gulp.src('./public/images/**/*')
      .pipe(image())
      .pipe(gulp.dest('./dist/public/images'));
  });

gulp.task('default', [ 'html', 'css', 'js', 'images' ]);