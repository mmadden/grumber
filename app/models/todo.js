Todos.Todo = Ember.Object.extend({
  id: null,
  title: null,
  completed: false,
  // set store reference upon creation instead of creating static bindings
  store: function(){
    return Todos.Todo.store;
  }.property(),

  // Observer that will react on item change and will update the storage
  todoChanged: function() {
    this.get( 'store' ).update( this );
  }.observes( 'title', 'completed' )
});

Todos.Todo.reopenClass({
  store: Todos.Store.create({
    name: 'todomvc-ember-example'
  }),
  createRecord: function(properties, ignoreStore){
    if (ignoreStore) {
      return this.createRecord(properties);
    } else {
      return this.store.createRecord(this.create( properties ));
    }
  },
  destroy: function(model){
    this.store.remove(model);
  },
  find: function(){
    return this.all();
  },
  all: function(){
    return this.store.get('all');
  }
});
