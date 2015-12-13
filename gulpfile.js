var gulp = require('gulp');
// requires browserify and vinyl-source-stream
var browserify = require('browserify');
var source = require('vinyl-source-stream');


gulp.task('default', function() {
		console.log('Hello GULP');
});
	  

gulp.task('browserify', function() {
    // Grabs the app.js file
    return browserify('./app.js')
        // bundles it and creates a file called main.js
        .bundle()
        .pipe(source('browser.js'))
        // saves it the public/js/ directory
        .pipe(gulp.dest('./public/js/'));
});
