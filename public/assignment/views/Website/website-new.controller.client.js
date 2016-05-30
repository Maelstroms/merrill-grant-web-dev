
(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($routeParams, WebsiteService) {
        var vm = this;
        vm.route = $routeParams;

        function init() {
            vm.website = WebsiteService.findWebsiteById(vm.websiteId);
        }
        init();

        function createWebsite(userId, website){
            WebsiteService.createWebsite(userId, website);
            $location.url("user/"+ vm.route.uid + "/website");
        }

    }
})();