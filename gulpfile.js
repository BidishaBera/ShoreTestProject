var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('Files/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('Files/css'));
});

// gulp.task('run', ['sass', 'css']);

gulp.task('watch', function () {
  gulp.watch('Files/sass/*.sass', ['sass']);
  gulp.watch('Files/css', ['css']);
});

// gulp.task('default', ['sass'], function() {
//   // default task code here
//   console.log("default gulp function");
// });