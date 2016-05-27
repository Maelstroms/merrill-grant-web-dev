(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;
        vm.route = $routeParams;

        function init() {
            var uid = $routeParams.uid;
            vm.websites = WebsiteService.findWebsitesForUser(uid);
        }
        init();
    }
})();