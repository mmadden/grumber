// dist task builds the project for production use

module.exports = function(grunt) {
    grunt.registerTask('dist', [
        'jshint',
        'clean:dist',
        'emberTemplates:compile',
        'uglify:dist'
    ]);
};