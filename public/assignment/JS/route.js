(function () {
    angular
        .module('WebAppMaker')
        .config(Config);

    function Config($routeProvider) {
        $routeProvider
            .when("default", {
                templateUrl: "/assignment/views/User/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/login", {
                templateUrl: "/assignment/views/User/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/", {
                templateUrl: "/assignment/views/User/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "/assignment/views/User/register.view.client.html",
                controller: "RegisterController",
                controllerAs: "model"
            })
            .when("/profile/:uid", {
                templateUrl: "/assignment/views/User/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model"
            })
            .when("/User/:uid/website", {
                templateUrl: "/assignment/views/Website/website-list.view.client.html",
                controller: "WebsiteListController",
                controllerAs: "model"
            })
            .when("/User/:uid/website/new", {
                templateUrl: "/assignment/views/Website/website-new.view.client.html",
                controller: "WebsiteNewController",
                controllerAs: "model"
            })
            .when("/User/:uid/website/:wid", {
                templateUrl: "/assignment/views/Website/website-edit.view.client.html",
                controller: "WebsiteEditController",
                controllerAs: "model"
            })
            .when("/User/:uid/website/:wid/page", {
                templateUrl: "/assignment/views/Page/page-list.view.client.html",
                controller: "PageListController",
                controllerAs: "model"
            })
            .when("/User/:uid/website/:wid/page/new", {
                templateUrl: "/assignment/views/Page/page-new.view.client.html",
                controller: "PageNewController",
                controllerAs: "model"
            })
            .when("/User/:uid/website/:wid/page/:pid", {
                templateUrl: "/assignment/views/Page/page-edit.view.client.html",
                controller: "PageEditController",
                controllerAs: "model"
            })
            .when("/User/:uid/website/:wid/page/:pid/widget", {
                templateUrl: "/assignment/views/Widgetage/widget-list.view.client.html",
                controller: "WidgetListController",
                controllerAs: "model"
            })
            .when("/User/:uid/website/:wid/page/:pid/widget/new", {
                templateUrl: "/assignment/views/Widget/widget-choose.view.client.html",
                controller: "WidgetNewController",
                controllerAs: "model"
            })
            .when("/User/:uid/website/:wid/page/:pid/widget/:wgid", {
                templateUrl: "/assignment/views/Widget/widget-edit.view.client.html",
                controller: "WidgetEditController",
                controllerAs: "model"
            });

    }


})();

