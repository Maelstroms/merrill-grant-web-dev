(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WebsiteListController);

    function WebsiteListController($routeParams, WidgetService) {
        var vm = this;

        function init() {

        }
        init();
    }
})();