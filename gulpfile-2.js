//gulpfile.js
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass');

// Default task
gulp.task('default', ['clean'], function () {
    gulp.start([
        'gen-html',
        'gen-css',
        'gen-img'
    ]);
});

gulp.task('gen-css', function () {
    return gulp.src([
        'src/lib/**/*.css',
        'src/components/global/global.scss',
        'src/components/**/*.scss'
    ])
        .pipe(sass())
        .pipe(concat('app.css'))
        .pipe(gulp.dest('release/'));
});

gulp.task('gen-html', function () {
    return gulp.src([
        'src/components/header/header.html',
        'src/components/breadcrumb/breadcrumb.html',
        'src/components/hero/hero.html',
        'src/components/content/content.html',
        'src/components/footer/footer.html'
    ])
        .pipe(concat('index.html'))
        .pipe(gulp.dest('release/'));
});


gulp.task('gen-img', function () {
    return gulp.src(['src/img/**.*'])
        .pipe(gulp.dest('release/img'));
});