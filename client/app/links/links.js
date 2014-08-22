angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  ($scope.getLinks = function() {
    Links.get()
         .success(function (links) {
          $scope.data.links = links;
         });
  })();
});
