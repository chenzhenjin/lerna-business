const gulp = require("gulp");
const babel = require("gulp-babel");
const ts = require("gulp-typescript");
const del = require("del");
const tsconfig = require("./tsconfig.json");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

const through = require("through2");

function clean() {
  return del("./lib/**");
}

function buildES() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: "ES6",
  });
  return gulp
    .src(["src/**/*.{ts,tsx}"], {
      ignore: ["**/demos/**/*", "**/tests/**/*"],
    })
    .pipe(tsProject)
    .pipe(
      babel({
        plugins: ["./babel-transform-scss-to-css"],
      })
    )
    .pipe(gulp.dest("lib/es/"));
}

function buildCJS() {
  return gulp
    .src(["lib/es/**/*.js"])
    .pipe(
      babel({
        plugins: ["@babel/plugin-transform-modules-commonjs"],
      })
    )
    .pipe(gulp.dest("lib/cjs/"));
}

function buildDeclaration() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: "ES6",
    declaration: true,
    emitDeclarationOnly: true,
  });
  return gulp
    .src(["src/**/*.{ts,tsx}"], {
      ignore: ["**/demos/**/*", "**/tests/**/*"],
    })
    .pipe(tsProject)
    .pipe(gulp.dest("lib/es/"))
    .pipe(gulp.dest("lib/cjs/"));
}

function buildStyle() {
  return gulp
    .src(["./src/**/*.scss"], {
      base: "./src/",
      ignore: ["**/demos/**/*", "**/tests/**/*", "*.patch.scss"],
    })
    .pipe(sass())
    .pipe(
      postcss([
        autoprefixer({
          overrideBrowserslist: "iOS >= 10, Chrome >= 49",
        }),
      ])
    )
    .pipe(gulp.dest("./lib/es"))
    .pipe(gulp.dest("./lib/cjs"));
}

function generatePackageJSON() {
  return gulp
    .src("./package.json")
    .pipe(
      through.obj((file, enc, cb) => {
        const rawJSON = file.contents.toString();
        const parsed = JSON.parse(rawJSON);
        delete parsed.scripts;
        delete parsed.devDependencies;
        delete parsed.publishConfig;
        delete parsed.files;
        delete parsed.resolutions;
        delete parsed.packageManager;
        const stringified = JSON.stringify(parsed, null, 2);
        file.contents = Buffer.from(stringified);
        cb(null, file);
      })
    )
    .pipe(gulp.dest("./lib/"));
}

function copyTypings() {
  return gulp
    .src("./src/typings/**/*")
    .pipe(gulp.dest("lib/es/typings"))
    .pipe(gulp.dest("lib/cjs/typings"));
}

function copyMetaFiles() {
  return gulp.src(["./README.md", "./LICENSE.txt"]).pipe(gulp.dest("./lib/"));
}

exports.default = gulp.series(
  clean,
  buildES,
  buildCJS,
  gulp.parallel(buildDeclaration, buildStyle),
  //   copyPatchStyle,
  copyTypings,
  copyMetaFiles,
  generatePackageJSON
  //   buildBundles
);
