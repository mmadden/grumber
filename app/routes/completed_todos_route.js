Todos.CompletedTodosRoute = Ember.Route.extend({
  model: function(){
    return Todos.Todo.all().filterProperty('completed', true);
  },
  renderTemplates: function(){
    this.render('todos_list', {
      into: 'todos',
      controller: 'filteredTodos'
    });
  },
  setupControllers: function(controller, model) {
    this.controllerFor('filteredTodos').set('content', model);
  }
});
