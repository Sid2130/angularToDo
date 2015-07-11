var directiveModule = angular.module("app.taskCard", []);
directiveModule.directive("taskCardLayout", function(){
	return {
		restrict: 'A',
		transclude: true,
		scope:{
			taskData: '='
		},
		templateUrl: 'app/directives/templates/taskCard.html',

		link: function(scope, element, attrs){
			
		},

		controller: function($scope){
		   
		}
	}
});


directiveModule.directive("onFinishRender", function($timeout){
	return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                scope.$evalAsync(attr.onFinishRender);
            }
        }
    }
});