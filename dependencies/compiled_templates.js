Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<header id=\"header\">\n  <h1>todos</h1>\n</header>\n\n");
  stack1 = helpers.view.call(depth0, "Todos.TodoEntryField", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1));
  return buffer;
});

Ember.TEMPLATES["todos"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, foundHelper, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <strong>");
  stack1 = helpers._triageMustache.call(depth0, "remaining", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "</strong> item left\n    ");
  return buffer;}

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <strong>");
  stack1 = helpers._triageMustache.call(depth0, "remaining", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "</strong> items left\n    ");
  return buffer;}

function program5(depth0,data) {
  
  
  data.buffer.push("All");}

function program7(depth0,data) {
  
  
  data.buffer.push("Active");}

function program9(depth0,data) {
  
  
  data.buffer.push("Completed");}

function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <button ");
  stack1 = helpers.action.call(depth0, "clearCompleted", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = {};
  stack1['class'] = "buttonClass:hidden";
  stack1 = helpers.bindAttr.call(depth0, {hash:stack1,contexts:[],data:data});
  data.buffer.push(escapeExpression(stack1) + " >\n        Clear completed (");
  stack1 = helpers._triageMustache.call(depth0, "completed", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + ")\n      </button>\n    ");
  return buffer;}

  data.buffer.push("<section id=\"main\">\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "\n\n  ");
  stack1 = {};
  stack1['elementId'] = "toggle-all";
  stack1['checkedBinding'] = "allAreDone";
  stack1 = helpers.view.call(depth0, "Ember.Checkbox", {hash:stack1,contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "\n</section>\n\n<footer id=\"footer\">\n  <span id=\"todo-count\">\n    ");
  stack1 = helpers['if'].call(depth0, "oneLeft", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </span>\n\n  <div>\n    <ul id=\"filters\">\n      <li>\n        ");
  stack1 = {};
  stack1['currentWhen'] = "allTodos";
  stack1['activeClass'] = "selected";
  foundHelper = helpers.linkTo;
  stack1 = foundHelper ? foundHelper.call(depth0, "allTodos", {hash:stack1,inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],data:data}) : helperMissing.call(depth0, "linkTo", "allTodos", {hash:stack1,inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </li>\n      <li>\n        ");
  stack1 = {};
  stack1['currentWhen'] = "activeTodos";
  stack1['activeClass'] = "selected";
  foundHelper = helpers.linkTo;
  stack1 = foundHelper ? foundHelper.call(depth0, "activeTodos", {hash:stack1,inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],data:data}) : helperMissing.call(depth0, "linkTo", "activeTodos", {hash:stack1,inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </li>\n      <li>\n        ");
  stack1 = {};
  stack1['currentWhen'] = "completedTodos";
  stack1['activeClass'] = "selected";
  foundHelper = helpers.linkTo;
  stack1 = foundHelper ? foundHelper.call(depth0, "completedTodos", {hash:stack1,inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],data:data}) : helperMissing.call(depth0, "linkTo", "completedTodos", {hash:stack1,inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </li>\n    </ul>\n  <div>\n\n\n  <div id=\"clear-completed\">\n    ");
  stack1 = helpers['if'].call(depth0, "completed", {hash:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n\n</footer>");
  return buffer;
});

Ember.TEMPLATES["todos_list"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <li ");
  stack1 = {};
  stack1['on'] = "doubleClick";
  stack1 = helpers.action.call(depth0, "editTodo", "todo", {hash:stack1,contexts:[depth0,depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = {};
  stack1['class'] = ":view todo.completed:completed todo.editing:editing";
  stack1 = helpers.bindAttr.call(depth0, {hash:stack1,contexts:[],data:data});
  data.buffer.push(escapeExpression(stack1) + ">\n      ");
  stack1 = helpers.unless.call(depth0, "todo.editing", {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </li>\n  ");
  return buffer;}
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <input type=\"checkbox\" \n               class=\"toggle\" \n               ");
  stack1 = {};
  stack1['checked'] = "todo.completed";
  stack1 = helpers.bindAttr.call(depth0, {hash:stack1,contexts:[],data:data});
  data.buffer.push(escapeExpression(stack1) + "\n               ");
  stack1 = helpers.action.call(depth0, "toggleTodo", "todo", {hash:{},contexts:[depth0,depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "\n         >\n        <label>");
  stack1 = helpers._triageMustache.call(depth0, "todo.title", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "</label>\n        <button ");
  stack1 = helpers.action.call(depth0, "removeTodo", "todo", {hash:{},contexts:[depth0,depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + " class=\"destroy\" ></button>\n      ");
  return buffer;}

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = {};
  stack1['todoBinding'] = "todo";
  stack1 = helpers.view.call(depth0, "Todos.EditTodoTextField", {hash:stack1,contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "\n      ");
  return buffer;}

  data.buffer.push("<ul id=\"todo-list\">\n  ");
  stack1 = helpers.each.call(depth0, "todo", "in", "controller", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n");
  return buffer;
});