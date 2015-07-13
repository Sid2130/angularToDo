var Controllers = {};


Controllers.taskController = function($scope, $timeout, tasksFactory){
    
    var priorityClassArray = ["priorityOne","priorityTwo","priorityThree","priorityFour","priorityFive"];
    $scope.tasksObjects = tasksFactory.getData();
    var tasksObjectsLength = '';
    $scope.priority = 5;

    if($scope.tasksObjects === null){
    	var tasksObjectsLength = 0;
    }
    else{
    	tasksObjectsLength = $scope.tasksObjects.length;
    }
    

    if(tasksObjectsLength > 0){
        $scope.taskId = $scope.tasksObjects[tasksObjectsLength-1].taskId + 1;
    }
    else{
        $scope.taskId = 0;
    }
    
    $scope.addTask = function(){
        var objectToSend = {};
        objectToSend.title = $scope.task.title;
        objectToSend.description = $scope.task.description.replace(/\n/g, "<br/>");
        //objectToSend.description = $scope.task.description;
        objectToSend.priority = $scope.priority;
        objectToSend.priorityClass = priorityClassArray[($scope.priority - 1)];
        objectToSend.status = $scope.task.status;
        objectToSend.taskId = $scope.taskId++;

        tasksFactory.postData(objectToSend);
        if($scope.tasksObjects === null){
            $scope.tasksObjects = [];
        }
        
        console.log(JSON.stringify($scope.tasksObjects));
        $scope.tasksObjects = tasksFactory.getData();

        

        $timeout(function(){
           var reference = $('.grid .grid-item').last();
            $('.grid').masonry("appended", reference);
        }, 00); 

        $('#task-description, #task-title').val('');
        $('.task-priority-indicator').removeAttr("style");
        app.closeForm();

        $scope.priority = 5;
    }

    $scope.taskPriorityIndidcator = function(number){
        number = parseInt(number) ;
        return new Array(number);
    }
   
    $scope.$on('$viewContentLoaded', function(){
        //Here your view content is fully loaded !!
        app.initialize()
    });


    $scope.initializeMasonry = function() {
        console.log("efwfwfwfwf");
       $timeout(function(){
           $('.grid').masonry({
            itemSelector: '.grid-item',
            isAnimated: true
            //columnWidth: 200
        }); 
        }, 500);  
    }
    
    // $scope.openForm = function(){
    //     $('#view-container, #new-task-form, .form-overlay').removeClass('closed');
    //     $('#form-open-close-button').removeClass('add-task').addClass('close-button').attr("ng-click","closeForm()");
    //     $compile( $('#form-open-close-button'))($scope);
    // }

    // $scope.closeForm = function(){
    //     $('#form-open-close-button').removeClass('close-button').addClass('add-task').attr("ng-click","openForm()");
    //     $('#view-container, #new-task-form, .form-overlay').addClass('closed');
    //     $compile( $('#form-open-close-button'))($scope);
    // }

    $scope.setPriority = function(priorityValue){
       // $('#priority-value').val(priorityValue);
        
        priorityValue = parseInt(priorityValue);
        $scope.priority = priorityValue
        switch(priorityValue){
            case 1:
                $('.pr1').css("background-color","#e74c3c");
                $('.pr1').prevAll('.pr').css("background-color","#fff");
                break;
            case 2:
                $('.pr1, .pr2').css("background-color","#d35400");
                $('.pr2').prevAll('.pr').css("background-color","#fff");
                break;
            case 3:
                $('.pr1, .pr2, .pr3').css("background-color","#f39c12");
                 $('.pr3').prevAll('.pr').css("background-color","#fff");
                break;
            case 4:
                $('.pr1, .pr2, .pr3, .pr4').css("background-color","#3498db");
                 $('.pr4').prevAll('.pr').css("background-color","#fff");
                break;
            case 5:
                $('.pr').css("background-color","#2ecc71");
                break;
            default:
                break;
        }
    }

};
angularApp.controller(Controllers);

