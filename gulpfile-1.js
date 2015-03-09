//gulpfile.js
var gulp = require('gulp'),
    concat = require('gulp-concat');
sass = require('gulp-sass');

gulp.task('default', function () {
    gulp.src([
        'src/components/header/header.html',
        'src/components/breadcrumb/breadcrumb.html',
        'src/components/hero/hero.html',
        'src/components/content/content.html',
        'src/components/footer/footer.html'
    ])
        .pipe(concat('index.html'))
        .pipe(gulp.dest('release/'));

    gulp.src([
        'src/lib/**/*.css',
        'src/components/global/global.scss',
        'src/components/**/*.scss'
    ])
        .pipe(sass())
        .pipe(concat('app.css'))
        .pipe(gulp.dest('release/'));

    gulp.src(['src/img/**.*'])
        .pipe(gulp.dest('release/img'));
});