// concatenates files and generates a source map file

module.exports = {
    dev: {
        options: {
            sourceRoot: '/'
        },
        files: {
            '<%= dirs.dev %>/app.js': [
                'vendor/jquery.js',
                'vendor/handlebars.runtime.js',
                'vendor/ember.js',
                '<%= dirs.temp %>/templates.js',
                'app/**/*.js'
            ]
        }
    }
};