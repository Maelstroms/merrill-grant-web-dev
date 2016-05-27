(function(){
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($routeParams, PageService) {
        var vm = this;
        function init() {
            var uid = $routeParams.uid;
            var wid = $routeParams.wid;
            console.log(PageService.findPageByWebsiteId(wid));
            vm.pages = PageService.findPageByWebsiteId(wid);
        }
        init();

    }
})();