
(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", EditWebsiteController);

    function EditWebsiteController($routeParams, WebsiteService) {
        var vm = this;
        vm.route = $routeParams;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;

        function init() {
            vm.website = WebsiteService.findWebsiteById(vm.websiteId);
        }
        init();

    }
})();