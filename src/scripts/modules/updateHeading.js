define(function () {
    
    var updateHeading = function() {
        if ($('.item').length === $('.strikethrough').length && $('.item').length !== 0) {
            $('h2').text('All done...');
        } else if ($('.item').length === 0) {
            $('h2').text('You don\'t have anything to do...');
        } else {
            $('h2').text('You\'ve still got some stuff to do...');
        }
    };

    return {
        updateHeading: updateHeading
    }
  
});