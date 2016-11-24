(function (angular) {
    'use strict';
    
    angular
        .module('avivaApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig ($stateProvider) {
        $stateProvider.state('fourthview', {
            parent: 'views',
            url: '/fourthview',
            data: {
                authorities: ['ROLE_ADMIN'],
                pageTitle: 'Logs'
            },
            views: {
                'content@': {
                    templateUrl: 'app/views/fourthview/fourthview.html',
                    controller: 'fourthviewController',
                    controllerAs: 'vm'
                }
            }
        })
    }
})(angular);
