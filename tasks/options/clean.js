// cleans out the temp and dev/dist folders

module.exports = {
    dev: ['<%= dirs.temp %>', '<%= dirs.dev %>'],
    dist: ['<%= dirs.temp %>', '<%= dirs.dist %>']
};