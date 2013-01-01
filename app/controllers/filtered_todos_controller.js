Todos.FilteredTodosController = Ember.ArrayController.extend({
  init: function(o){
    this._super(o);
    window.X = this;
  },
  toggleTodo: function(event){
    var todo = event.context;
    todo.toggleProperty('completed');
    this.get('content').removeObject(todo);
  }
});
