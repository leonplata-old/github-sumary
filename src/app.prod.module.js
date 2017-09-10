import appModule from './app.module';
import compileConfig from './configurations/compile.config';

const configurations = [
  compileConfig,
];

configurations.forEach(config => appModule.config(config));

export default appModule;
