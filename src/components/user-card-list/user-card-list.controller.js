import angular from 'angular';

export default class UserCardListController {
  constructor(UsersService) {
    this.UsersService = UsersService;
    this.users = [];
  }

  $onInit() {
    this.fetchUsers(0);
  }

  showMore() {
    const lastUser = this.users[this.users.length - 1];
    this.fetchUsers(lastUser.id);
  }

  fetchUsers(id) {
    return this.UsersService.getUsers(id)
      .then((moreUsers) => {
        this.users = [
          ...this.users,
          ...moreUsers,
        ];
      });
  }
}

UserCardListController.$inject = ['UsersService'];
