var app = {};


app.changeStatus = function(htmlObject){
    if( $(htmlObject).is(':checked') ){
        $('#statusValue').val(true);
    }
    else{
        $('#statusValue').val(false);
    }
}.bind(app);


app.addTaskCardInView = function(dataObject){
   
}.bind(app);




app.openForm = function(){
    $('#view-container, #new-task-form, .form-overlay').removeClass('closed');
    $('#form-open-close-button').removeClass('add-task').addClass('close-button').attr("onclick","app.closeForm()");
}

app.closeForm = function(){
    $('#form-open-close-button').removeClass('close-button').addClass('add-task').attr("onclick","app.openForm()");
    $('#view-container, #new-task-form, .form-overlay').addClass('closed');
}


