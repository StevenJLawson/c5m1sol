angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";

  $scope.checkAmount = function () {
    console.log("BLAH");
    return "Yaakov likes to eat healthy snacks at night!";
  };

}
