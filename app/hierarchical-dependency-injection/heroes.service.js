System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HeroesService;
    return {
        setters:[],
        execute: function() {
            HeroesService = (function () {
                function HeroesService() {
                    this.heroes = [
                        { name: "RubberMan", power: 'flexibility' },
                        { name: "Tornado", power: 'Weather changer' }
                    ];
                }
                HeroesService.prototype.getHeroes = function () {
                    return this.heroes;
                };
                return HeroesService;
            }());
            exports_1("HeroesService", HeroesService);
        }
    }
});
//# sourceMappingURL=heroes.service.js.map