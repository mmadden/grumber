// dev task builds the project for development/debugging

module.exports = function(grunt) {
    grunt.registerTask('dev', [
        'clean:dev',
        'emberTemplates:compile',
        'concat_sourcemap:dev'
    ]);
};