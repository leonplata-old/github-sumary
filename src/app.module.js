import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

const modules = [
  uiRouter,
];

const configurations = [
];

const components = [
];

const app = angular.module('app', modules);

configurations.forEach(config => app.config(config));
components.forEach(component => app.component(component.name, component));

export default app;
