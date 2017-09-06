export default class UsersService {
  constructor($http, GITHUB_API_URL) {
    this.$http = $http;
    this.GITHUB_API_URL = GITHUB_API_URL;
  }

  getUsers(since = 0) {
    return this.$http
      .get(`${this.GITHUB_API_URL}/users`, {
        params: { since },
      })
      .then(response => response.data);
  }
}

UsersService.$inject = ['$http', 'GITHUB_API_URL'];
