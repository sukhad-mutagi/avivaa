(function (angular) {
    'use strict';
    
    angular
        .module('avivaApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig ($stateProvider) {
        $stateProvider.state('secondview', {
            parent: 'views',
            url: '/secondview',
            data: {
                authorities: ['ROLE_ADMIN'],
                pageTitle: 'Logs'
            },
            views: {
                'content@': {
                    templateUrl: 'app/views/secondview/secondview.html',
                    controller: 'secondviewController',
                    controllerAs: 'vm'
                }
            }
        })
    }
})(angular);
