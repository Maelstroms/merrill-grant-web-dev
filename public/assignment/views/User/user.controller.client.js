/**
 * Created by grantmerrill on 5/25/16.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController)
        .controller("ProfileController", ProfileController)
        .controller("RegisterController", RegisterController);


    function ProfileController($routeParams) {
        var vm = this;
        vm.updateUser = updateUser;

        var id = $routeParams["id"];
        var index = -1;
        function init() {
            for(var i in users) {
                vm.user = UserService.findUserById(vm.userId);
            }
        }
        init();

        function updateUser() {
            users[index].firstName = vm.user.firstName;
            users[index].lastName = vm.user.lastName;
            vm.success = "User successfully updated";
        }
    }

    function LoginController($location) {

        var vm = this;

        vm.login = login;

        function login (username, password) {
            for(var i in users) {
                if(users[i].username === username && users[i].password === password) {
                    var id = users[i]._id;
                    $location.url("/profile/" + id);
                } else {
                    vm.error = "User not found";
                }
            }
        }
    }
    
    function RegisterController($location) {
        var vm = this;
    }
})();