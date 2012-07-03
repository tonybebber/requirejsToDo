define(["modules/updateHeading"], function (updateHeading) {
    
    var completeTodo = function(self) {
        self.parent().parent().find('.itemWrap').addClass('strikethrough');
        self.remove();
        updateHeading.updateHeading();
    };

    return {
        completeTodo: completeTodo
    }
  
});