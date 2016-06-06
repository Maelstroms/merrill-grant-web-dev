
(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetNewController", WidgetNewController);

    function WidgetNewController($routeParams, WidgetService) {
        var vm = this;
        vm.route = $routeParams;

        function init() {
        }
        init();

    }
})();