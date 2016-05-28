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
    function HeaderWidgetController($routeParams, WidgetService){
        var vm = this;
        vm.route = $routeParams;
        var widget;
        vm.dataholder ={};
        function init() {
            console.log($routeParams);
            var wgid = $routeParams["wgid"];
            console.log(widget);
            vm.header = WidgetService.findWidgetById();
        }
        init();
    }
    function ImageWidgetController($routeParams, WidgetService){
        var vm = this;
        vm.route = $routeParams;
        function init() {

        }
        init();

    }
    function YoutubeWidgetController($routeParams, WidgetService){
        var vm = this;
        vm.route = $routeParams;
        function init() {

        }
        init();
    }
})();