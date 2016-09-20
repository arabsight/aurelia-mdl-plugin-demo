import { ROOT, COMPONENTS } from '../config';

export class Default {
    configureRouter(config, router) {
        config.title = 'Aurelia MDL';
        config.options.pushState = true;
        config.options.root = ROOT;

        config.map([
            { route: '', name: 'home', moduleId: 'home/home', title:'Home' }
        ]);

        config.mapUnknownRoutes(instruction => {
            let fragment = instruction.fragment.slice(1);
            if (COMPONENTS.some(item => fragment.endsWith(item))) {
                return fragment;
            }
            return 'home/home';
        });

        this.router = router;
    }
}
