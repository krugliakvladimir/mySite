 $(document).ready(function(){
    $(".top-header-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
		
		

	});

wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       200,          
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();	
					
					
			
			
			
			
});





$(document).ready(function() {
  $('.poupUpBg').click(function(){
	$(this).fadeOut();
	$('.poupUp').fadeOut();
  });
  $('.click').click(function(){
	$('.poupUpBg').fadeIn();
	$('.poupUp').fadeIn();
  });
});



$(document).ready(function() {

  				var h = $(window).height();

  $(window).scroll(function () { 

    console.log($(window).scrollTop());

    if ($(window).scrollTop() > h/2) {
      $('.topBtn').addClass('opct');
    }

    if ($(window).scrollTop() < h/2) {
      $('.topBtn').removeClass('opct');
    }
  });
});




$(document).ready(function() {
    $('.top-header-nav a').click(function(){
	 $('#menu').prop( 'checked', false );
  });
});
