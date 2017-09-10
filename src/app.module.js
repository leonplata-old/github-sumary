import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import 'bootstrap/dist/css/bootstrap.min.css';

import routesConfig from './configurations/routes.config';
import './style.scss';

import UserService from './services/user.service';

import layoutComponent from './components/layout/layout.component';
import userCardListComponent from './components/user-card-list/user-card-list.component';
import userCardComponent from './components/user-card/user-card.component';
import repositoryCardListComponent from './components/repository-card-list/repository-card-list.component';
import repositoryCardComponent from './components/repository-card/repository-card.component';


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
  repositoryCardListComponent,
  repositoryCardComponent,
];

const services = [
  UserService,
];

const appModule = angular
  .module('app', modules)
  .constant('GITHUB_API_URL', 'https://api.github.com');

configurations.forEach(config => appModule.config(config));
services.forEach(service => appModule.service(service.$name, service));
components.forEach(component => appModule.component(component.name, component));

export default appModule;
