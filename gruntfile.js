module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    sourceMap: 'true',
                },
                files: {
                    'style.css': './sass/style.scss',
                    'print.css': './sass/print.scss',
                }
            }
        },
        postcss: {
            options: {
                map: true, // inline sourcemaps
                processors: [
                    require('autoprefixer')({ browsers: 'last 2 versions' }), // add vendor prefixes
                    require('cssnano')() // minify the result
                ]
            },
            dist: {
                src: 'style.css'
            }
        },
        watch: {
            files: './sass/*.scss',
            tasks: ['sass']
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'style.css',
                        '*.php',
                        './templates/**.twig',
                        './js/**.js'
                    ]
                },
                options: {
                    proxy: "aside.dev",
                    watchTask: true,
                }
            }
        }
    });

    grunt.registerTask('css', ['sass', 'postcss']);
    grunt.registerTask('dev', ['browserSync', 'watch']);

};