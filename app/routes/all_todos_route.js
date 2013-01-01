Todos.AllTodosRoute = Ember.Route.extend({
  model: function(){
    return Todos.Todo.all();
  },
  renderTemplates: function(){
    this.render('todos_list', {
      into: 'todos'
    });
  }
});