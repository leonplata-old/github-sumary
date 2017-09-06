import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

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
