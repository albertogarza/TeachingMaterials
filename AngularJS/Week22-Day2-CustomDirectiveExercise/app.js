angular.module('isolate-scope', [])

    .controller('IsolatedScopeController', function($scope) {
        $scope.name = 'Bill';
    })

    .directive('customerName', function() {
        return {
            template: '<span>Customer name (from directive): <b>{{name}}</b></span>'
        };
    });
