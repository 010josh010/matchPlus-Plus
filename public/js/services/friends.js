
//Declare a new factory friends to use for get request of hte match data 
app.factory('friends', ['$http', function($http) { 

  return $http.get('http://localhost:3000/api/all') 
            .success(function(data) { 
              console.log(data); 
              return data; 
               
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);

