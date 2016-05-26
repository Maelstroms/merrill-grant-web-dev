(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;

        function init() {
            var userId = $routeParams.userId;
            vm.websites = WebsiteService.findWebsitesForUser(userId);
        }
        init();
    }
})();/**
 * Created by grantmerrill on 5/26/16.
 */
