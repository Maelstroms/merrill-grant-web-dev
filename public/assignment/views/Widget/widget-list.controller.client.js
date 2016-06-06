(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController)

    function WidgetListController($sce, $routeParams, WidgetService) {
        var vm = this;
        vm.route = $routeParams;
        vm.getSafeHtml = getSafeHtml;
        vm.getSafeUrl = getSafeUrl;

        function init() {
            WidgetService
                .findWidgetsByPageId(vm.route.pid)
                .then(function(response) {
                    vm.widgets = response.data;
                });
            $( "#sortable" ).sortable({ axis: 'y', cursor: 'move',handle: 'glyphicon-menu-hamburger'}).disableSelection();
        }
        init();

        function getSafeHtml(widget) {
            return $sce.trustAsHtml(widget.text);
        }

        function getSafeUrl(widget) {
            var urlParts = widget.url.split("/");
            var id = urlParts[urlParts.length - 1];
            var url = "https://www.youtube.com/embed/" + id;
            return $sce.trustAsResourceUrl(url);

        }
    }

})();