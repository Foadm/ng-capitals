/**
 * Created by mozafff on 10/28/2014.
 */

var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('default', function () { console.log('setting up server!') });

gulp.task('connect', function() {
    connect.server({
        root: 'app/', //Our application code will live inside of app/
        port: 8888
    });
});
gulp.task('copy-html-files', function() {
    gulp.src(['./app/**/*.html', '!./app/index.html'], {base: './app'})
        .pipe(gulp.dest('build/'));
});
gulp.task('usemin', function() {
    gulp.src('./app/index.html')
        .pipe(usemin({
            css: [minifyCss(), 'concat', rev()],
            js: [uglify(), rev()]
        }))
        .pipe(gulp.dest('build/'));
});
gulp.task('build', ['copy-html-files', 'usemin']);