var gulp = require('gulp');
var csso = require('gulp-csso');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var template = require('gulp-template');
var image = require('gulp-image');
var eslint = require('gulp-eslint');
var csslint = require('gulp-csslint');

// Site data
var data = require('./data/data.json');
var package = require('./package.json');

data.version = package.version;

gulp.task('css', function(){
  gulp.src([
      'src/public/css/bootstrap.css',
      'src/public/css/easter-eggs.css',
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
        'src/public/js/bootstrap.js',
        'src/public/js/main.js',
        'src/public/js/easter-eggs.js',
    ])
      .pipe(uglify())
      .pipe(concat('main.min.js'))
      .pipe(gulp.dest('dist/public/js'))
  });

gulp.task('fonts', function(){
    return gulp.src([
        'src/public/fonts/*',
    ])
      .pipe(gulp.dest('dist/public/fonts/'))
});

gulp.task('html', function () {
  gulp.src('src/index.html')
    .pipe(template(data))
    .pipe(gulp.dest('dist'));
    gulp.src([
        'src/robots.txt',
        'src/.htaccess',
        'src/sitemap.xml'
    ])
    .pipe(gulp.dest('dist'));
    gulp.src([
        'src/2018.html',
        'src/404.html',
        'src/code-of-conduct.html',
        'src/privacy-policy.html',
    ])
    .pipe(template(data))
    .pipe(gulp.dest('dist'));
});

gulp.task('images', function () {
    gulp.src('src/public/images/**/*')
      .pipe(image())
      .pipe(gulp.dest('./dist/public/images'));
  });

gulp.task('js-lint', () => {
    return gulp.src(['src/**/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('css-lint', function() {
  gulp.src(['src/**/*.css', '!src/public/css/bootstrap.css'])
    .pipe(csslint())
    .pipe(csslint.formatter());
});

gulp.task('default', function(){
  gulp.watch('src/**/*.js', ['js-lint', 'js']);
  gulp.watch('src/**/*.css', ['css-lint','css']);
  gulp.watch('src/**/*.html', ['html']);
});

gulp.task('build', ['fonts', 'html', 'css', 'js', 'images' ]);
gulp.task('test', [ 'js-lint', 'css-lint' ]);
