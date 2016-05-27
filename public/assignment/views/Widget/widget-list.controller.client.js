(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);

    function WidgetListController($routeParams, WidgetService) {
        var vm = this;
        vm.route = $routeParams;

        function init() {
            var pid = $routeParams.pid;
            vm.widget = WidgetService.findWidgetsByPageId(pid);
        }
        init();
    }
})();