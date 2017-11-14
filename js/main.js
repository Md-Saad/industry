$(document).ready(function() {
			 
			  $("#doing_list").owlCarousel({
			 
				  autoPlay: 3000, //Set AutoPlay to 3 seconds
			 
				  items : 3,
				  itemsDesktop : [1199,3],
				  itemsDesktopSmall : [979,3],
				  itemsMobile: 	[360,1],
				  navigation: 	true,
				  navigationText:	[
											  "<img src='./img/left_ar.png'/>",
											  "<img src='./img/right_ar.png'/>"
											  ],
				  theme: "",
			  });
			 $("#client").owlCarousel({
			 
				  autoPlay: 3000, //Set AutoPlay to 3 seconds
			 
					items : 5,
				  itemsDesktop : [1199,4],
				  itemsDesktopSmall : [979,3],
				  itemsMobile: 	[360,1],
				  navigation: 	true,
				  navigationText:	[
											  "<img src='./img/left_ar.png'/>",
											  "<img src='./img/right_ar.png'/>"
											  ],
				  theme: "",
			  });
			  console.log( "ready!" );
});
