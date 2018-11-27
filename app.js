#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const program = require("commander");
const gulp = require("gulp");
const replace = require("gulp-replace");
const string2regexp = require("string-to-regexp");
let app = (source, dest, replaces) => {
    let stream = gulp.src(source);
    for (let i = 0; i < replaces.length; i += 2) {
        let pattern = string2regexp(replaces[i]);
        let target = replaces[i + 1];
        stream = stream.pipe(replace(pattern, target));
    }
    stream.pipe(gulp.dest(dest));
};
program
    .arguments('<source> <dest> <replaces...>')
    .action(app);
program.on('--help', () => {
    console.log('');
    console.log('Examples:');
    console.log('TextReplace /SourceDir/**/*.txt /DestDir /\\w+/ Word /Hello/g World');
});
program.parse(process.argv);
//# sourceMappingURL=app.js.map