var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');
var fs = require('fs');

// outputs changes to files to the console
function reportChange(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
var tsConfig = JSON.parse(fs.readFileSync(paths.tsConfig, 'utf8'));
gulp.task('watch', ['serve'], function() {
  gulp.watch(tsConfig.include, ['build-ts', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.source, ['build-system', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.html, ['build-html', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.style, browserSync.reload).on('change', reportChange);
});
