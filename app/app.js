require('dependencies/jquery-1.8.3');
require('dependencies/ember');
require('dependencies/compiled/templates');

window.Todos = Ember.Application.create({
  rootElement: '#todoapp',
  storeNamespace: 'todos-emberjs'
});

// model layer
require('app/models/todo');

// view layer
require('app/views/edit_todo_textfield');
require('app/views/create_todo_textfield');

// controller layer
require('app/controllers/todos_controller');
require('app/controllers/filtered_todos_controller');

// states
require('app/routes/router');
