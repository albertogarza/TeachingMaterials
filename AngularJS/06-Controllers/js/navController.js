(function(){
    'use strict';

    angular.module('navController', [])
        .controller('navController', navController);

    basicController.$inject = ["$location"];

    function navController($location)
    {
        var nav = this;
        nav.isActive = isActive;

        function isActive(viewLocation) {
            return viewLocation === $location.path();
        };
    }

}());
