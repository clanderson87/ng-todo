var app = angular.module('TodoApp', []);

app.controller("TodoCtrl", function($scope, $rootScope){
  $scope.title = "Welcome to your Todo app";
  $rootScope = "I AM EVERYWHERE!";
})

app.controller("PastaCtrl", function($scope){
  $scope.pasta = "Yay Pasta!";
  $scope.foods = "";
})

