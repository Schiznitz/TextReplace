#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const program = require("commander");
const gulp = require("gulp");
const replace = require("gulp-replace");
const string2regexp = require("string-to-regexp");
let app = (source, dest, pattern, target) => {
    gulp.src(source)
        .pipe(replace(string2regexp(pattern), target))
        .pipe(gulp.dest(dest));
};
program
    .usage('<source> <dest> <pattern> <replace>')
    .action(app);
program.parse(process.argv);
//# sourceMappingURL=app.js.map