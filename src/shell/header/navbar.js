import { COMPONENTS } from '../../config';
import { EventAggregator } from 'aurelia-event-aggregator';
import { inject, bindable, containerless } from 'aurelia-framework';

@containerless()
@inject(EventAggregator)
export class Navbar {
    @bindable router;
    @bindable current;

    components = COMPONENTS;

    constructor(eventAggregator) {
        this.ea = eventAggregator;
    }

    attached() {
        this.subscription = this.ea.subscribe('router:navigation:success', () => {
            this.current = this.router.currentInstruction.params.path;
        });
    }

    detached() {
        this.subscription.dispose();
    }

    //const result = name.charAt(0).toLowerCase() + name.slice(1).replace(/[_.-](\w|$)/g, (_, x) => x.toUpperCase());
}
