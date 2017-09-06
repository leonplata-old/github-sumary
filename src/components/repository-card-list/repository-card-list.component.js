import './repository-card-list.component.scss';
import template from './repository-card-list.component.html';
import RepositoryCardListController from './repository-card-list.controller';

const component = {
  name: 'gsRepositoryCardList',
  template,
  controller: RepositoryCardListController,
};

export default Object.freeze(component);
