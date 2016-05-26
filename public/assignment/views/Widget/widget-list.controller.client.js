(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WebsiteListController);

    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;

        function init() {
            var uid = $routeParams.uid;
            vm.websites = WebsiteService.findWebsitesForUser(uid);
        }
        init();
    }
})();