const router = (
  $locationProvider,
  $urlRouterProvider
) => {
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
};

router.$inject = ['$locationProvider', '$urlRouterProvider'];

export default router;
