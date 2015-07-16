(function () {
	
	angular.module('checkersIOApp' , ['ui.router']);

	function config ( $stateProvider , $urlRouterProvider , $locationProvider ) {

		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});

		$urlRouterProvider.otherwise('/');

		$stateProvider

			.state('home' , {
				url: '/',
				templateUrl: 'views/home.html',
				controller: 'homeCtrl',
				controllerAs: 'vm'
			})

		;

	}

	angular
		.module('checkersIOApp')
		.config(['$stateProvider', '$urlRouterProvider' , '$locationProvider' , config])
	;

})();