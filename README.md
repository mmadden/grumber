# Grumber

Launch your next Ember project with modern conveniences that no front-end developer should be without. Grumber is a lean and simple boilerplate for your next front-end JavaScript project based on [Ember](http://emberjs.com/), [Grunt](http://gruntjs.com), and [HTML5 Boilerplate](http://www.initializr.com/).

## Features

* simple and flexible build process using [Grunt](http://gruntjs.com/)
* watches source files for changes, rebuilds and activates LiveReload in browser
* concatenates JS files and generates a [Source Map](http://net.tutsplus.com/tutorials/tools-and-tips/source-maps-101/)
* applies your coding standards using [jshint](http://www.jshint.com/)
* pre-compiles [Handlebars](http://handlebarsjs.com/) templates
* production JS minification with [UglifyJS](http://lisperator.net/uglifyjs/)
* built-in web server for prototyping until your server/API is ready

I am leaving out extras like a scaffolding tool, module loader, CSS framework/compiler, etc. since your projects and tastes are likely to be different than my own. My hope is that you can quickly integrate anything you need. This is meant to be lightweight. If you are looking for something heavier and more opinionated, check out [Ember App Kit](http://github.com/stefanpenner/ember-app-kit).

## Getting Started

First, ensure all dependencies are installed and up-to-date:

### Primary dependencies

* [Node.js](http://nodejs.org/)
* [Grunt](http://gruntjs.com)
`[sudo] npm install grunt-cli -g`

### Development dependencies
From this project folder run
```shell
[sudo] npm install
```

This will install the development dependencies listed in the `package.json` file
and store them in locally in `node_modules`. These modules are invoked when
running the associated Grunt tasks.

Once all the dependencies are installed you should be ready to put Grunt to
work...


## Development

From the project folder run

```shell
grunt
```

This starts the default task defined in `tasks/default.js`. This will build a 
development version of your application, start a server on port 8500 (by default),
and start watching the source files for changes.

Now you can open `localhost:8500` in a browser to load the Ember application.

### Development build only

If you intend to automate your builds (via continuous integration) or just want
to build without the `watch` and `connect:dev` (server) tasks use

```shell
grunt dev
```

The `dev` task (also run from the `default` task) cleans the target directories,
compiles the Handlebars templates, and concatenates the JS source files to a single
file for the browser, and generates the Source Map.

Grunt also allows you to run multiple tasks consecutively so running `grunt dev watch` will
build the project and then watch for changes.


## Production

Building the application for final production use is as simple as running

```shell
grunt dist
```

This task is setup to lint the application code, clean the target directories, pre-compile 
the templates, concatenate, and minify the JS.


## Gratitude
 
Thanks to [Trek Glowacki](http://github.com/trek) for his [ember-todos](http://github.com/trek/ember-todos-with-build-tools-tests-and-other-modern-conveniences) project which helped me learn Grunt when it wasn't so easy.
