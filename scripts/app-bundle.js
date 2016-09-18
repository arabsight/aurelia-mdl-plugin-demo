define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.configure = configure;

    var _environment2 = _interopRequireDefault(_environment);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function configure(aurelia) {
        aurelia.use.standardConfiguration().plugin('aurelia-animator-css').plugin('aurelia-validation').plugin('aurelia-mdl-plugin').feature('resources');

        if (_environment2.default.debug) {
            aurelia.use.developmentLogging();
        }

        if (_environment2.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }

        aurelia.start().then(function () {
            return aurelia.setRoot('shell/default');
        });
    }
});
define('components/buttons',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Buttons = exports.Buttons = function Buttons() {
        _classCallCheck(this, Buttons);

        this.title = 'Buttons';
    };
});
define('home/home',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Home = exports.Home = function Home() {
        _classCallCheck(this, Home);
    };
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('shell/default',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Default = exports.Default = function () {
        function Default() {
            _classCallCheck(this, Default);
        }

        Default.prototype.configureRouter = function configureRouter(config, router) {
            config.title = 'Aurelia MDL';
            config.options.pushState = true;
            config.options.root = '/';

            var navStrategy = function navStrategy(instruction) {
                instruction.config.moduleId = instruction.fragment.slice(1);
                instruction.config.href = instruction.fragment;
            };

            config.map([{ route: '', name: 'home', moduleId: 'home/home', title: 'Home' }, { route: 'components/:path', name: 'components', navigationStrategy: navStrategy }]);

            this.router = router;
        };

        return Default;
    }();
});
define('shell/header/navbar',['exports', 'aurelia-event-aggregator', 'aurelia-framework'], function (exports, _aureliaEventAggregator, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Navbar = undefined;

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
    }

    var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2;

    var Navbar = exports.Navbar = (_dec = (0, _aureliaFramework.containerless)(), _dec2 = (0, _aureliaFramework.inject)(_aureliaEventAggregator.EventAggregator), _dec(_class = _dec2(_class = (_class2 = function () {
        function Navbar(eventAggregator) {
            _classCallCheck(this, Navbar);

            _initDefineProp(this, 'router', _descriptor, this);

            _initDefineProp(this, 'current', _descriptor2, this);

            this.components = ['buttons', 'menus', 'loading', 'layout'];

            this.ea = eventAggregator;
        }

        Navbar.prototype.attached = function attached() {
            var _this = this;

            this.subscription = this.ea.subscribe('router:navigation:success', function () {
                _this.current = _this.router.currentInstruction.params.path;
            });
        };

        Navbar.prototype.detached = function detached() {
            this.subscription.dispose();
        };

        return Navbar;
    }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'router', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'current', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    })), _class2)) || _class) || _class);
});
define('text!components/buttons.html', ['module'], function(module) { module.exports = "<template>\n    <h2 class=\"title\">${ title }</h2>\n\n    <div class=\"mdl-grid\">\n        <div class=\"mdl-cell mdl-cell--12-col component-example\">\n            <div class=\"example-wrapper\">\n                <button class=\"mdl-button mdl-js-button mdl-button--fab mdl-button--colored\">\n                  <i class=\"material-icons\">add</i>\n                </button>\n                <span class=\"caption\">Colored FAB</span>\n            </div>\n\n            <div class=\"example-wrapper\">\n                <button class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n                  <i class=\"material-icons\">add</i>\n                </button>\n                <span class=\"caption\">With ripple</span>\n            </div>\n        </div>\n\n        <div class=\"mdl-cell mdl-cell--12-col component-example\">\n            <div class=\"example-wrapper\">\n                <!-- FAB button -->\n                <button class=\"mdl-button mdl-js-button mdl-button--fab\">\n                  <i class=\"material-icons\">add</i>\n                </button>\n                <span class=\"caption\">Plain FAB</span>\n            </div>\n\n            <div class=\"example-wrapper\">\n                <!-- FAB button with ripple -->\n                <button class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect\">\n                  <i class=\"material-icons\">add</i>\n                </button>\n                <span class=\"caption\">With ripple</span>\n            </div>\n\n            <div class=\"example-wrapper\">\n                <!-- Disabled FAB button -->\n                <button class=\"mdl-button mdl-js-button mdl-button--fab\" disabled>\n                  <i class=\"material-icons\">add</i>\n                </button>\n                <span class=\"caption\">Disabled</span>\n            </div>\n        </div>\n\n        <div class=\"mdl-cell mdl-cell--12-col component-example\">\n            <div class=\"example-wrapper\">\n                <!-- Raised button -->\n                <button class=\"mdl-button mdl-js-button mdl-button--raised\">\n                  Button\n                </button>\n\n                <span class=\"caption\">Raised Button</span>\n            </div>\n\n            <div class=\"example-wrapper\">\n                <!-- Raised button with ripple -->\n                <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect\">\n                  Button\n                </button>\n\n                <span class=\"caption\">With ripple</span>\n            </div>\n\n            <div class=\"example-wrapper\">\n                <!-- Raised disabled button -->\n                <button class=\"mdl-button mdl-js-button mdl-button--raised\" disabled>\n                  Button\n                </button>\n                <span class=\"caption\">Disabled</span>\n            </div>\n        </div>\n\n        <div class=\"mdl-cell mdl-cell--12-col component-example\">\n            <div class=\"example-wrapper\">\n                <!-- Colored raised button -->\n                <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\">\n                  Button\n                </button>\n\n                <span class=\"caption\">Colored Button</span>\n            </div>\n\n            <div class=\"example-wrapper\">\n                <!-- Accent-colored raised button -->\n                <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--accent\">\n                  Button\n                </button>\n\n                <span class=\"caption\">Accent colored</span>\n            </div>\n\n            <div class=\"example-wrapper\">\n                <!-- Accent-colored raised button with ripple -->\n                <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent\">\n                  Button\n                </button>\n                <span class=\"caption\">With ripple</span>\n            </div>\n        </div>\n\n        <div class=\"mdl-cell mdl-cell--12-col component-example\">\n            <div class=\"example-wrapper\">\n                <!-- Flat button -->\n                <button class=\"mdl-button mdl-js-button\">\n                  Button\n                </button>\n\n                <span class=\"caption\">Flat button</span>\n            </div>\n\n            <div class=\"example-wrapper\">\n                <!-- Flat button with ripple -->\n                <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect\">\n                  Button\n                </button>\n\n                <span class=\"caption\">With ripple</span>\n            </div>\n\n            <div class=\"example-wrapper\">\n                <!-- Disabled flat button -->\n                <button class=\"mdl-button mdl-js-button\" disabled>\n                  Button\n                </button>\n                <span class=\"caption\">Disabled</span>\n            </div>\n        </div>\n\n        <div class=\"mdl-cell mdl-cell--12-col component-example\">\n            <div class=\"example-wrapper\">\n                <button class=\"mdl-button mdl-js-button mdl-button--primary\">\n                  Button\n                </button>\n                <span class=\"caption\">Primary colored flat</span>\n            </div>\n\n            <div class=\"example-wrapper\">\n                <button class=\"mdl-button mdl-js-button mdl-button--accent\">\n                  Button\n                </button>\n                <span class=\"caption\">Accent colored flat</span>\n            </div>\n        </div>\n\n        <div class=\"mdl-cell mdl-cell--12-col component-example\">\n            <div class=\"example-wrapper\">\n                <button class=\"mdl-button mdl-js-button mdl-button--icon\">\n                  <i class=\"material-icons\">mood</i>\n                </button>\n                <span class=\"caption\">Icon button</span>\n            </div>\n\n            <div class=\"example-wrapper\">\n                <button class=\"mdl-button mdl-js-button mdl-button--icon mdl-button--colored\">\n                  <i class=\"material-icons\">mood</i>\n                </button>\n                <span class=\"caption\">Colored</span>\n            </div>\n        </div>\n\n        <div class=\"mdl-cell mdl-cell--12-col component-example\">\n            <div class=\"example-wrapper\">\n                <button class=\"mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab\">\n                  <i class=\"material-icons\">add</i>\n                </button>\n                <span class=\"caption\">Mini FAB</span>\n            </div>\n\n            <div class=\"example-wrapper\">\n                <button class=\"mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored\">\n                  <i class=\"material-icons\">add</i>\n                </button>\n                <span class=\"caption\">Colored</span>\n            </div>\n        </div>\n    </div>\n</template>\n"; });
define('text!shell/default.css', ['module'], function(module) { module.exports = ".is-current {\n  background-color: #e0e0e0;\n  border-left: 3px solid #757575; }\n\n.component-example {\n  display: flex;\n  justify-content: center; }\n  .component-example .example-wrapper {\n    display: flex;\n    flex-direction: column;\n    padding: 20px; }\n    .component-example .example-wrapper .caption {\n      margin-top: 25px;\n      color: #757575; }\n\nh2.title {\n  font-size: 16px;\n  font-weight: 500;\n  margin: 30px;\n  color: #757575;\n  text-transform: uppercase; }\n"; });
define('text!home/home.html', ['module'], function(module) { module.exports = "<template>\n    \n</template>\n"; });
define('text!shell/default.html', ['module'], function(module) { module.exports = "<template>\n\n<require from=\"material-design-lite/material.pink-deep_purple.min.css\"></require>\n<require from=\"./default.css\"></require>\n<require from=\"./header/navbar\"></require>\n\n<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-drawer\">\n    <navbar router.bind=\"router\"></navbar>\n\n    <main class=\"mdl-layout__content\">\n        <router-view></router-view>\n    </main>\n</div>\n\n</template>\n"; });
define('text!shell/header/navbar.html', ['module'], function(module) { module.exports = "<template>\n    <header class=\"mdl-layout__header\">\n        <div class=\"mdl-layout__header-row\">\n            <span class=\"mdl-layout-title\">Title</span>\n            <div class=\"mdl-layout-spacer\"></div>\n            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--expandable\n              mdl-textfield--floating-label mdl-textfield--align-right\">\n                <label class=\"mdl-button mdl-js-button mdl-button--icon\" for=\"search-exp\">\n                <i class=\"material-icons\">search</i>\n                </label>\n                <div class=\"mdl-textfield__expandable-holder\">\n                    <input class=\"mdl-textfield__input\" type=\"text\" name=\"sample\" id=\"search-exp\">\n                </div>\n            </div>\n            <nav class=\"mdl-navigation mdl-layout--large-screen-only\">\n                <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n                <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n                <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n                <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n            </nav>\n        </div>\n    </header>\n    <div class=\"mdl-layout__drawer\">\n        <span class=\"mdl-layout-title\">Components</span>\n        <nav class=\"mdl-navigation\">\n            <a repeat.for=\"item of components\"\n               class=\"mdl-navigation__link mdl-typography--text-uppercase ${ current === item ? 'is-current' : '' }\"\n               route-href=\"route: components; params.bind: { path: item }\">\n               ${ item }\n            </a>\n        </nav>\n    </div>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map