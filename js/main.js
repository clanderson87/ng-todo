var app = angular.module('TodoApp', []);

app.controller("TodoCtrl", function($scope, $rootScope){
  $scope.title = "Welcome to your Todo app";
  $rootScope = "I AM EVERYWHERE!";

  $scope.todos = [
  {name: "Mow the lawn", complete: "incomplete"},
  {name: "kill the cat", complete: "complete"},
  {name: "eat more beef", complete: "incomplete"},
  {name: "taxes and bitches", complete: "complete"}
  ];
  $scope.killTodo = function(todo){
    var todoIndex = $scope.todos.indexOf(todo);
    console.log(todoIndex);

    if(todoIndex <= 0){
      $scope.todos.splice(todoIndex, 1)
    };

  }

    $scope.searchText = "";
});



app.controller("PastaCtrl", function($scope){
  $scope.pasta = "Yay Pasta!";
  $scope.foods = "";
})

