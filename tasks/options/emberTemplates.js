// precompiles Handlebars templates for faster rendering and so we only need to include the handlebars-runtime

module.exports = {
    compile: {
        options: {
            templateBasePath: /app\//
        },
        files: {
            '<%= dirs.temp %>/templates.js': ['app/**/*.hbs']
        }
    }
};
