/*jshint camelcase: false */
/*global module:false */

function loadConfig(path) {
    var glob = require('glob');
    var object = {};
    var key;
    glob.sync('*', {cwd: path}).forEach(function(option) {
        key = option.replace(/\.js$/,'');
        object[key] = require(path + option);
    });
    return object;
}

module.exports = function(grunt) {

    var config = {
        pkg: grunt.file.readJSON('package.json'),

        // output targets used by tasks, modify as needed
        dirs: {
            temp: 'build',
            dev: 'build',
            dist: 'build'
        }
    };

    // load config for each grunt task
    grunt.util._.extend(config, loadConfig('./tasks/options/'));

    grunt.initConfig(config);

    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    // load local tasks
    grunt.task.loadTasks('./tasks');
};