/**
 * Created by grantmerrill on 5/25/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController)
        .controller("WebsiteEditController", WebsiteEditController)
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteListController($routeParams) {
        var vm = this;
        var userId = $routeParams["userId"];
        function init() {}
        init();
    }
    
    function WebsiteEditController($routeParams) {
        var vm = this;
        var userId = $routeParams["userId"];
        var siteId = $routeParams["siteId"];
        function init() {
            vm.user = UserService.findUserById(userId);
            vm.site = WebsiteService.findWebsiteById(siteId);
        }
        init();

        vm.updateWebsite = updateWebsite;
        vm.deleteWebsite = deleteWebsite;
        function updateWebsite(website) {
            WebsiteService.updateWebsite(vm.websiteId, website);
        }
        function deleteWebsite() {
            WebsiteService.deleteWebsite(vm.websiteId);
        }
    }

    function WebsiteNewController() {

    }

})();