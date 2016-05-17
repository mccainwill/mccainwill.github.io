$(document).ready(function(){

	var prevButton = $('.prev');
	var nextButton = $('.next');

	

	var classes = ['one', 'two', 'three', 'four', 'five', 'six'];
	var index = 0;

	var wireframes = $('.wireframes ul');
	var mockups = $('.mockups ul');

	var activePic = $('.active');

	

	prevButton.on('click', function(e){

		var active = $('.active');
		var prev = active.prev();

		// active.addClass('last-active');

		if( index > 0){

			prev.addClass('active');
		
			active.removeClass('active');

			index--;

    	}

    	e.preventDefault();

	});

	nextButton.on('click', function (e){

		var active = $('.active');
		var next = active.next();


		if(index < 5){

			next.addClass('active');

			active.removeClass('active');

			index++;

    	}

    	e.preventDefault();

	});

});