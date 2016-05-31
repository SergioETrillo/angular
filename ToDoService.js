toDoApp.service('ToDoService', ['$http', 'ToDoFactory', function($http, ToDoFactory) {
  var self = this;

    self.getAll = function() {
      var todos = [];
      _fetchTodosFromApi(todos);
      return todos;
    };

    function _fetchTodosFromApi(todos) {
      $http.get('http://quiet-beach-24792.herokuapp.com/todos.json')
      .then(function(response) {
        _handleResponseFromApi(response.data, todos);
      }, function(err) {});
    }

    function _handleResponseFromApi(data, todos) {
      data.forEach(function(toDoData){
        todos.push(new ToDoFactory(toDoData.text, toDoData.completed));
      });
    }
}]);






// toDoApp.service('ToDoService', ['$http', 'ToDoFactory', function($http, ToDoFactory) {
//   this.getAll = function() {
//     var todos = [];
//     $http.get('http://quiet-beach-24792.herokuapp.com/todos.json')
//     .then(function(response){
//       response.data.forEach(function(data) {
//         todos.push(new ToDoFactory(data.text, data.completed));
//       });
//     }, function(err) {});
//     return todos;
//   };
// }]);