(function(){
    'use strict';

    angular.module('basicApp', [])
        .controller('basicController', basicController);

    basicController.$inject = [];

    function basicController() {

        var bc = this;
        bc.sometext = '';

        bc.doSomething = doSomething;

        function doSomething() {
            bc.sometext = '';
        }
    }

}());
