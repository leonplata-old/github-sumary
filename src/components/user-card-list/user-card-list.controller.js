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
        // Fetched users lack of name, login will temporarily be assigned as name
        const fixedUsers = moreUsers.map(user => angular.extend({}, user, { name: user.login }));
        this.users = [
          ...this.users,
          ...fixedUsers,
        ];
      });
  }
}

UserCardListController.$inject = ['UsersService'];
