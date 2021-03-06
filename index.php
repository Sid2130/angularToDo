<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="resources/css/style.css">
    </head>

    <body ng-app="angularApp">
        <div id="view-container" class="view-wrapper closed">
            <div ng-view=""></div>
        </div>

        <script src="//cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js"></script>
        <script src="resources/libs/jquery-1.11.2.min.js"></script>        
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
        <script src="resources/libs/jstorage.js"></script>
         <script src="resources/libs/jquery.nicescroll.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/masonry/3.3.1/masonry.pkgd.min.js"></script>

        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0rc1/angular-route.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.23/angular-sanitize.min.js"></script>
        
        <script src="app/modules/app.modules.js"></script>
        <script src="app/controllers/app.operations.controllers.js"></script>
        <script src="app/controllers/app.users.controllers.js"></script>
        <script src="app/routes/app.routes.js"></script>
        <script src="app/factory/app.service.Factory.js"></script>
        <script src="app/directives/app.directive.taskCard.js"></script>
        

        <script src="resources/js/app.js"></script>
    </body>
</html>