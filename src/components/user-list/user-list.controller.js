export default class UserListController {
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

UserListController.$inject = ['UsersService'];
