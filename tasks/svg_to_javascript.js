/*
 * grunt-svg-to-javascript
 * https://github.com/leonied7/grunt-svg-to-javascript
 *
 * Copyright (c) 2018 Denis Kolosov
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('svg_to_javascript', '', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            processContent: function (src) {
                return src;
            },
            processName: function (name) {
                return name;
            },
            objName: 'svgData'
        });

        var separator = ', \n';
        var escaper = /\\|'|\r|\n|\t/g;
        var escapes = {
            "'": '"',
            '\\': '\\',
            '\r': ' ',
            '\n': ' ',
            '\t': ' '
        };

        // Iterate over all specified file groups.
        this.files.forEach(function (f) {
            // Concat specified files.
            var data = f.src.filter(function (filePath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filePath)) {
                    grunt.log.warn('Source file "' + filePath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function (filePath) {
                var src = options.processContent(grunt.file.read(filePath));
                var compiled = src.replace(escaper, function (match) {
                    return escapes[match];
                });

                var filename = options.processName(filePath);
                var theFile = filename.match(/\/([^/]*)$/)[1];
                var variableName = theFile.slice(0, -4);

                return "'" + variableName + "':'" + compiled + "'";
            }).join(grunt.util.normalizelf(separator));

            var output = "(function(){\n\n" +
                "window." + options.objName + " = {\n" + data +
                "\n}\n\n" +
                "}());";
            // grunt.log.writeln(data);
            // Write the destination file.
            grunt.file.write(f.dest, output);

            // Print a success message.
            grunt.log.writeln('File "' + f.dest + '" created.');
        });
    });

};
