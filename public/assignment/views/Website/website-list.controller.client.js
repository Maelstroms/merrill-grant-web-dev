(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;
        vm.route = $routeParams;
        function init() {
            console.log($routeParams);
             WebsiteService
                .findWebsitesForUser(vm.route.uid)
                .then(function(response) {
                    console.log(response.data);
                    vm.websites = response.data;
                });
        }
        init();
    }
})();