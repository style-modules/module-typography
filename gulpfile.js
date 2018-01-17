const gulp = require('gulp')
const browserSync = require('browser-sync')

gulp.task('default', () => {
  gulp.watch(['*.css']).on('change', browserSync.stream)
  gulp.watch('*.html').on('change', browserSync.reload)

  return browserSync({
    // Options found here: https://browsersync.io/docs/options
    open: 'ui',
    reloadDelay: 2000,
    logPrefix: 'BrowserSync',
    startPath: 'demo/index.html',
    server: {
      baseDir: './',
      directory: false
    }
  })
})
