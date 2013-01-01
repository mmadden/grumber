require('dependencies/jquery-1.8.3');
require('dependencies/ember');
require('dependencies/compiled_templates');

window.Todos = Ember.Application.create({
  VERSION: '1.0',
  rootElement: '#todoapp',
  storeNamespace: 'todos-emberjs'
});

// model layer
require('app/models/store');
require('app/models/todo');

// view layer
require('app/views/edit_todo_textfield');
require('app/views/todo_entry_field');

// controller layer
require('app/controllers/todos_controller');
require('app/controllers/filtered_todos_controller');

// states
require('app/routes/router');
