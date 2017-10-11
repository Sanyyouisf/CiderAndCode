app.controller("ListCidersController", ["$http", "$scope", function ($http, $scope) {
    $scope.Cider = {};
    $scope.Bushels = [];
    $scope.Users = [];

    $http.get("/api/users/list")
        .then(function (result) {
            $scope.Users = result.data;
            console.log("list of users :", $scope.Users );
        });
    $http.get("/api/Bushels")
        .then(function (result) {
            $scope.Bushels = result.data;
            console.log("list of Bushels :", $scope.Bushels);
        });


    $scope.AddCider = function () {
        let cider = $scope.Cider;
       console.log("Cider", cider);
        //let bushel = $scope.Bushel;
        $http.post("/api/Cider/AddCider",
            {   
                BushelId: cider.bushelId,    
            })
            .then(result => console.log("result Cider created", result))
            .catch(error => console.log("error : ", error));
    };

}]);
