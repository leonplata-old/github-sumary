import './user-card.component.scss';
import template from './user-card.component.html';
import UserCardController from './user-card.controller';

const component = {
  name: 'gsUserCard',
  template,
  controller: UserCardController,
};

export default Object.freeze(component);
