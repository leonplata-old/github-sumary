import { createPaginationLinks } from '~/utils/api';

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

  getUserByLogin(login) {
    return this.$http
      .get(`${this.GITHUB_API_URL}/users/${login}`)
      .then(response => response.data);
  }

  getUserReposPagination(login, page = 1, perPage = 20) {
    return this.$http
      .get(`${this.GITHUB_API_URL}/users/${login}/repos`, {
        params: { page, per_page: perPage },
      })
      .then((response) => {
        const linkHeader = response.headers('Link');
        const fetchHandler = ({ page: fetchPage }) => this.getUserReposPagination(login, fetchPage, perPage);
        const links = createPaginationLinks(linkHeader, fetchHandler);
        return { links, content: response.data };
      });
  }
}

UsersService.$inject = ['$http', 'GITHUB_API_URL'];
