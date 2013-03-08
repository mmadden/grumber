require('components/ember-data/ember-data');
/*
 A Simple Todo Model

 We define attributes on the model so that ember data
 knows how to work with them. We don't need to create
 an id field, as that is created automatically.
 */
Todos.Todo = DS.Model.extend({
    title: DS.attr('string'),
    completed: DS.attr('boolean')
});

