define(["modules/updateHeading"], function (updateHeading) {
    
    var removeTodo = function(self) {
        self.parent().parent().remove();
        updateHeading.updateHeading();
    };

    return {
        removeTodo: removeTodo
    }
  
});