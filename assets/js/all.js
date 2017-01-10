(function($) {
    jQuery.fn.pushmenu = function(options){

        options = $.extend({
            pushmenu: ''
        }, options);

		this.click(function() {
	        $('body, '+ options.pushmenu).addClass('active');
	        $('html, body').css('overflow', 'hidden');
	        $('body').append('<div class="overlay light"></div>');

	        $('.overlay, .pushmenu-close').click(function(){
	            $('body, '+ options.pushmenu).removeClass('active');
	            $('html, body').css('overflow', 'auto');
	            $('.overlay').remove();
	        });

	        return false;
        });
    };
})(jQuery);
(function($) {
    jQuery.fn.accordion = function(){

		var panels = $(this).find('.item-content').hide();
		$(this).find('.item-content:first').show();
		$(this).find('.item-title').click(function() {
			if ($(this).siblings('.item-content').is(':visible')) {
				panels.slideUp();
			} else {
				panels.slideUp();
				$(this).siblings('.item-content').slideDown();
			}
			return false;
		});
	
    };
})(jQuery);
$(function() {
	$('#pushmenu-navicon').pushmenu({pushmenu: '.pushmenu'});
	$('.accordion').accordion();
});