(function (angular) {
    'use strict';
    
    angular
        .module('avivaApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig ($stateProvider) {
        $stateProvider.state('thirdview', {
            parent: 'views',
            url: '/thirdview',
            data: {
                authorities: ['ROLE_ADMIN'],
                pageTitle: 'Logs'
            },
            views: {
                'content@': {
                    templateUrl: 'app/views/thirdview/thirdview.html',
                    controller: 'thirdviewController',
                    controllerAs: 'vm'
                }
            }
        })
    }
})(angular);
