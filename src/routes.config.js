const router = (
  $locationProvider,
  $urlRouterProvider,
  $stateProvider
) => {
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('user-list', {
      url: '/',
      component: 'gsUserList',
    });

  $urlRouterProvider.otherwise('/');
};

router.$inject = [
  '$locationProvider',
  '$urlRouterProvider',
  '$stateProvider',
];

export default router;
