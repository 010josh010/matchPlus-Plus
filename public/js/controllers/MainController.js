

//Instantiate new controller to define the properties of the $scope object 

app.controller('MainController', ['$scope', 'friends', function($scope, friends) {
     friends.success(function(data) {
       $scope.friends = data; 

     });
}]);
