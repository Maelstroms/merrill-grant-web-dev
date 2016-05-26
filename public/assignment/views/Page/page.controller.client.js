/**
 * Created by grantmerrill on 5/25/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController)
        .controller("PageEditController", PageEditController)
        .controller("PageNewController", PageNewController);


    function PageListController() {
        var vm = this;
    }

    function PageEditController() {
        var vm = this;
        var userId = $routeParams["userId"];
        var siteId = $routeParams["siteId"];
        var pageId = $routeParams["pageId"];
        function init() {
            vm.user = UserService.findUserById(userId);
            vm.site = WebsiteService.findWebsiteById(siteId);
            vm.page = PageService.findPageById(siteId);
        }
        init();
    }
    function PageNewController() {
        var vm = this;
    }
})();