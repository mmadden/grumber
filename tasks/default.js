// default task (what runs when just typing 'grunt' in the console)

module.exports = function(grunt) {
    grunt.registerTask('default', ['dev', 'connect:dev', 'watch']);
};

