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
            })
            .when("/User/:uid/website", {
                templateURL:  "/views/Website/website-list.view.client.html"
            })
            .when("/User/:uid/website/new", {
                templateURL:  "/views/Website/website-new.view.client.html"
            })
            .when("/User/:uid/website/:wid", {
                templateURL:  "/views/Website/website-edit.view.client.html"
            })
            .when("/User/:uid/website/:wid/page", {
                templateURL:  "/views/Page/page-list.view.client.html"
            })
            .when("/User/:uid/website/:wid/page/new", {
                templateURL:  "/views/Page/page-new.view.client.html"
            })
            .when("/User/:uid/website/:wid/page/:pid", {
                templateURL:  "/views/Page/page-edit.view.client.html"
            })
            .when("/User/:uid/website/:wid/page/:pid/widget", {
                templateURL:  "/views/W idgetage/widget-list.view.client.html"
            })
            .when("/User/:uid/website/:wid/page/:pid/widget/new", {
                templateURL:  "/views/Widget/widget-choose.view.client.html"
            })
            .when("/User/:uid/website/:wid/page/:pid/widget/:wgid", {
                templateURL:  "/views/Widget/widget-edit.view.client.html"
            });

            }
    

})();


/**
 *

 */
