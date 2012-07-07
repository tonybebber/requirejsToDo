require.config({
    paths: {
        "handlebars": "handlebars"
    }
});

require(["handlebars", "modules/addItems", "modules/removeItems", "modules/completeItems"],
       function (handlebars, addItems, removeItems, completeItems) {
    
    $('#todoSubmit').click(function() {
        if ($('#todoInput').val()) {
           addItems.addTodo($('#todoInput').val());
           $('#todoInput').val('');
        } else {
           alert('Please add something to do');
        }
    });
    
    $('.remove').live('click', function() {
        removeItems.removeTodo($(this));
    });
        
    $('.complete').live('click', function() {
        completeItems.completeTodo($(this));
    });
  
});