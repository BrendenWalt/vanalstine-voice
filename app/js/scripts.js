document.addEventListener("DOMContentLoaded", function(e) {
    console.log('JS is loaded');

    $('.nav-burger').click(function(){
		$(this).toggleClass('open');
	});
});


