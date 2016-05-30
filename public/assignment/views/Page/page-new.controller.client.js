(function(){
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($routeParams, PageService) {
        var vm = this;
        vm.route = $routeParams;

        function init() {
            vm.website = WebsiteService.findWebsiteById(vm.websiteId);
        }
        init();

        function newPage(){
            WebsiteService.createWebsite(userId, website);
            $location.url("user/"+ vm.route.uid + "/website");
        }
    }
})();