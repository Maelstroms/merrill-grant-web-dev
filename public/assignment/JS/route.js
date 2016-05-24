(function(){
    angular
        .module(WebAppMaker, {})
        .config(Config);

    function Config($routProvider){
        $routeProvider
            .when("/login", {
                templateUrl: "/Views/User/login.view.client.html"
            })
    }
})();/**
 * Created by grantmerrill on 5/23/16.
 */
