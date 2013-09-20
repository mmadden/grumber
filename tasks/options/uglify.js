// minifies the JS file for production

module.exports = {
    dist: {
        files: {
            '<%= dirs.dist %>/app.js': [
                'vendor/jquery.js',
                'vendor/handlebars.runtime.js',
                'vendor/ember.prod.js',
                '<%= dirs.temp %>/templates.js',
                'app/**/*.js'
            ]
        }
    }
};