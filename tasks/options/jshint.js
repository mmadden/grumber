// reads the project's .jshintrc file and applies coding standards

module.exports = {
    all: [
        'Gruntfile.js',
        'app/**/*.js'
    ],
    options: {
        jshintrc: '.jshintrc'
    }
};