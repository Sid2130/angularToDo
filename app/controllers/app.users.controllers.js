var Controllers = {};

Controllers.userSignInController = function($scope, existingUsers){

	$scope.existingUsersObject = existingUsers.getData();
    
    $scope.findUser  =function(){
        var objectToSend = {};
        objectToSend.name = $scope.newUser.name;
        objectToSend.age = $scope.newUser.password;
        
        console.log(JSON.stringify($scope.existingUsersObject));

        for(var property in $scope.existingUsersObject){
            console.log(property);
            console.log($scope.existingUsersObject[property].name);
            console.log($scope.existingUsersObject[property].password);
           if($scope.existingUsersObject[property].name ===  $scope.newUser.name && $scope.existingUsersObject[property].password ===  $scope.newUser.password){
                alert("NAme Exist");
                break;
           } 
           else{
                 alert(false);
           }
        }
        return false;
    }
};


Controllers.userSignUpController = function($scope, addNewUser){
    $scope.addUser = function(){
        var objectToSend = {};
        objectToSend.name = $scope.newUser.name;
        objectToSend.phone = $scope.newUser.phone;
        objectToSend.age = $scope.newUser.age;
        objectToSend.password = $scope.newUser.password;
        addNewUser.postData(objectToSend);
    }
};


angularApp.controller(Controllers);