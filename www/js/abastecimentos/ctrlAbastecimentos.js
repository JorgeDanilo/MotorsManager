angular.module('app.ctrlAbastecimentos', [])

.controller('ctrlAbastecimentos', ['$scope', '$stateParams', function ($scope, $stateParams, $cordovaSQLite) {

  $scope.execute = function() {
    var db = $cordovaSQLite.openDB({name : 'my.db'});

  };

  $scope.inserir = function() {
    var query = "INSERT INTO test_table (data, data_num) VALUES (?, ?)";
    $cordovaSQLite.execute(db, query, ["teste", 100]).then(function(res) {
      alert("insertId: " + res.insertId);
    }, function(err) {
      alert(err);
    });
  }

}])
