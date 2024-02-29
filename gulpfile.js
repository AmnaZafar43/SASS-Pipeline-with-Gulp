// @ts-nocheck

import pkg from "gulp";
const { watch, src, dest, series } = pkg;
import gulpSass from "gulp-sass";
import dartSass from "sass";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";

const sass = gulpSass(dartSass);

function CompiledCss() {
  return src("src/sass/*.sass")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(dest("dist/css"));
}

function watchTask() {
  watch("src/sass/*.sass", CompiledCss);
}

export default series(CompiledCss, watchTask);
