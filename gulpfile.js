var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglifyjs');
var rename = require('gulp-rename');

gulp.task('default', function() {
    return gulp.src(['src/angular-list-select.js'])
        .pipe(ngAnnotate())
        .pipe(uglify({output: {comments: /^!|@license|@cc_on/i}}))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist'));
});
