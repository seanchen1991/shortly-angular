angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function() {
    Links.getLinks().then(function(res) {
      $scope.data.links = res;
    }).catch(function (error) {
      throw new Error('error');
    })
  };

  $scope.getLinks();
});

