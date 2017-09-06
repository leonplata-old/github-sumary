export default class UserCardController {
  constructor(UsersService) {
    this.UsersService = UsersService;
  }

  $onInit() {
    this.UsersService.getUserByLogin(this.user.login)
      .then((user) => {
        this.user.name = user.name;
      });
  }
}

UserCardController.$inject = ['UsersService'];
