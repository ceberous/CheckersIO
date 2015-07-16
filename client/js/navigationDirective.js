(function () {

	function navigationGeneric () {
		return {
			restrict: 'EA',
			templateUrl: '/views/navigationDirective.html'
		};
	}

	angular
		.module('checkersIOApp')
		.directive('navigationGeneric' , navigationGeneric)
	;


})();