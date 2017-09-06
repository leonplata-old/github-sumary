import angular from 'angular';

export default class UserCardListController {
  constructor(UsersService) {
    this.UsersService = UsersService;
    this.users = [];
  }

  $onInit() {
    this.fetchUsers();
  }

  showMore() {
    this.fetchUsers();
  }

  fetchUsers() {
    return this.UsersService.getUsers()
      .then((users) => {
        // Fetched users lack of name, login will temporarily be assigned as name
        this.users = users.map(user => angular.extend({}, user, { name: user.login }));
      });
  }
}

UserCardListController.$inject = ['UsersService'];
