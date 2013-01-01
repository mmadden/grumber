require('app/routes/todos_route');

Todos.Router.map(function(match) {
  match("/").to("todos", function(match){
    match("/").to("allTodos");
    match("/active").to("activeTodos");
    match("/completed").to("completedTodos");
  });
});
