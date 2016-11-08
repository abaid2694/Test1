<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
  
  	$('#tapholdtext').on("taphold",function(){
    	$(this).scrollLeft();
 	});                       

	$('#taptext').on("tap",function(){
    	alert("LOL!");
 	}); 

	$('#swipetext').on("swipeleft",function(){
    	$(this).css('color', 'blue');
  	});   


});