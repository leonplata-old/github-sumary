export default class RepositoryCardListController {
  constructor($stateParams, UsersService) {
    this.login = $stateParams.login;
    this.UsersService = UsersService;
    this.repositories = [];
  }

  $onInit() {
    this.UsersService.getUserReposPagination(this.login)
      .then((pagination) => {
        this.repositories = pagination.content;
      });
  }
}

RepositoryCardListController.$inject = ['$stateParams', 'UsersService'];
