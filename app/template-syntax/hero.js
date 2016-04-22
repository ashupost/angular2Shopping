System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Hero;
    return {
        setters:[],
        execute: function() {
            Hero = (function () {
                function Hero(firstName, lastName, birthdate, url, rate, id) {
                    if (rate === void 0) { rate = 100; }
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.birthdate = birthdate;
                    this.url = url;
                    this.rate = rate;
                    this.id = id != null ? id : Hero.nextId++;
                }
                Hero.clone = function (_a) {
                    var firstName = _a.firstName, lastName = _a.lastName, birthdate = _a.birthdate, url = _a.url, rate = _a.rate, id = _a.id;
                    return new Hero(firstName, lastName, birthdate, url, rate, id);
                };
                Object.defineProperty(Hero.prototype, "fullName", {
                    get: function () { return this.firstName + " " + this.lastName; },
                    enumerable: true,
                    configurable: true
                });
                Hero.nextId = 1;
                Hero.MockHeroes = [
                    new Hero('Hercules', 'Son of Zeus', new Date(1970, 1, 25), 'http://www.imdb.com/title/tt0065832/', 325),
                    new Hero('eenie', 'toe'),
                    new Hero('Meanie', 'Toe'),
                    new Hero('Miny', 'Toe'),
                    new Hero('Moe', 'Toe')
                ];
                return Hero;
            }());
            exports_1("Hero", Hero);
        }
    }
});
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 
//# sourceMappingURL=hero.js.map