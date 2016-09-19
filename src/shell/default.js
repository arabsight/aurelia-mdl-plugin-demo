import { ROOT } from '../config';

export class Default {
    configureRouter(config, router) {
        config.title = 'Aurelia MDL';
        config.options.pushState = true;
        config.options.root = ROOT;

        let navStrategy = (instruction) => {
            instruction.config.moduleId = instruction.fragment.slice(1);
            instruction.config.href = instruction.fragment;
        }

        config.map([
            { route: '', name: 'home', moduleId: 'home/home', title:'Home' },
            { route: 'components/:path', name: 'components', navigationStrategy: navStrategy }
        ]);

        // config.mapUnknownRoutes(instruction => {
        //     console.log(instruction.fragment);
        //     return instruction.fragment;
        // });

        this.router = router;
    }
}
