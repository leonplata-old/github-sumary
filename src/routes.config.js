const router = (
  $locationProvider,
  $urlRouterProvider,
  $stateProvider
) => {
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('users', {
      url: '/',
      component: 'gsUserCardList',
    });

  $urlRouterProvider.otherwise('/');
};

router.$inject = [
  '$locationProvider',
  '$urlRouterProvider',
  '$stateProvider',
];

export default router;
