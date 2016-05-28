
(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", EditWebsiteController);

    function EditWebsiteController($routeParams, WidgetService) {
        var vm = this;

        function init() {
            vm.widget = WidgetService.findWidgetById($routeParams["wgid"])
        }
        init();

    }
})();