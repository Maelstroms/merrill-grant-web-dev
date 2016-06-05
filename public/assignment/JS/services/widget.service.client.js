/**
 * Created by grantmerrill on 5/25/16.
 */

(function() {
    angular.module("WebAppMaker")
        .factory("WidgetService", WidgetService);

    function WidgetService($http){
        var api = {
            createWidget : createWidget,
            findWidgetsByPageId: findWidgetsByPageId,
            findWidgetById: findWidgetById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget
        };
        return api;

        function createWidget(pageId, widget){
            return $http.post();
        }

        function findWidgetsByPageId(pageId){
            var url = "/api/page/"+ pageId +"/widget";
            return $http.get(url);
        }
        function findWidgetById(widgetId){
            var url = "/api/widget/" + id;
            return $http.get(url);
        }
        function updateWidget(widgetId, widget){
            return $http.put();
        }
        function deleteWidget(widgetId){
            return $http.delete();
        }

    }
})();