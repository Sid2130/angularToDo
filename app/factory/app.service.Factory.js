angularApp.factory('existingUsers', function(){
	
    var existingUsersFactoryObject = {};

    existingUsersFactoryObject.getData = function(){
    	var existingData = $.jStorage.get('usersData');
    	return existingData;
    };

    return existingUsersFactoryObject;
});



angularApp.factory('addNewUser', function(){
    var addNewUserFactory = {};
    addNewUserFactory.postData = function(ObjectToAdd){
        var existingData = $.jStorage.get('usersData');
        if(existingData === null){
            $.jStorage.set('usersData','[]');
            existingData =[];
        }
        console.log(existingData);
        existingData.push(ObjectToAdd);
        
        var usersData = $.jStorage.set('usersData',existingData);
    };

    return addNewUserFactory

});




angularApp.factory('tasksFactory', function(){
    var tasksFactory = {};

    tasksFactory.postData = function(ObjectToAdd){
        var existingData = $.jStorage.get('tasks');
        console.log(existingData);
        //console.log(typeOf existingData);
        if(existingData === null){
            $.jStorage.set('tasks','[]');
            existingData =[];
        }
        existingData.push(ObjectToAdd);
        console.log(existingData);
        $.jStorage.set('tasks',existingData);
    };

    tasksFactory.getData = function(){
        return $.jStorage.get('tasks');
    }

    return tasksFactory;

});


//4209

//amazon refund citi bank complain no 8015076822