(function(){
    angular
        .module( 'WebAppMaker')
        .config(Config);

    function Config($routeProvider){
        $routeProvider
            .when("default", {
                templateUrl:  "/assignment/views/User/login.view.client.html",
                controller: "LoginController"
            })
            .when("/login", {
                templateUrl: "/assignment/views/User/login.view.client.html"
            })
            .when("/", {
                templateUrl:  "/assignment/views/User/login.view.client.html"
            })
            .when("/register", {
                templateUrl:  "/assignment/views/User/register.view.client.html"
            })
            .when("/User/:uid", {
                templateUrl: "/assignment/views/User/profile.view.client.html"
            })
            .when("/User/:uid/website", {
                templateUrl:  "/assignment/views/Website/website-list.view.client.html"
            })
            .when("/User/:uid/website/new", {
                templateUrl:  "/assignment/views/Website/website-new.view.client.html"
            })
            .when("/User/:uid/website/:wid", {
                templateUrl:  "/assignment/views/Website/website-edit.view.client.html"
            })
            .when("/User/:uid/website/:wid/page", {
                templateUrl:  "/assignment/views/Page/page-list.view.client.html"
            })
            .when("/User/:uid/website/:wid/page/new", {
                templateUrl:  "/assignment/views/Page/page-new.view.client.html"
            })
            .when("/User/:uid/website/:wid/page/:pid", {
                templateUrl:  "/assignment/views/Page/page-edit.view.client.html"
            })
            .when("/User/:uid/website/:wid/page/:pid/widget", {
                templateUrl:  "/assignment/views/W idgetage/widget-list.view.client.html"
            })
            .when("/User/:uid/website/:wid/page/:pid/widget/new", {
                templateUrl:  "/assignment/views/Widget/widget-choose.view.client.html"
            })
            .when("/User/:uid/website/:wid/page/:pid/widget/:wgid", {
                templateUrl:  "/assignment/views/Widget/widget-edit.view.client.html"
            });

            }


})();


/**
 *

 */
