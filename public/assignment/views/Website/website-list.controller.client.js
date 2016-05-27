(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;

        function init() {
            var uid = $routeParams.uid;
            console.log(uid);
            vm.websites = WebsiteService.findWebsitesForUser(uid);
        }
        init();
    }
})();