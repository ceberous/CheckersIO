(function () {

	function homeCtrl() {
		var vm = this;

		// Draw Board
		$(document).ready(function(){
			var board = new Checkersboard('board');

			
			// Show All Dark Square ID's For Testing
			$('.show_id').each(function(){
				// $(this).append('<p>test</p>');
				var id = $(this)[0].id;
				id = id.split('_');
				id = id.pop();
				$(this).append('<p id="testingID">' + id + '</p>');
			});
	

			/*
			// HOVER Dark Square ID's for testing
			$('.show_id').hover(function(){
				var id = $(this)[0].id;
				id = id.split('_');
				id = id.pop();
				$(this).append('<p id="testingID">' + id + '</p>');				
			} , function(){
				$('#testingID').remove();
			});
			*/

		});


	}


	angular
		.module('checkersIOApp')
		.controller('homeCtrl' , homeCtrl)
	;

})();