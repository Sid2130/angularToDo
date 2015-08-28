var app = {};

$(document).ready(function(){
   //  $('.grid').masonry({
   //  itemSelector: '.grid-item'
   //  // isAnimated: true,
   //   //columnWidth: 200
   // });
   //app.initialize();
});


app.initialize = function(){
    
    var menuBarheight = $(".display-content-area .top-bar").height();
    var fullScreenHeight = window.innerHeight;
    var reqHeight = fullScreenHeight-menuBarheight;
    $(".tasks-card-container").css("height",reqHeight+"px");
    console.log(reqHeight);

    $(".tasks-card-container").niceScroll();
}.bind(app);



app.changeStatus = function(htmlObject){
    if( $(htmlObject).is(':checked') ){
        $('#statusValue').val(true);
    }
    else{
        $('#statusValue').val(false);
    }
}.bind(app);


app.openFilterBar = function(){
    if( $(".top-bar.filter-bar").hasClass("open") ){
        $(".top-bar.filter-bar").removeClass("open");
        $('.form-overlay').addClass('closed');
    }
    else{
        $(".top-bar.filter-bar").addClass("open");
        
        $('.form-overlay').removeClass('closed');
    }
    
}.bind(app);




app.openForm = function(){
    $('#view-container, #new-task-form, .form-overlay').removeClass('closed');
    

    setTimeout(function(){
   //wait for card1 flip to finish and then flip 2
	   $('#form-open-close-button').addClass('close-button').attr("onclick","app.closeForm()");
	}, 500);
}

app.closeForm = function(){
    $('#form-open-close-button').removeClass('close-button').addClass('add-task').attr("onclick","app.openForm()");
    $('#view-container, #new-task-form, .form-overlay').addClass('closed');
}


