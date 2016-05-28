
(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", EditWebsiteController);

    function EditWebsiteController($routeParams, WebsiteService) {
        var vm = this;
        vm.route = $routeParams;
        var websiteId = $routeParams["wid"];
        vm.updateWebsite = updateWebsite;

        function init() {
            vm.website = WebsiteService.findWebsiteById(websiteId);
        }
        init();

        function updateWebsite(website) {
            WebsiteService.updateWebsite(vm.websiteId, website);
        }
        function deleteWebsite() {
            WebsiteService.deleteWebsite(vm.websiteId);
        }
    }
})();