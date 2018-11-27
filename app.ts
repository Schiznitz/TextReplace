#!/usr/bin/env node

import * as program from "commander";
import * as gulp from "gulp";
import * as replace from "gulp-replace";
import * as string2regexp from "string-to-regexp";

let app = (source: string, dest: string, pattern: string, target: string) => {
    gulp.src(source)
        .pipe(replace(string2regexp(pattern), target))
        .pipe(gulp.dest(dest));
}

program
    .usage('<source> <dest> <pattern> <replace>')
    .action(app);

program.parse(process.argv);
