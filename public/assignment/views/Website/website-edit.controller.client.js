
(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", EditWebsiteController);

    function EditWebsiteController($routeParams, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;

        function init() {
            vm.website = WebsiteService.findWebsiteById(vm.websiteId);
        }
        init();

    }
})();