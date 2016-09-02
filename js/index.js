 
$(function(){
	$(".menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 800);
	});
});

$("#texth1").fadeIn(1000);

$(function(){
2
        $(window).scroll(function(){
3
            var bo = $("#texth1").scrollTop();
4
        if ( bo > 200 ) $("#home").animate({'opacity':'1'},2);
5
        })
6
    })
