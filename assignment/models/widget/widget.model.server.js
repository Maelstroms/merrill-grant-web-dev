module.exports = function() {

    var api = {
        createWidget: createWidget,
        findWidgetsByPageId: findAllWidgetsForPage,
        findWidgetById: findWidgetById,
        updateWidget: updateWidget,
        deleteWidget: deleteWidget
    };
    return api;

    function createWidget(pageId, widget){}
    function findAllWidgetsForPage(pageId){}
    function findWidgetById(widgetId){}
    function updateWidget(widgetId, widget){}
    function deleteWidget(widgetId){}
    function reorderWidget(pageId, start, end){}
};