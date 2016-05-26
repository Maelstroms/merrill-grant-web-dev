/**
 * Created by grantmerrill on 5/25/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController)
        .controller("WebsiteEditController", WebsiteEditController)
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteListController($routingParams) {

    }
    
    function WebsiteEditController() {
        var vm = this;
        var userId = $routeParams["userId"];
        var siteId = $routeParams["siteId"];
        function init() {
            vm.user = UserService.findUserById(userId);
            vm.site = WebsiteService.findWebsiteById(siteId);
        }
        init();
    }

    function WebsiteNewController() {

    }

})();