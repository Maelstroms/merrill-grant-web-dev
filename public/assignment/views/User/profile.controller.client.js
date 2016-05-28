(function(){
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, UserService) {
        var vm = this;
        vm.updateUser = updateUser;

        var id = $routeParams["uid"];
        function init() {
            vm.user = UserService.findUserById(id);
        }
        init();

        function updateUser() {
            var result = UserService.updateUser(vm.user._id, vm.user);
            if(result === true) {
                vm.success = "user successfully updated";
            } else {
                vm.error = "user not found";
            }
        }
    }
})();