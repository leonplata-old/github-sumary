import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import 'bootstrap/dist/css/bootstrap.min.css';

import routesConfig from './routes.config';
import './style.scss';

import UserService from './services/user.service';

import layoutComponent from './components/layout/layout.component';
import userCardListComponent from './components/user-card-list/user-card-list.component';
import userCardComponent from './components/user-card/user-card.component';


const modules = [
  uiRouter,
];

const configurations = [
  routesConfig,
];

const components = [
  layoutComponent,
  userCardListComponent,
  userCardComponent,
];

const services = [
  UserService,
];

const app = angular
  .module('app', modules)
  .constant('GITHUB_API_URL', 'https://api.github.com');

configurations.forEach(config => app.config(config));
services.forEach(service => app.service(service.name, service));
components.forEach(component => app.component(component.name, component));

export default app;
