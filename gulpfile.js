var gulp = require('gulp'),
    apidoc = require('gulp-apidoc');
    browserSync = require('browser-sync').create();


gulp.task('serve', function() {
    browserSync.init({
        server: "./build"
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('apidoc', function (done) {
    apidoc({
        src: "example/",
        dest: "build/",
        template: "template/",
        debug: true,
        includeFilters: [".*\\.js$"]
    }, done);
});

gulp.task('watch', function () {
    gulp.watch('./example/{*.js,*.json,*.md}', ['apidoc']);
    gulp.watch('./example/{**/*.js,**/*.json,**/*.md}', ['apidoc']);
    gulp.watch('./example/{*.js,*.json,*.md}', browserSync.reload);
});

// Default Task
gulp.task('default', ['apidoc','watch', 'serve']);
