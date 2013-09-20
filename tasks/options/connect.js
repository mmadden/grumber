// provides an HTTP server for development/testing

module.exports = {
    dev: {
        options: {
            port: 8500
        }
    },
    dist: {
        options: {
            port: 8500,
            keepalive: true
        }
    }
};