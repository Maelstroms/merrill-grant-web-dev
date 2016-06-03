/**
 * Created by grantmerrill on 5/25/16.
 */

(function() {
    angular.module("WebAppMaker")
        .factory("WidgetService", WidgetService);

    function WidgetService(){
        var api = {
            createWidget : createWidget,
            findWidgetsByPageId: findWidgetsByPageId,
            findWidgetById: findWidgetById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget
        };
        return api;

        function createWidget(pageId, widget){}
        function findWidgetsByPageId(pageId){
            var result = [];
            for(var i in widgets) {
                if(widgets[i].pageId === pageId) {
                    result.push(widgets[i]);
                }
            }
            return result;
        }
        function findWidgetById(widgetId){}
        function updateWidget(widgetId, widget){}
        function deleteWidget(widgetId){}

    }
})();