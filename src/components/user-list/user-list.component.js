import './user-list.component.scss';
import template from './user-list.component.html';
import UserListController from './user-list.controller';

const component = {
  name: 'gsUserList',
  template,
  controller: UserListController,
};

export default Object.freeze(component);
