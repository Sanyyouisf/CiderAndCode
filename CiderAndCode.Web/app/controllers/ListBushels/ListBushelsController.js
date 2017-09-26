app.controller("ListBushelsController", ["$http", "$scope", function ($http, $scope) {
    $scope.SanyBushels = [];
    $scope.users = [];
    $scope.Bushel = {};

    $http.get("/api/users/list")
        .then(function (result) {
            $scope.users = result.data;
            console.log("list of users :", result.data );
        });

    $http.get("/api/Bushels")
        .then(function (result) {
            $scope.SanyBushels = result.data;
            console.log("listBushels result.data : ", result.data)
        });

    $scope.StealApples = function (Id) {
        $http.delete(`/api/Bushels/DeleteBushel/${Id}`)
            .then(result => console.log("you deletes", Id))
        .catch(error => console.log("error :", error))
    };


}]);