(function(){
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($location, $routeParams, PageService) {
        var vm = this;
        vm.route = $routeParams;
        vm.createPage = function createPage(pageName){
            var pagen = {"name":pageName, "websiteId":vm.route.wid};
            console.log(pagen);
            PageService
                .createPage(vm.route.wid, pagen)
                .then(function(response){
                    var page = response.data;
                    console.log(page);
                    if(page.websiteId){
                        $location.url("user/"+ vm.route.uid + "/website/"+ page.websiteId+"/page");
                    }
                    else {
                        vm.error = "Page failed to create";
                    }
                });
        }
    }
})();