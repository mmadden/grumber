/*
 * Hey! This is an Ember application. It's built using a 
 * neuter task (see this project's Gruntfile for what that means).
 *
 * `require`s in this file will be stripped and replaced with
 * the string contents of the file they refer to wrapped in
 * a closure.
 *
 * Each file contains its own commenting, so feel free to crack
 * them open if you want more information about what is going on.
*/

/*
 * These are the dependencies for an Ember application
 * and they have to be loaded before any application code.
*/
require('components/jquery/jquery');

/*
 * Since we're precompiling our templates, we only need the
 * handlebars-runtime microlib instead of the
 * entire handlebars library and its string parsing functions.
*/
require('components/handlebars/handlebars.runtime');

/* This is Ember. I think you'll like it */
require('components/ember/lib/ember');

require('components/ember-data/ember-data');

/*
  this file is generated as part of the build process.
  If you haven't run that yet, you won't see it.

  It is excluded from git commits since it's a 
  generated file.
*/
require('build/temp/templates');

/*
  Creates a new instance of an Ember application and
  specifies what HTML element inside index.html Ember
  should manage for you.
*/
window.Todos = Ember.Application.create({
  rootElement: window.TESTING ? '#qunit-fixture' : '#todoapp'
});

if (window.TESTING) {
  window.Todos.deferReadiness();
}

/* 
 * Model layer. 
 * Ember.Object itself provides most of what
 * model layers elsewhere provide. Since TodoMVC
 * doesn't communicate with a server, plain
 * Ember.Objects will do.
*/
require('app/models/store');
require('app/models/todo');

/*
 * Views layer.
 * You'll notice that there are only a few views.
 * Ember accomplishes a lot in its templates and 
 * Views are only necessary if you have view-specific
 * programming to do. 
*/
require('app/views/edit_todo_textfield');
require('app/views/create_todo_textfield');

/*
 * Controller layer.
 * Controllers wrap objects and provide a place
 * to implement properties for display
 * whose value is computed from the content of the
 * controllers wrapped objects.
*/
require('app/controllers/todos_controller');
require('app/controllers/filtered_todos_controller');

/* 
 * States (i.e. Routes)
 * Handles serialization of the application's current state
 * which results in view hierarchy updates. Responds to
 * actions.
*/
require('app/routes/router');
