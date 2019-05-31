$('.info').hide();

$('.dropdown button').on('click', function(e){
	var target = $(event.target);
	var next = target.next();
	target.toggleClass('opened');
	next.slideToggle(500);
});

/*$('.dropdown__li').on('mouseover', function(event){
	$(event.target).find('.info').slideToggle(500);
});*/