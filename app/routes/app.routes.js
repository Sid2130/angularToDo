angularApp.config(function ($routeProvider){
	$routeProvider
	.when('/',{
		controller: 'userSignInController',
		templateUrl: 'app/views/signin.html'
	})

	.when('/signin',{
		controller: 'userSignInController',
		templateUrl: 'app/views/signin.html'
	})

	.when('/signup',{
		controller: 'userSignUpController',
		templateUrl: 'app/views/signup.html'
	})

	.when('/view1',{
		controller: 'mainControllerOne',
		templateUrl: 'app/views/view-one.html'
	})

	.when('/view2',{
		controller: 'mainControllerTwo',
		templateUrl: 'app/views/view-two.html'
	})

	.when('/tasks',{
		controller: 'taskController',
		templateUrl: 'app/views/tasks.html'
	})
	
	.otherwise({
		redirectTo: '/'
	});
});