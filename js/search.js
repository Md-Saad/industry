$(document).ready(function() {
	
	/* Simple Style */
	$('.wrapper-simple input[type=submit]').toggle(function(){
		
		$('.arrow2').hide();
		$('.wrapper-simple').animate({'width':'300px'})
				  .end().find('.wrapper-simple input[type=text]').animate({'width': '250px'})
				  .end().find('.wrapper-simple img').animate({'marginLeft': '-5px'})
				  .end().find(this).animate({'marginLeft':'10em'}).attr('value', '\327');
		
	}, function() {
		
		$('.arrow2').show();
		$('.wrapper-simple').animate({'width':'60px'})
				  .end().find('.wrapper-simple input[type=text]').animate({'width': '1px'})
				  .end().find('.wrapper-simple img').animate({'marginLeft': '0'})
				  .end().find(this).animate({'marginLeft':'0'}).attr('value', '');
		
	});
	
	/* Cube Style */
	

	
	/* Cube Style With Animate */


	if(!Modernizr.input.placeholder){
		$("input").each( function(){
				
				thisPlaceholder = $(this).attr("placeholder");
				
				if(thisPlaceholder!=""){
					
					$(this).val(thisPlaceholder);
					
					$(this).focus(function(){ if($(this).val() == thisPlaceholder) $(this).val(""); });
					$(this).blur(function(){ if($(this).val()=="") $(this).val(thisPlaceholder); });
				}
		});
	}
});