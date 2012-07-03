define(["modules/updateHeading"], function (updateHeading) {
    
    var addTodo = function(item) {
        
        var markup = "";
        
        markup += "<li>";
        markup += "<span class='itemWrap'><span class='item'>" + item + "</span></span>";
        markup += "<span class='btnWrap'>";
        markup += "<span class='complete'>complete</span>";
        markup += "<span class='remove'>remove</span>";
        markup += "</span>";
        markup += "</li>";
        
        $('ul#todoList').append(markup);
        
        updateHeading.updateHeading();
        
    };

    return {
        addTodo: addTodo
    }
  
});