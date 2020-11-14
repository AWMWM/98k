const gulp = require('gulp');
const http = require('http');
const connect = require("gulp-connect");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const rename = require("gulp-rename");
const cleanCss = require("gulp-clean-css");


//搭建服务器
gulp.task("server", done => {
        connect.server({
            root: "dist",
            livereload: true
        })
        done();
    })
    //拷贝文件夹
gulp.task("copyfile", done => {
        gulp.src("images/**").pipe(gulp.dest("dist/images")).pipe(connect.reload());
        gulp.src("html/**").pipe(gulp.dest("dist/html")).pipe(connect.reload());
        gulp.src("js/**").pipe(gulp.dest("dist/js")).pipe(connect.reload());
        gulp.src("file/**").pipe(gulp.dest("dist/file")).pipe(connect.reload());
        gulp.src("jq/**").pipe(gulp.dest("dist/jq")).pipe(connect.reload());
        gulp.src("index.html").pipe(gulp.dest("dist")).pipe(connect.reload());
        done();
    })
    //监听
gulp.task("watch", done => {

    gulp.watch("*.html", gulp.series("copyfile"));
    gulp.watch("sass/*.scss", gulp.series("sass"));
    gulp.watch("images/**", gulp.series("copyfile"));
    gulp.watch("html/**", gulp.series("copyfile"));
    gulp.watch("js/**", gulp.series("copyfile"));
    gulp.watch("jq/**", gulp.series("copyfile"));
    gulp.watch("html/**", gulp.series("copyfile"));

    done();
});

//sass
gulp.task("sass", done => {

    gulp.src("sass/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());

    done();
});



gulp.task("build", gulp.parallel("copyfile", "sass"));
gulp.task("default", gulp.series("build", "server", "watch"));