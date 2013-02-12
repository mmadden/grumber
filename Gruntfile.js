/*jshint camelcase: false */
/*global module:false */

module.exports = function (grunt) {

    grunt.log.writeln('Build started ' + new Date().toLocaleString().grey);

    grunt.initConfig({
        /*
         Loads package.json so we can easily reference the name, version, etc.
         */
        pkg: grunt.file.readJSON('package.json'),

        jsFilename: {
            dev: 'app.js',
            dist: '<%= pkg.name %>-<%= pkg.version %>.min.js'
        },

        cssFilename: {
            dev: 'app.css',
            dist: '<%= pkg.name %>-<%= pkg.version %>.min.css'
        },

        /*
         Common directory references used throughout this Gruntfile.js
         */
        dirs: {
            components: 'components',
            staticAssets: 'static',
            temp: 'build/temp',
            dev: 'build/dev',
            dist: 'build/dist'
        },

        /*
         Config for grunt-bumpx which makes it easy to automatically
         increment the version/build # in package.json and component.json.

         Running bump:major will increment the major version while resetting
         the minor, patch, and build. eg. 1.4.3-24 becomes 2.0.0-0
         */
        bump: {
            build: {
                options: {
                    part: 'build'
                },
                src: [ 'package.json', 'component.json' ]
            },
            patch: {
                options: {
                    part: 'patch'
                },
                src: [ 'package.json', 'component.json' ]
            },
            minor: {
                options: {
                    part: 'minor'
                },
                src: [ 'package.json', 'component.json' ]
            },
            major: {
                options: {
                    part: 'major'
                },
                src: [ 'package.json', 'component.json' ]
            }
        },

        /*
         Reads the project's .jshintrc file and applies coding standards.
         Doesn't lint the components or test support files.
         */
        jshint: {
            all: [
                'Gruntfile.js',
                'app/**/*.js',
                'test/**/*.js',
                '!<%= dirs.components %>/*.*',
                '!test/support/*.*'],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        /*
         Cleans out the dev/dist folders at the beginning of a build.
         */
        clean: {
            dev: ['<%= dirs.temp %>', '<%= dirs.dev %>'],
            dist: ['<%= dirs.temp %>', '<%= dirs.dist %>']
        },

        /*
         Finds Handlebars templates and precompiles them into functions.
         The provides two benefits:

         1. Templates render much faster.
         2. We only need to include the handlebars-runtime and not the
         entire Handlebars parser.

         Files will be written out to <%= dirs.temp %>/templates.js
         which is required within the project files so will end up
         as part of our application.

         The compiled result will be stored in Ember.TEMPLATES keyed
         on their file path (with the 'app/templates' stripped).
         */
        ember_templates: {
            options: {
                templateName: function (sourceFile) {
                    return sourceFile.replace(/app\/templates\//, '');
                }
            },
            files: {
                src: ['app/templates/**/*.hbs'],
                dest: '<%= dirs.temp %>/templates.js'
            }
        },

        /*
         A simple ordered concatenation strategy.
         This will start at app/app.js and begin
         adding dependencies in the correct order
         writing their string contents into
         app.full.js

         Additionally it will wrap them in evals
         with @sourceURL statements so errors, log
         statements and debugging will reference
         the source files by line number.
         */
        neuter: {
            options: {
                includeSourceURL: true
            },
            dev: {
                src: 'app/app.js',
                dest: '<%= dirs.dev %>/<%= jsFilename.dev %>'
            },
            dist: {
                options: {
                    includeSourceURL: false
                },
                src: 'app/app.js',
                dest: '<%= dirs.temp %>/app.full.js'
            }
        },

        /*
         Compiles SCSS files to a single CSS file. Depends on having
         Ruby, Compass, and ZURB Foundation installed on the local machine.
         */
        compass: {
            dev: {
                require: 'zurb-foundation',
                src: 'scss',
                dest: '<%= dirs.dev %>',
                outputstyle: 'expanded',
                linecomments: true,
                bundleExec: false,
                forcecompile: true,
                debugsass: true,
                images: '<%= dirs.staticAssets %>/images'
            },
            dist: {
                require: 'zurb-foundation',
                src: 'scss',
                dest: '<%= dirs.temp %>',
                outputstyle: 'compressed',
                linecomments: false,
                bundleExec: false,
                forcecompile: true,
                debugsass: false,
                images: '<%= dirs.staticAssets %>/images'
            }
        },

        /*
         Minifies the app.full.js file (output of neuter task) to a
         named file in dirs.dist
         */
        uglify: {
            files: {
                src: ['<%= dirs.temp %>/app.full.js'],
                dest: '<%= dirs.dist %>/<%= jsFilename.dist %>'
            }
        },

        /*
         Copies static files (index.html, images, etc.) to the dev/dist
         build target, and copies/renames production CSS file.
         */
        copy: {
            'dev': {
                files: [
                    {
                        expand: true,
                        cwd: '<%= dirs.staticAssets %>',
                        src: ['**'],
                        dest: '<%= dirs.dev %>/'
                    }
                ]
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= dirs.staticAssets %>',
                        src: ['**'],
                        dest: '<%= dirs.dist %>/'
                    },
                    {
                        src: '<%= dirs.temp %>/app.css',
                        dest: '<%= dirs.dist %>/<%= cssFilename.dist %>'
                    }
                ]
            }
        },

        /*
         This task replaces the index.html external CSS and JS references to the
         production file names.
         */
        replace: {
            dev: {
                options: {
                    variables: {
                        'app.css': '<%= cssFilename.dev %>',
                        'app.js': '<%= jsFilename.dev %>'
                    },
                    prefix: ''
                },
                files: {
                    '<%= dirs.dev %>/': ['<%= dirs.staticAssets %>/index.html']
                }
            },
            dist: {
                options: {
                    variables: {
                        'app.css': '<%= cssFilename.dist %>',
                        'app.js': '<%= jsFilename.dist %>'
                    },
                    prefix: ''
                },
                files: {
                    '<%= dirs.dist %>/': ['<%= dirs.staticAssets %>/index.html']
                }
            }
        },

        /*
         Provides an HTTP server for development/testing.
         */
        connect: {
            dev: {
                options: {
                    port: 80,
                    base: '<%= dirs.dev %>'
                }
            },
            dist: {
                options: {
                    port: 80,
                    base: '<%= dirs.dist %>',
                    keepalive: true
                }
            }
        },

        /*
         Watch files for changes.

         Changes in static assets will trigger the copy:dev task.

         Changes to components/ember/ember.js or application javascript
         will trigger the neuter:dev task.

         Changes to any templates will trigger the ember_templates
         task and neuter all the files again.

         Changes to any SCSS files will trigger the compass:dev
         task (which writes a new compiled CSS file).
         */
        watch: {
            static_assets: {
                files: ['<%= dirs.staticAssets %>/**'],
                tasks: ['copy:dev']
            },
            application_code: {
                files: ['<%= dirs.components %>/ember/ember.js', 'app/**/*.js', 'app/**/*.hbs'],
                tasks: ['jsBuild']
            },
            scss: {
                files: ['scss/**/*.scss'],
                tasks: ['cssBuild']
            }
        },

        /*
         Runs all .html files found in the test/ directory through PhantomJS.
         Prints the report in your terminal.
         */
        qunit: {
            all: ['test/**/*.html']
        },

        /*
         Find all the <whatever>_test.js files in the test folder.
         These will get loaded via script tags when the task is run.
         This gets run as part of the larger 'test' task registered
         below.
         */
        build_test_runner_file: {
            all: ['test/**/*_test.js']
        }
    });

    grunt.loadNpmTasks('grunt-bumpx');

    /*
     Custom task to update re-load package.json after the bump task
     and output the project name and version to the console.
     */
    grunt.registerTask('bumppost', function () {
        grunt.log.write('Re-loading package.json and updating grunt.config...');
        grunt.config.set('pkg', grunt.file.readJSON('package.json'));
        grunt.log.ok().writeln();
        grunt.log.writeln(grunt.template.process('<%= pkg.name %> v<%= pkg.version %>').yellow);
    });

    grunt.loadNpmTasks('grunt-compass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-ember-templates');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-neuter');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');

    /*
     A task to build the test runner html file that get place in
     /test so it will be picked up by the qunit task. Will
     place a single <script> tag into the body for every file passed to
     its configuration above in the grunt.initConfig above.
     */
    grunt.registerMultiTask('build_test_runner_file', 'Creates a test runner file.', function () {
        var tmpl = grunt.file.read('test/support/runner.html.tmpl');
        var renderingContext = {
            data: {
                files: this.filesSrc.map(function (fileSrc) {
                    return fileSrc.replace('test/', '');
                })
            }
        };
        grunt.file.write('test/runner.html', grunt.template.process(tmpl, renderingContext));
    });

    /*
     A task to run the application's unit tests via the command line.
     It will
     - convert all the handlebars templates into compile functions
     - combine these files + application files in order
     - lint the result
     - build an html file with a script tag for each test file
     - headlessy load this page and print the test runner results
     */
    grunt.registerTask('test', ['ember_templates', 'neuter:dev', 'jshint', 'build_test_runner_file', 'qunit']);

    /*
     Default task. (what runs when just typing 'grunt' in the console)
     */
    grunt.registerTask('default', 'dev');

    /*
     Dev task. Builds the project for development/debugging, starts
     an HTTP server, and starts watching source files for changes.
     */
    grunt.registerTask('dev', ['build:dev', 'connect:dev', 'watch']);

    /*
     Dist task. Builds the project for production use and starts
     an HTTP server.
     */
    grunt.registerTask('dist', ['build:dist', 'connect:dist']);


    grunt.registerTask('jsBuild', ['ember_templates', 'neuter:dev']);
    grunt.registerTask('cssBuild', ['compass:dev']);


    /*
     Build:dev task. Bumps the build version, cleans the dev folder,
     compiles templates, neuters application code, compiles SCSS,
     and copies the static assets.
     */
    grunt.registerTask('build:dev',
        [
            'bump:build',
            'bumppost',
            'clean:dev',
            'jsBuild',
            'cssBuild',
            'copy:dev'
        ]
    );

    /*
     Build:dist task. Bumps the patch version, jshint's app JS, cleans
     the dist folder, compiles templates, neuters application code,
     minifies JS, SCSS compilation/minification, copies static assets
     and rewrites index.html JS/CSS references to production files.
     */
    grunt.registerTask('build:dist',
        [
            'bump:patch',
            'bumppost',
            'jshint',
            'clean:dist',
            'ember_templates',
            'neuter:dist',
            'compass:dist',
            'uglify',
            'copy:dist',
            'replace:dist'
        ]
    );
};