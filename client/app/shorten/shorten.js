angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.loading = false;
  $scope.addLink = function() {
    // should create new links
    Links.postLinks($scope.link.url).then(function(res) {
      $scope.link.url = res.data;
    }).catch(function(error) {
      throw new Error('error');
    });
  };
});
