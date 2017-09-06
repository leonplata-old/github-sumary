import './user-card-list.component.scss';
import template from './user-card-list.component.html';
import UserCardListController from './user-card-list.controller';

const component = {
  name: 'gsUserCardList',
  template,
  controller: UserCardListController,
};

export default Object.freeze(component);
