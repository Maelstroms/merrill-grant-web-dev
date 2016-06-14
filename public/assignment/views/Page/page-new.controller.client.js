(function () {
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($location, $routeParams, PageService, WebsiteService) {
        var vm = this;
        vm.route = $routeParams;
        vm.createPage = function createPage(pageName) {
            var pagen = {"name": pageName, "websiteId": vm.route.wid};
            var updateWebsite;
            console.log(pagen);
            PageService
                .createPage(vm.route.wid, pagen)
                .then(function (response) {
                    var page = response.data;
                    console.log(page);
                    var parentWebsite = page.websiteId;
                    if (parentWebsite) {
                        updateWebsite = {_id: parentWebsite, pages: page._id};
                        WebsiteService
                            .updateWebsite(parentWebsite, updateWebsite)
                            .then(
                                $location.url("user/" + vm.route.uid + "/website/" + page.websiteId + "/page")
                    )
                    }
                    else {
                        vm.error = "Page failed to create";
                    }
                });
        }
    }
})();