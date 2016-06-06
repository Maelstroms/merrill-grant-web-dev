(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;
        vm.route = $routeParams;
        function init() {
             WebsiteService
                .findWebsitesForUser(vm.route.uid)
                .then(function(response) {
                    vm.websites = response.data;
                });
        }
        init();
    }
})();