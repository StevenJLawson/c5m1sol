(function () {
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.input = ""
  $scope.checkAmount = function () {
    var msg = checkFoodAmount($scope.input);
    $scope.message = msg;
    return "Yaakov likes to eat healthy snacks at night!";
  };
}
function checkFoodAmount(str) {
  if(str.length <= 0){
    return "Please enter data first";
  }
  var arra = str.split([","]);
  var msg;
  console.log(arra.length);
  console.log(arra);
  if(arra.length > 3){
    msg = "Too much!";
  }else if(arra.length <= 0){
    msg = "Please enter data first";
  }else{
    msg = "Enjoy!";
  }
  return msg;
}


})();
