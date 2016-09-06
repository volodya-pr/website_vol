 
$(function() {
    
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
    
});



/**
 * modelne vikno
 */
$(document).ready(function() {
	$('a[class=button]').click(function(e) {
		e.preventDefault();
		var id = $(this).attr('href');
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		$('#mask').css({'width':maskWidth,'height':maskHeight});
		$('#mask').fadeIn(1000);
		$('#mask').fadeTo("slow",0.8);
		var winH = $(window).height();
		var winW = $(window).width();
		$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);
		$(id).fadeIn(2000);
	});
	$('.window .close').click(function (e) {
		e.preventDefault();
		$('#mask, .window').hide();
	});
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});
});

$(function() {
    $('#btn-send').click(sendForm);

})

function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/prokopiv.v@gmail.com",
        method: "POST",
        data: {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#msg').val(),
            rem: $('#rem').val(),
            vid: $('#vid').val(),
            phone: $('phone'). val()
        },
        dataType: "json",
        success: function() {
            $('#thanks').html('thanks');
        }
    });

}

$(function(){
	$('.overlay').click(function() {
		$(this).remove();
	});
});