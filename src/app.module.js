import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import 'bootstrap/dist/css/bootstrap.min.css';

import routesConfig from './routes.config';
import './style.scss';

import userListComponent from './components/user-list/user-list.component';
import layoutComponent from './components/layout/layout.component';

const modules = [
  uiRouter,
];

const configurations = [
  routesConfig,
];

const components = [
  layoutComponent,
  userListComponent,
];

const app = angular.module('app', modules);

configurations.forEach(config => app.config(config));
components.forEach(component => app.component(component.name, component));

export default app;
