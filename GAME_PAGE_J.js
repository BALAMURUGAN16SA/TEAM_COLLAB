function please_work(){
	document.getElementById('center-box').innerHTML = '<object type = "text/html" data = "TTT1.html" style = "width : 100%; height : 100%;" ></object>';
}

$(document).ready(function () {
	$('.fa-bars').click(function () {
		$(this).toggleClass('fa-times');
		$('.navbar').toggleClass('nav-toggle');
	});

	$(window).on('scroll load', function () {
		$('.fa-bars').removeClass('fa-times');
		$('.navbar').removeClass('nav-toggle');
	});

	if ($(window).scrollTop() > 30) {
		$('header').addClass('header-active');
	} else {
		$('header').removeClass('header-active');
	}
});
