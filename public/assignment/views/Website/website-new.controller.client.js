
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

    }
})();