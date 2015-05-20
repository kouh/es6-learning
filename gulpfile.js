var gulp = require('gulp');
var babel = require('gulp-babel');

var src = 'es6/**/*.js';

gulp.task('default', function () {
  return gulp.src(src)
    .pipe(babel())
    .pipe(gulp.dest('js'));
});

gulp.task('watch', function(){
    gulp.watch(src, ['default']);
});
