const gulp = require('gulp');
const ngAnnotate = require('gulp-ng-annotate');
const uglify = require('gulp-uglifyjs');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const del = require('del');

gulp.task('js', () => {
    gulp.src(['src/**/*.js'])
        .pipe(ngAnnotate())
        .pipe(uglify({ output: { comments: /^!|@license|@cc_on/i } }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', () => {
    del('dist/css');
    gulp.src(['src/css/**/*.scss'])
        .pipe(sass())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', ['default'], () => {
    gulp.watch('src/css/**/*.scss', ['sass']);
    gulp.watch('src/**/*.js', ['js']);
});


gulp.task('default', ['js', 'sass']);