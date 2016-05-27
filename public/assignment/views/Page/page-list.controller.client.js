(function(){
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($routeParams, PageService) {
        var vm = this;
        console.log($routeParams);
        function init() {
            var uid = $routeParams.uid;
            var wid = $routeParams.wid;
            vm.pages = PageService.findPageByWebsiteId(wid);
        }
        init();
        console.log("got here");
    }
})();