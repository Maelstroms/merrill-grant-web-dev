(function(){
    angular
        .module( 'WebAppMaker')
        .config(Config);

    function Config($routeProvider){
        $routeProvider
            .when("default", {
                templateURL:  "/views/User/login.view.client.html"
            })
            .when("/login", {
                templateUrl: "/views/User/login.view.client.html"
            })
            .when("/", {
                templateURL:  "/views/User/login.view.client.html"
            })
            .when("/register", {
                templateURL:  "/views/User/register.view.client.html"
            });

    }

})();


/**
 *

 */
