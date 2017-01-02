(function()
{
  "use strict";

  angular.module("app").controller("pageCtrl", function($scope) 
  {
    $scope.message = "hello";
    // $scope.task1 = "task1";
    // $scope.task2 = "task2";
    // $scope.task3 = "task3";

    $scope.tasks = [
    {
      text: "task1",
      completion: true
    },
    {
      text: "task2",
      completion: false
    },
    {
      text: "task3",
      completion: false
    }
    ];

    $scope.completed = function()
    {
      var counter = 0;
      for(var i = 0; i < $scope.tasks.length; i++){
        if ($scope.tasks[i].completion == true){
          counter++;
        }
      }
      return counter;
    }

    $scope.deleteCompleted = function()
    {
      for(var i = 0; i < $scope.tasks.length; i++){
        if ($scope.tasks[i].completion == true){
          
        }
      }
    }

    $scope.toggleCompletion = function(task)
    {
      task.completion = !task.completion;
    }

    $scope.addTask = function(text, completion)
    {
      if (text)
      {
        task = 
        {
          text: text,
          completion: completion,
        }
        $scope.tasks.push(task);
        $scope.newTaskTitle = '';
        $scope.newTaskAuthor = '';
      }
      else 
      {
        alert("enter a valid task");
      }
    }

    $scope.deleteTask = function(index)
    {
      $scope.tasks.splice(index, 1);
    }

    $scope.isPositive = function()
    {
      return (task.indexOf("bad") == -1);
    }

    window.$scope = $scope;

  });
})();