(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController)
        .controller("HeaderWidgetController", HeaderWidgetController)
        .controller("ImageWidgetController", ImageWidgetController)
        .controller("YoutubeWidgetController", YoutubeWidgetController);

    function WidgetListController($routeParams, WidgetService) {
        var vm = this;
        vm.route = $routeParams;

        function init() {
            var pid = $routeParams.pid;
            vm.widgets = WidgetService.findWidgetsByPageId(pid);
        }
        init();
    }
    function HeaderWidgetController(){
        function init() {

        }
        init();
    }
    function ImageWidgetController(){
        function init() {

        }
        init();
    }
    function YoutubeWidgetController(){
        function init() {

        }
        init();
    }
})();