(function () {

	function footerGeneric () {
		return {
			restrict: 'EA',
			templateUrl: '/views/footerGeneric.html'
		};
	}

	angular
		.module('checkersIOApp')
		.directive('footerGeneric' , footerGeneric)
	;


})();

