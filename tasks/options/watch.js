// watch files for changes, run tasks, and reload browser

module.exports = {
    options: {
        livereload: true,
        spawn: false,
        interrupt: true
    },
    app: {
        files: ['app/**/*.js', 'app/**/*.hbs', 'vendor/**/*.js'],
        tasks: ['emberTemplates:compile', 'concat_sourcemap:dev']
    },
    css: {
        files: ['styles/**/*.css']
    }
};