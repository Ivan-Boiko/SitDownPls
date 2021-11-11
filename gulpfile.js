const {src, dest, series, watch} = require('gulp')
const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const autoprefixes = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const browserSync = require('browser-sync').create()
const svgSprite = require('gulp-svg-sprite')
const image = require('gulp-image')
const uglify = require('gulp-uglify-es').default
const babel = require('gulp-babel')
const notify = require('gulp-notify')
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
const sass = require('gulp-sass')(require('sass'))



const buildStyles = () => {
    return src([
      'src/styles/**/*.scss',
    ]
    )
    .pipe(sass().on('error', notify.onError()))
    .pipe(autoprefixes({
        cascade:false
    }))
      .pipe(cleanCSS({
        level: 2,
      }))
      .pipe(concat('style.css'))
      .pipe(dest('./dist/css'))
      .pipe(browserSync.stream())
}

const buildResources = () => {
    return src(
    'src/styles/vendor/**/*.css'
    )
    .pipe(autoprefixes({
        cascade:false
    }))
      .pipe(cleanCSS())
      .pipe(concat('vendor.css'))
      .pipe(dest('./dist/css'))
      .pipe(browserSync.stream())
}

const clean = () => {
    return del(['dist'])
}

const defaultExport = () => {
    return src(
      'src/**.html'
      )
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const fonts = () => {
  return src(
    'src/fonts/**/*'
  )
  .pipe(dest('dist/fonts'))
  .pipe(browserSync.stream())
}

const htmlMinify = () => {
    return src('src/**/*.html')
    .pipe(htmlMin({
        collapseWhitespace:true,
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const svgSprites = () =>{
 return src('src/img/svg/**.svg')
 .pipe(svgSprite({
     mode: {
         stack: {
             sprite:"../sprite.svg"
         }
     }
 }))
 .pipe(dest('dist/img/svg'))
}

const sourcemapsDev = () =>{
    return src([
        '*.html',
        'js/**',
        'scss/**/*.scss'
    ])
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
}

const scripts = () => {
    return src([
        'src/js/**/*.js',
        'src/js/vendor/**/**.js'
    ])
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('js/app.js'))
    .pipe(uglify().on('error', notify.onError()))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}


const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
}

const images = () => {
    return src([
        'src/img/**/*.jpg',
        'src/img/**/*.png',
        'src/img/*.svg',
        'src/img/**/*.jpeg',
        'src/img/**/*.webp',
    ])
    .pipe(image())
    .pipe(dest('dist/img'))
    .pipe(browserSync.stream())
}

watch('src/fonts/**/*', fonts)
watch('src/img/svg/**/*.svg', svgSprites)
watch('src/js/**/*.js', scripts)
watch('src/**.html', defaultExport)
watch('src/**/*.scss', buildStyles)
watch('src/styles/vendor/**/*.css', buildResources)
watch('src/img/**/*', images)


exports.clean = clean
exports.htmlMinify = htmlMinify
exports.scripts = scripts
exports.sourcemapsDev = sourcemapsDev
exports.defaultExport = defaultExport
exports.buildStyles = buildStyles
exports.buildResources = buildResources
exports.fonts = fonts
exports.images = images



exports.default = series(clean, fonts, scripts , defaultExport , buildStyles , buildResources, images, svgSprites, sourcemapsDev, watchFiles)

