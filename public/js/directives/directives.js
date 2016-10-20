//Directives pointing to template info 
app.directive('appInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/friendInfo.html' 
  }; 
});


app.directive('installApp', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'js/directives/friendLink.html',
    
    link: function(scope, element, attrs) {
      scope.buttonText = "Install",
      scope.installed = false,

      scope.download = function() {
        
        element.toggleClass('btn-active')
        
        if(scope.installed) {
          scope.buttonText = "Install";
          scope.installed = false;
        } else {
          scope.buttonText = "Uninstall";
          scope.installed = true;
        }
      }
    }
  };
});