var gulp = require('gulp');
var bs = require('browser-sync').create();
var sass = require('gulp-sass');


gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(bs.reload({
      stream:true
    }))
})  

gulp.task('browser-sync', function() {
  bs.init({
    server: {
      baseDir: "app"
    }
  });
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch("app/scss/**/*.scss", ["sass"]);
  gulp.watch("app/js/*.js").on("change", bs.reload);
  gulp.watch("app/*.html").on('change', bs.reload);
});

function defaultTask(done) {
  // place code for your default task here
  done();
}

gulp.task('default', ['watch']);