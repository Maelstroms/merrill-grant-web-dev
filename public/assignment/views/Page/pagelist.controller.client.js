(function(){
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($routeParams, PageService) {
        var vm = this;

        function init() {
            var uid = $routeParams.uid;
            vm.websites = WebsiteService.findWebsitesForUser(uid);
            vm.pages = PageService.findWebsitesByUser(userId);
        }
        init();
    }
})();