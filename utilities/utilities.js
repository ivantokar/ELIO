
$(document).on('ready', function(){

	var lineHeight = 24;
	var height = $(document).height();
	var count = height / lineHeight;

	$('body').append('<a href="#" id="vr-grid-on" style="display:block;padding:10px 20px;font-size:13px;letter-spacing:2px;font-family:sans-serif;background: #ddd;position:fixed;top:0;right:0;z-index:10;">вкл. сетку</a>');
	$('body').prepend('<div id="vr-grid" style="display:none;position:absolute;z-index:-1;width:100%;height:'+ height +'px;"></div>');

	for (i = 0; i <= count; i++) {
		$('#vr-grid').prepend('<div style="height:'+ lineHeight +'px;border-bottom:1px solid #ccc;"></div>')
	}
});

$(document).on('click', '#vr-grid-on', function(){

	if ($('#vr-grid').css('display') == 'none') {
		$('#vr-grid-on').text('выкл. сетку');
		$('#vr-grid').show();
		$('h1').css('background', 'rgba(231,76,57, .2)');
		$('h2').css('background', 'rgba(255,109,55, .2)');
		$('h3').css('background', 'rgba(255,179,90, .2)');
		$('h4').css('background', 'rgba(0,181,81, .2)');
		$('h5').css('background', 'rgba(0,181,81, .2)');
		$('h6').css('background', 'rgba(0,181,81, .2)');
		$('p').css('background', 'rgba(0,173,216, .2)');
	} else {
		$('#vr-grid-on').text('вкл. сетку');
		$('#vr-grid').hide();
		$('h1').css('background', 'none');
		$('h2').css('background', 'none');
		$('h3').css('background', 'none');
		$('h4').css('background', 'none');
		$('h5').css('background', 'none');
		$('h6').css('background', 'none');
		$('p').css('background', 'none');
	}

});