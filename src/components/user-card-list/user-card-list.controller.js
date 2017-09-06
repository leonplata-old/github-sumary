export default class UserCardListController {
  constructor(UsersService) {
    this.UsersService = UsersService;
    this.users = [];
  }

  $onInit() {
    this.UsersService.getUsers()
      .then((users) => {
        this.users = users;
      });
  }
}

UserCardListController.$inject = ['UsersService'];
