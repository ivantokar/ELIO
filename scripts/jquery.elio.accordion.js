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