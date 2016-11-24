(function (angular) {
    'use strict';
    
    angular
        .module('avivaApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig ($stateProvider) {
        $stateProvider.state('firstview', {
            parent: 'views',
            url: '/firstview',
            data: {
                authorities: ['ROLE_ADMIN'],
                pageTitle: 'Logs'
            },
            views: {
                'content@': {
                    templateUrl: 'app/views/firstview/firstview.html',
                    controller: 'firstviewController',
                    controllerAs: 'vm'
                }
            }
        })
    }
})(angular);
