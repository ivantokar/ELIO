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