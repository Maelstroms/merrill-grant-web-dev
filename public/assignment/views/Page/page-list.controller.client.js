(function(){
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($routeParams, PageService) {
        var vm = this;
        vm.route = $routeParams;
        function init() {
            var wid = $routeParams.wid;
            vm.pages = PageService.findPageByWebsiteId(wid);
        }
        init();

    }
})();