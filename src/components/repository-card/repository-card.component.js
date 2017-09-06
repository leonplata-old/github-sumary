import './repository-card.component.scss';
import template from './repository-card.component.html';
import RepositoryCardController from './repository-card.controller';

const component = {
  name: 'gsRepositoryCard',
  template,
  controller: RepositoryCardController,
  bindings: { repository: '<' },
};

export default Object.freeze(component);
