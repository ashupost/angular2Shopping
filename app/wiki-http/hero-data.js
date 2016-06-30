System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HeroData;
    return {
        setters:[],
        execute: function() {
            HeroData = (function () {
                function HeroData() {
                }
                HeroData.prototype.createDb = function () {
                    var heroes = [
                        { "id": "1", "name": "Windstorm" },
                        { "id": "2", "name": "Bombasto" },
                        { "id": "3", "name": "Rakhi Prasad" },
                        { "id": "4", "name": "Tornado" }
                    ];
                    return { heroes: heroes };
                };
                return HeroData;
            }());
            exports_1("HeroData", HeroData);
        }
    }
});
//# sourceMappingURL=hero-data.js.map