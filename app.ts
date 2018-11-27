#!/usr/bin/env node

import * as program from "commander";
import * as gulp from "gulp";
import * as replace from "gulp-replace";
import * as string2regexp from "string-to-regexp";

let app = (source: string, dest: string, replaces: [string]) => {
    let stream = gulp.src(source);

    for (let i = 0; i < replaces.length; i += 2) {
        let pattern = string2regexp(replaces[i]);
        let target = replaces[i + 1];

        stream = stream.pipe(replace(pattern, target));
    }

    stream.pipe(gulp.dest(dest));
}

program
    .arguments('<source> <dest> <replaces...>')
    .action(app);

program.on('--help', () => {
    console.log('');
    console.log('Examples:');
    console.log('TextReplace /SourceDir/**/*.txt /DestDir /\\w+/ Word /Hello/g World');
})

program.parse(process.argv);
