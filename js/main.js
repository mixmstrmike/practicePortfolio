$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});


/******************************************************************************************************************************
Learn More Page Scroll
*******************************************************************************************************************************/
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/******************************************************************************************************************************
Menu
*******************************************************************************************************************************/ 
(function() {

	var bodyEl = document.body,
		content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' );

		var iconList = document.getElementsByClassName('icon-list')

	function init() {
		initEvents();
	}

	function initEvents() {
		console.log('navicons: ', iconList)
		openbtn.addEventListener( 'click', toggleMenu );
		$(iconList).on('click', '#nav-icon', toggleMenu)
		
	}

	function toggleMenu() {
		if($(bodyEl).hasClass('show-menu')){
			classie.remove( bodyEl, 'show-menu' )
		}else{
			classie.add( bodyEl, 'show-menu' )
		}

	}

	init();

})();


