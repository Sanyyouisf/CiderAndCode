app.config(["$routeProvider",function($routeProvider) {
    $routeProvider
        .when("/pickapples",
        {
            templateUrl: "/app/views/PickApples/pickApples.html",
            controller: "pickApplesController"
        })
        .when("/ListBushels",
        {
            templateUrl: "/app/views/Bushels/ListBushels.html",
            controller: "ListBushelsController"
        });
}]);