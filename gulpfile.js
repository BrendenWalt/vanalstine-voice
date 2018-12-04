var gulp = require('gulp');
var bs = require('browser-sync').create();

gulp.task('browser-sync', function() {
  bs.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch("assets/styles.css").on('change', bs.reload);
  gulp.watch("*.html").on('change', bs.reload);
});

function defaultTask(done) {
  // place code for your default task here
  done();
}

gulp.task('default', ['watch']);