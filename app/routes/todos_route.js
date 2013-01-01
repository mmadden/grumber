require('app/routes/all_todos_route');
require('app/routes/active_todos_route');
require('app/routes/completed_todos_route');

Todos.TodosRoute = Ember.Route.extend({
  model: function(){
    return Todos.Todo.all();
  },

  events: {
    createTodo: function(route, text){
      if ( !text.trim() ) { return; }
    
      Todos.Todo.createRecord({
        title: text
      });  
    },

    removeTodo: function(route, todo){
      Todos.Todo.destroy(todo);
    },

    editTodo: function(route, todo){
      todo.set('editing', true); 
    }
    
  }
});
