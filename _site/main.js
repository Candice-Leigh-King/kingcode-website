

$(document).ready(function() {
	//make sure the page is ready befor running the scripts
	// This is the hamburger menu
	$(".hamburger").click(function(){

	  $(this).toggleClass('active');
	  $(".mobile-menu").fadeToggle();

	});
	// end hamburger menu

	// faqs

	$(".accordion1").click(function(){

		$(this).toggleClass('active');
		$(".panel1").slideToggle();
		})

	$(".accordion2").click(function(){

		$(this).toggleClass('active');
		$(".panel2").slideToggle();
		})

	$(".accordion3").click(function(){

		$(this).toggleClass('active');
		$(".panel3").slideToggle();
		})

	$(".accordion4").click(function(){

		$(this).toggleClass('active');
		$(".panel4").slideToggle();
		})

	$(".accordion5").click(function(){

		$(this).toggleClass('active');
		$(".panel5").slideToggle();
		})

	$(".accordion6").click(function(){

		$(this).toggleClass('active');
		$(".panel6").slideToggle();
		})

	$(".accordion7").click(function(){

		$(this).toggleClass('active');
		$(".panel7").slideToggle();
		})

	$(".accordion8").click(function(){

		$(this).toggleClass('active');
		$(".panel8").slideToggle();
		})

		$(".accordion9").click(function(){

			$(this).toggleClass('active');
			$(".panel9").slideToggle();
			})
			
			
});

// end accordian
