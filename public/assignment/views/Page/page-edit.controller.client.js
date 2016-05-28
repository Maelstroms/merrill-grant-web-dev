
(function(){
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController);

    function PageEditController($routeParams, PageService) {
        var vm = this;
        vm.route = $routeParams;
        vm.updatePage = updatePage;
        var pageId = $routeParams["pid"];

        function init() {
            vm.page = PageService.findPageById(pageId);
        }
        init();

        function updatePage(){
            PageService.updatePage();
        }
    }
})();