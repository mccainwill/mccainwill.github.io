$(document).ready(function(){

	var prevButton = $('.prev');
	var nextButton = $('.next');

	

	var classes = ['one', 'two', 'three', 'four', 'five', 'six'];
	var index = 0;

	var wireframes = $('.wireframes ul');
	var mockups = $('.mockups ul')

	prevButton.on('click', function(e){

		var active = $('.active');
		var prev = active.prev();

		// active.addClass('last-active');

		if( index > 0){

			prev.addClass('active');
		
			active.removeClass('active');

			index--;

		// prevImg.css({opacity: 0.0})
  //       .addClass('active')
  //       .animate({opacity: 1.0}, 1000, function() {
  //           active.removeClass('active last-active');
  //       });

    	}

    	e.preventDefault();

	});

	nextButton.on('click', function (e){

		var active = $('.active');
		var next = active.next();

		// active.addClass('last-active');

		if(index < 5){

			next.addClass('active');

			active.removeClass('active');

			index++;

		// next.css({opacity: 0.0})
  //       .addClass('active')
  //       .animate({opacity: 1.0}, 1000, function() {
  //           active.removeClass('active last-active');
  //       });

    	}

    	e.preventDefault();

	});

		 // if( index < 5 ){
   //          //remove the current class on the parent
   //          //div
   //          wireframes.removeClass( classes[ index ] );
   //          mockups.removeClass( classes [ index ] );
          

   //          //otherwise, move to the next index and
   //          index++;
            
   //          //add that class to the parent div
   //          wireframes.addClass( classes[ index ] );
   //          mockups.addClass( classes [ index ] );
   //      }

        // e.preventDefault();

});