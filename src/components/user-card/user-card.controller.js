export default class UserCardController {
  constructor(UsersService) {
    this.UsersService = UsersService;
  }

  $onInit() {
    if (!this.user.name) {
      this.fetchCurrentUser();
    }
  }

  fetchCurrentUser() {
    return this.UsersService.getUserByLogin(this.user.login)
      .then((user) => {
        this.user.name = user.name;
      });
  }
}

UserCardController.$inject = ['UsersService'];
