define(["modules/updateHeading"], function (updateHeading) {
    
    var addTodo = function(item) {
        
        var todoData = {
            'todoItem': item
        };
        
        var todo = $('#todo-template').html();
        var todoTemplate = Handlebars.compile(todo);
        
        $("#todoList").append(todoTemplate(todoData));
        
        updateHeading.updateHeading();
        
    };

    return {
        addTodo: addTodo
    }
  
});