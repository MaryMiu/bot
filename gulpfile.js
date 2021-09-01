'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sourcemap = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var server = require('browser-sync').create();
var webpackStream = require('webpack-stream');
var webpack = webpackStream.webpack;
var named = require('vinyl-named');
var notify = require("gulp-notify");
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify-es').default;
var ghpages = require('gh-pages');
var del = require('del');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('webpack', function () {

  let options = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'source-map' : false,
    module: {
      rules: [{
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [{
            loader: 'file-loader',
          }, ],
        },
      ],
    },
    plugins: [
      new webpack.NoEmitOnErrorsPlugin()
    ]
  };

  return gulp.src('source/js/src/*.js')
    .pipe(plumber({
      errorHandler: notify.onError(err => ({
        title: 'Webpack',
        message: err.message
      }))
    }))
    .pipe(named())
    .pipe(webpackStream(options))
    .pipe(gulp.dest('source/js/public/'))
    .pipe(gulpif(!isDevelopment, uglify()))
    .pipe(gulpif(!isDevelopment, rename({
      suffix: '.min'
    })))
    .pipe(gulpif(!isDevelopment, gulp.dest('source/js/public/')))
});

gulp.task('css', function () {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass({
      includePaths: ['node_modules']
    }))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('source/css'))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('source/css'))
    .pipe(server.stream());
});

gulp.task('clean', function () {
  return del('build');
});

gulp.task('copy', function () {
  return gulp.src([
      'source/css/**',
      'source/img/**',
      'source/js/**',
      'source/*.html',
      'source/*.ico'
    ], {
      base: 'source'
    })
    .pipe(gulp.dest('build'));
});

gulp.task('ghpages', function () {
  return ghpages.publish('build', function () {});
});

gulp.task('server', function () {
  server.init({
    server: 'source/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('source/js/src/*.js', gulp.series('webpack', 'reload'));
  gulp.watch('source/sass/**/*.{scss,sass}', gulp.series('css', 'reload'));
  gulp.watch('source/*.html').on('change', server.reload);
});

gulp.task('reload', function (done) {
  server.reload();
  done();
});

gulp.task('start', gulp.series('css', 'webpack', 'server'));

gulp.task('build', gulp.series('clean', 'copy', 'css', 'webpack'));

gulp.task('publish', gulp.series('build', 'ghpages'));
