
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
            var result =  WebsiteService.updateWebsite(vm.websiteId, website);
            if(result === true) {
                vm.success = "website successfully updated";
            } else {
                vm.error = "website not found";
            }
        }
        function deleteWebsite() {
            var result =  WebsiteService.deleteWebsite(vm.websiteId);
            if(result === true) {
                vm.success = "website successfully updated";
            } else {
                vm.error = "website not found";
            }
        }
    }
})();