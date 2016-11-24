(function (angular) {
    'use strict';
    
    angular
        .module('avivaApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig ($stateProvider) {
        $stateProvider.state('views', {
            abstract: true,
            parent: 'app'
        })
    }
})(angular);
