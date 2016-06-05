(function(){
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($routeParams, PageService) {
        var vm = this;
        vm.route = $routeParams;
        function init() {
            console.log(vm.route.wid);
            PageService
                .findPageByWebsiteId(vm.route.wid)
                .then(function(response) {
                    console.log(response);
                    vm.pages = response.data;
                });
        }
        init();

    }
})();