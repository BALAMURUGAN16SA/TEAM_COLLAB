function please_work_u(){
	document.getElementById('center-box').innerHTML = '<object type = "text/html" data = "TTT1.html" style = "width : 100%; height : 100%;" ></object>';
}

<<<<<<< HEAD
function please_work_c(){
	document.getElementById('center-box').innerHTML = '<object type = "text/html" data = "TTT2H.html" style = "width : 100%; height : 100%;" ></object>';
}


=======
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
>>>>>>> 1677b48e4baac0fb95f7842e55ae868ea6082cf5
