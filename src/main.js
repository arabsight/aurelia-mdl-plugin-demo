import environment from './environment';

Promise.config({
    warnings: {
        wForgottenReturn: false
    }
});

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .plugin('aurelia-animator-css')
        .plugin('aurelia-validation')
        .plugin('aurelia-mdl-plugin')
        .feature('resources');

    if (environment.debug) {
        aurelia.use.developmentLogging();
    }

    if (environment.testing) {
        aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(() => aurelia.setRoot('shell/default'));
}
