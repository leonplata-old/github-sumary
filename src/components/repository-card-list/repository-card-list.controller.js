export default class RepositoryCardListController {
  constructor($stateParams, UsersService) {
    this.login = $stateParams.login;
    this.UsersService = UsersService;
    this.repositories = [];
  }

  $onInit() {
    this.UsersService.getUserRepositories(this.login)
      .then((repositories) => {
        this.repositories = repositories;
      });
  }
}

RepositoryCardListController.$inject = ['$stateParams', 'UsersService'];
