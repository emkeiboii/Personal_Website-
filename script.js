$('.square').on('click', function() {
  var $element = $(this);
  
  var $openElement = $('<div class="absoluteSquare"></div>');
  
  $openElement.css('left', $element.position().left);
  $openElement.css('right', $element.width());
      
  $element.html($openElement);
  
  $openElement.animate({left : 0, width : $('.content').width()}, 500);
 
});