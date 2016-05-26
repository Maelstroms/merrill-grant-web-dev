/**
 * Created by grantmerrill on 5/25/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController)
        .controller("WidgetEditController", WidgetEditController)
        .controller("WidgetNewController", WidgetNewController);

    function WidgetListController() {
        var vm = this;
    }

    function WidgetEditController() {
        var vm = this;
        var userId = $routeParams["userId"];
        var siteId = $routeParams["siteId"];
        var pageId = $routeParams["pageId"];
        var widId = $routeParams["widId"];
        function init() {
            vm.user = UserService.findUserById(userId);
            vm.site = WebsiteService.findWebsiteById(siteId);
            vm.page = PageService.findPageById(siteId);
            vm.widget = WidgetService.findWidgetById(siteId);
        }
        init();
    }
    function WidgetNewController() {
        var vm = this;
    }

})();