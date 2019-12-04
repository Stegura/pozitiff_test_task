const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const del = require('del');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload

const paths = {
    styles: {
        src: 'app/scss/**/*.scss',
        dest: 'dist/styles',
        dev_path: 'app/styles'
    },
    scripts: {
        src: 'app/js/**/*.js',
        dest: 'dist/scripts',
        dev_path: 'app/scripts'
    },
    img: {
        src: 'app/img/**',
        dest: 'dist/img'
    },
    index: {
        src: 'app/index.html',
        dest: 'dist/'
    }
}

const clean = () => del(['dist/**']);

gulp.task('sass', () => {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.styles.dev_path))
});

gulp.task('js', () => {
    return gulp.src(paths.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.scripts.dev_path))
})

gulp.task('watch', () => {
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    });

    gulp.watch("./app/*.html").on("change", reload);
    gulp.watch('app/scss/**/*.scss', gulp.series('sass')).on("change", reload);
    gulp.watch('app/js/**/*.js', gulp.series('js')).on("change", reload);
});

function styles() {
    return gulp.src(paths.styles.src)
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(cleanCSS())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(paths.styles.dest));
  }
   
function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(paths.scripts.dest));
}
   
function index() {
    return gulp.src(paths.index.src)
        .pipe(gulp.dest(paths.index.dest));
}
   
function images() {
    return gulp.src(paths.img.src)
        .pipe(gulp.dest(paths.img.dest));
}


const build = gulp.series(clean, gulp.parallel(styles, scripts, index, images));

exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.index = index;
exports.build = build;

exports.default = build;