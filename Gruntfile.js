/*jshint camelcase: false */
/*global module:false */
module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      'dist/built.min.js': 'dist/built.js'
    },
    neuter: {
      'build/application.js': 'app/app.js'
    },
    watch: {
      files: ['dependencies/ember.js','app/**/*.js', 'app/**/*.hbs'],
      tasks: ['develop']
    },
    qunit: {
      all: ['test/**/*.html']
    },
    jshint: {
      all: ['Gruntfile.js', 'app/**/*.js', 'test/**/*.js', '!dependencies/*.*'],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    ember_templates: {
      options: {
        templateName: function(sourceFile) {
          return sourceFile.replace(/app\/templates\//, '');
        }
      },
      'dependencies/compiled_templates.js': ["app/templates/*.hbs"]
    },
    test_runner_file: {
      all: ['test/**/*_test.js']
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-neuter');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ember-templates');
  
  grunt.registerMultiTask('test_runner_file', 'Creates a test runner file.', function(){
    var tmpl = grunt.file.read('test/support/base.html.tmpl');
    var renderingContext = {
      data: {
        files: this.file.src.map(function(path){
          return path.replace('test/', '');
        })
      }
    };
    grunt.file.write('test/base.html', grunt.template.process(tmpl, renderingContext));
  });
  

  // Default task.
  grunt.registerTask('default', ['jshint', 'neuter', 'test_runner_file', 'qunit']);
  grunt.registerTask('develop', ['ember_templates', 'neuter']);
};