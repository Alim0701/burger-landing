const { task, src, dest, watch, series, parallel } = require("gulp");
const rm = require("gulp-rm");
const sass = require("gulp-sass");
const sassGlob = require("gulp-sass-glob");
const px2rem = require("gulp-px2rem");
const autoprefixer = require("gulp-autoprefixer");
const gcmq = require("gulp-group-css-media-queries");
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();
const sourcemaps = require("gulp-sourcemaps");
const reload = browserSync.reload;
const gulpif = require("gulp-if");
const env = process.env.NODE_ENV;

sass.compiler = require("node-sass");

task("clean", () => {
  return src("dist/**/*", { read: false }).pipe(rm());
});

task("copy:html", () => {
  return src("src/*.html")
    .pipe(dest("dist"))
    .pipe(reload({ stream: true }));
});

task("copy:fonts", () => {
  return src("src/fonts/*")
    .pipe(dest("dist/fonts"))
    .pipe(reload({ stream: true }));
});

task("copy:img", () => {
  return src("src/img/**/*")
    .pipe(dest("dist/img"))
    .pipe(reload({ stream: true }));
});

const styles = [
  "node_modules/normalize.css/normalize.css",
  "node_modules/slick-carousel/slick/slick.css",
  "node_modules/onepage-scroll/onepage-scroll.css",
  "src/css/**/*.scss",
];

task("styles", () => {
  return src(styles)
    .pipe(gulpif(env === "dev", sourcemaps.init()))
    .pipe(concat("main.min.scss"))
    .pipe(sassGlob())
    .pipe(sass().on("error", sass.logError))
    .pipe(gulpif(env === "prod", autoprefixer()))
    .pipe(px2rem())
    .pipe(gulpif(env === "prod", gcmq()))
    .pipe(gulpif(env === "prod", cleanCSS()))
    .pipe(gulpif(env === "dev", sourcemaps.write()))
    .pipe(dest("dist/css"))
    .pipe(reload({ stream: true }));
});

const scripts = [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/onepage-scroll/jquery.onepage-scroll.min.js",
  "node_modules/slick-carousel/slick/slick.min.js",
  "src/js/*.js",
];

task("scripts", () => {
  return src(scripts)
    .pipe(gulpif(env === "dev", sourcemaps.init()))
    .pipe(concat("main.min.js", { newLine: ";" }))
    .pipe(gulpif(env === "dev", sourcemaps.write()))
    .pipe(dest("dist/js"))
    .pipe(reload({ stream: true }));
});

task("server", () => {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });
});

task("watch", () => {
  watch("./src/*.html", series("copy:html"));
  watch("./src/img/**/*", series("copy:img"));
  watch("./src/css/**/*.scss", series("styles"));
  watch("./src/js/*.js", series("scripts"));
});

task(
  "default",
  series(
    "clean",
    parallel("copy:html", "copy:img", "copy:fonts", "styles", "scripts"),
    parallel("watch", "server")
  )
);

task(
  "build",
  series(
    "clean",
    parallel("copy:html", "copy:img", "copy:fonts", "styles", "scripts"),
    parallel("watch", "server")
  )
);
