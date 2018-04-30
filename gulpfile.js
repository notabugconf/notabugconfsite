var gulp = require('gulp');
var csso = require('gulp-csso');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var template = require('gulp-template');
var image = require('gulp-image');

// Site data
var data = require('./data/data.json');
var package = require('./package.json');

data.version = package.version;

gulp.task('css', function(){
  gulp.src([
      'src/public/css/bootstrap.css',
      'src/public/css/style.css',
  ])
    .pipe(csso({ comments: false }))
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('dist/public/css'))


    gulp.src([
        'src/public/css/bootstrap.css',
        'src/public/css/contentpage-style.css',
    ])
        .pipe(csso({ comments: false }))
        .pipe(concat('contentpagestyles.min.css'))
        .pipe(gulp.dest('dist/public/css'))

});

gulp.task('js', function(){
    return gulp.src([
        'src/public/js/jquery-3.2.1.js',
        'src/public/js/bootstrap.js',
        'src/public/js/main.js'
    ])
      .pipe(uglify())
      .pipe(concat('main.min.js'))
      .pipe(gulp.dest('dist/public/js'))
  });

gulp.task('html', function () {
  gulp.src('src/index.html')
    .pipe(template(data))
    .pipe(gulp.dest('dist'));
    gulp.src([
        'src/robots.txt',
        'src/.htaccess'
    ])
    .pipe(gulp.dest('dist'));
    gulp.src([
        'src/404.html',
        'src/code-of-conduct.html',
        'src/privacy-policy.html',
    ])
    .pipe(template(data))
    .pipe(rename(function (path) {
        path.extname = ''
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('images', function () {
    gulp.src('src/public/images/**/*')
      .pipe(image())
      .pipe(gulp.dest('./dist/public/images'));
  });

gulp.task('default', [ 'html', 'css', 'js', 'images' ]);