
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

        function updatePage() {
            var result = PageService.updatePage();
            if (result === true) {
                vm.success = "page successfully updated";
            } else {
                vm.error = "page not found";
            }
        }
        
        function deletePage() {
            var result = PageService.deletePage();
            if (result === true) {
                vm.success = "page successfully updated";
            } else {
                vm.error = "page not found";
            }
        }
    }
})();