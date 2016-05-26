/**
 * Created by grantmerrill on 5/26/16.
 */
/**
 * Created by grantmerrill on 5/26/16.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("PageEditController", EditWebsiteController);

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