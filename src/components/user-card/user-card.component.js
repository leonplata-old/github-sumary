import './user-card.component.scss';
import template from './user-card.component.html';
import UserCardController from './user-card.controller';

const component = {
  name: 'gsUserCard',
  template,
  controller: UserCardController,
  bindings: { user: '<' },
};

export default Object.freeze(component);
