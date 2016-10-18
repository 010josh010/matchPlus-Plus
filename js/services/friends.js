
//Declare a new factory friends to use for get request of hte match data 

app.factory('friends', ['$http', function($http) { 
 
 var url = 'localhost:3000'; 

 return $http.get(url) 
           .success(function(data) { 
             return data; 
           }) 
           .error(function(err) { 
             return err; 
           }); 
}]);