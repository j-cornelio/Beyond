const gulp 		= require('gulp'),
	  sass 		= require('gulp-sass');

gulp.task('sass', () => {
	gulp.src('./src/pre-scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./src/css'))
});