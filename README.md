# Grumber

Grumber is a starter-kit for client-side JavaScript projects based on
[Ember](http://emberjs.com/), [Grunt](http://gruntjs.com), and
[Foundation](http://foundation.zurb.com/).

It is *neither* a [platypus](http://grooveshark.com/s/Platt+Opus/3iic70?src=5)
nor [scaffolding tool](http://github.com/rpflorence/ember-tools).

Special thanks to [Trek Glowacki](http://github.com/trek) for his many
contributions to the Ember community. Until he shared [this](http://github.com/trek/ember-todos-with-build-tools-tests-and-other-modern-conveniences),
I couldn't hack a half-decent Ember build to save my life.

## Features

* idiomatic [Ember](http://emberjs.com/) sample application
* sane file organization for front-end development (WIP)
* development and production build process using [Grunt](http://gruntjs.com/)
* JS dependency management using [grunt-neuter](http://github.com/trek/grunt-neuter)
and simple require() statements
* [Source maps](http://net.tutsplus.com/tutorials/tools-and-tips/source-maps-101/)
for JS and CSS/SCSS in dev build
* [Handlebars](http://handlebarsjs.com/) template pre-compiling
* [Compass](http://compass-style.org/) and [Foundation](http://foundation.zurb.com/)
integration with SCSS compilation
and production minification
* JS minification with [UglifyJS](http://lisperator.net/uglifyjs/)
* auto and manual bumping of version/build numbers
* applies coding standards using [jshint](http://www.jshint.com/)
* package management thanks to [Bower](http://twitter.github.com/bower/)
* watches source files and rebuilds when changes are detected
* optional built-in web server for development/testing (enabled by default)

### To Do
* Foundation 4 integration
* refactor app templates/styles for Foundation
* swap out TodoMVC for an "ambitious web application"
* QUnit tests
* live reload that works on Windows?


## Getting Started

First, ensure all dependencies are installed and up-to-date:

### Primary dependencies

* [Node.js](http://nodejs.org/)
* [Grunt](http://gruntjs.com)
`npm install grunt-cli -g`
* [Bower](http://twitter.github.com/bower/)
`npm install bower -g`
* [Ruby](http://www.ruby-lang.org/en/downloads/)
* [Compass](http://compass-style.org/install/)
`gem install compass`
* [Foundation](http://foundation.zurb.com/docs/compass.php)
`gem install zurb-foundation`


### Development dependencies
From this project folder run
```shell
npm install
```

This will install the development dependencies listed in the `package.json` file
and store them in locally in `node_modules/`. These modules are invoked when
running the associated Grunt tasks.

Next, run

```shell
bower install
```

This will install the application dependencies listed in our `component.json`
file and store them locally in `components/`. All javascript dependencies are
referenced from our app code using (for example)
`require('components/jquery/jquery');` and will be compiled at build time
into a single javascript file with our application code.

Once all the dependencies are installed you should be ready to put Grunt to
work...


## Development

From the project folder run

```shell
grunt
```

This starts the default `dev` task defined in `Gruntfile.js`. (`grunt dev`
is equivalent) This will build a development version of your application, serve
it on port 80 (by default), and start watching the source files for changes. See
`Gruntfile.js` for a deeper dive into what happens here.

Now you can open `localhost` in a browser to load the application.

### Development build only

If you intend to automate your builds (via continuous integration) or just want
to build without the `watch` and `connect:dev` tasks use

```shell
grunt build:dev
```

Both `dev` and `build:dev` bump the build version, clean the `build/dev/`
folder, compile the templates/JS/CSS, and copy `static/` to `build/dev/`.

Grunt also allows you to be specific so running `grunt build:dev watch` will
build the project and then watch for changes.


## Production

Building the application for final production use is as simple as running

```shell
grunt build:dist
```

Out of the box this task is setup to bump the patch version, lint the
application code, pre-compile the templates, compile and minify the JS and CSS,
and copy the static assets. If it completes successfully the application will be
ready for deployment from the `build/dist/` folder.

Running `grunt dist` is identical except that it will also start a web server on
port 80 so you can quickly test the production app on `localhost`.


## Files and folders in this project

### .gitignore
This project is managed with git and some files should be left out of version
control, specifically:
 * developement dependencies (`node_modules/`)
 * copied/concatenated/compiled build files (`build/`)

### .jshintrc
This project uses [JSHint](http://www.jshint.com/) for
[linting](http://en.wikipedia.org/wiki/Lint_(software\)) to enforce some coding
standards and avoid common programming mistakes (like missing `var` statements
causing variables to leak into the global scope). These settings are stored as a
dot file so that while developing you can connect the project standards into
your editor of choice and when building for deployment this file can be used by
the build process and deployment can be stopped if it fails the linting process.

### app/
This is where your application code lives. The sample app is heavily commented.
Start reading at `app/app.js` and work your way through.

### build/dev/, build/dist/
If you just checked out this project, these folders will not exist. They are
created as needed when running `grunt [dev|build:dev|dist|build:dist]` and will
contain the final development or production files (respectively).

### component.json
See **Defining a package** at http://twitter.github.com/bower/

### components/
The external libraries required to run the application: jQuery, Handlebars,
Ember, Ember Data, etc.

### Gruntfile.js
[Grunt](http://gruntjs.com/) provides the structure to organize
tasks for actively developing, testing, and deploying this application. If you
want to read more about these, crack open this file - it's also heavily
commented.

### node_modules/
This development dependencies which are are invoked when running the associated
Grunt tasks.

### package.json
We're using node locally to aid the development process. Mostly
this file is used in development to track development dependencies and allow
other developers to quickly set up a development environment to get started.

### README.md
This file. You're reading it.

### scss/app.scss
This is the root SCSS file which (optionally) includes other SCSS files and
gets compiled down to a single CSS file by Compass at build time and then loaded
in the browser via the `<link>` tag in `static/index.html`.

### static/
These are the static assets which are copied to final build targets and
deployed with the application.

### static/index.html
The 'main.c' of your web app. It includes parts of the page not managed by Ember
and the necessary `<link>` and `<script>` tags to load the application's
resources: a single javascript file and a single css file.

### test/
Er. Yes. Nothing here yet.
