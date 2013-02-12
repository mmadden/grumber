require('components/ember-localstorage-adapter/localstorage_adapter');

/*
  The Ember Data Store

  This is the central way that the application
  communicates with the ember-data backend. We
  have a single Local Storage adapter (using 
  Ryan Florence's ember-localstorage-adapter).
  
  To make the app talk to a different backend,
  (say a Ruby on Rails or Django app) you would
  only need to swap adapters. The rest of your
  model code would stay the same.
*/
Todos.store = DS.Store.create({
  revision: 11,
  adapter: DS.LSAdapter.create()
});
