

$(document).ready(function() {




    $('.menu').click(function(){
        $('ul').toggleClass('active')
    })
 
	// $(".row").isotope({
	// 	itemSelector:'.gallery-box',
	// 	layoutMode:'fitRows'
	// });

	// $(".filters ul li").click(function() {

	// 	$(".filters ul li").removeClass("active");
	// 	$(this).addClass("active");

	// 	var selector = $(this).attr("data-filter");

	// 	$(".row").isotope({
	// 		filter: selector,
	// 	});

	// 	return false;
	// });


	var typed = new Typed(".typed",{
		strings:['tour on'],
		typeSpeed:200,
		loop:false,
		showCursor:false,
		startDelay:500

	});

});
















