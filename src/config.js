import environment from './environment';

export const ROOT = (environment.debug || environment.testing) ? '/' : '/aurelia-mdl-plugin-demo/'
