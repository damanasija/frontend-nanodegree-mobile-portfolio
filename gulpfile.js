const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const csso = require('gulp-csso');
const htmlmin = require('gulp-htmlmin');
const del = require('del');

/*
  --TOP Level Functions ---
    gulp.task - define tasks
    gulp.src - point to files to use
    gulp.dest - point to folder to output
    gulp.watch - watch files and folders for changes
*/



// Copy all HTML files from root of source to root of dist folder
gulp.task('minifySrc', function() {
  gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
    }))
    .pipe(gulp.dest('dist'));
});

// Minify Html files in views to dist/views folder
gulp.task('minifyViews', function() {
  gulp.src('src/views/*.html')
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeComments: true,
  }))
  .pipe(gulp.dest('dist/views'));
})

// Optimize images in src
gulp.task('imageminSrc', function() {
  gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

// Optimize images in src/views
gulp.task('imageminViews', function() {
  gulp.src('src/views/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/views/images'));
});

// Minify Js in src
gulp.task('minifySrcJs', function() {
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Minify JS in src/views
gulp.task('minifyViewsJs', function() {
  gulp.src('src/views/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/views/js'));
});

// Minify Css in root
gulp.task('minifySrcCss', function() {
  gulp.src('src/css/*.css')
    .pipe(csso())
    .pipe(gulp.dest('dist/css'));
});

// Minify Css in src/views
gulp.task('minifyViewsCss', function() {
  gulp.src('src/views/css/*.css')
  .pipe(csso())
  .pipe(gulp.dest('dist/views/css'));
});

// Cleaning dist directory before redoing all tasks
gulp.task('clean', function(){
  del(['dist']);
});

// Please run gulp clean before this task
gulp.task('default', [
  'minifySrc',
  'minifyViews', 
  'imageminSrc', 
  'imageminViews', 
  'minifySrcJs', 
  'minifyViewsJs', 
  'minifySrcCss', 
  'minifyViewsCss']
);