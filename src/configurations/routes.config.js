const router = (
  $locationProvider,
  $urlRouterProvider,
  $stateProvider
) => {
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('users', {
      url: '/users',
      component: 'gsUserCardList',
    })
    .state('users.detail', {
      url: '/:login',
      views: {
        '@': {
          component: 'gsRepositoryCardList',
        },
      },
    });

  $urlRouterProvider.otherwise('/users');
};

router.$inject = [
  '$locationProvider',
  '$urlRouterProvider',
  '$stateProvider',
];

export default router;
