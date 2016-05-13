"use strict";
var Hero = (function () {
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
exports.Hero = Hero;
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLXN5bnRheC9oZXJvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUdJLGNBQ1csU0FBZ0IsRUFDaEIsUUFBZ0IsRUFDaEIsU0FBZSxFQUNmLEdBQVcsRUFDWCxJQUFpQixFQUN4QixFQUFVO1FBRFYsb0JBQXdCLEdBQXhCLFVBQXdCO1FBSmpCLGNBQVMsR0FBVCxTQUFTLENBQU87UUFDaEIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNoQixjQUFTLEdBQVQsU0FBUyxDQUFNO1FBQ2YsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUNYLFNBQUksR0FBSixJQUFJLENBQWE7UUFFeEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUVNLFVBQUssR0FBWixVQUFhLEVBQXNEO1lBQXJELHdCQUFTLEVBQUUsc0JBQVEsRUFBRSx3QkFBUyxFQUFFLFlBQUcsRUFBRSxjQUFJLEVBQUUsVUFBRTtRQUN2RCxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUUsQ0FBQztJQUNyRSxDQUFDO0lBRUQsc0JBQUksMEJBQVE7YUFBWixjQUFnQixNQUFNLENBQUksSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsUUFBVSxDQUFDLENBQUEsQ0FBQzs7O09BQUE7SUFFdEQsV0FBTSxHQUFHLENBQUMsQ0FBQztJQUVYLGVBQVUsR0FBRztRQUNoQixJQUFJLElBQUksQ0FDSixVQUFVLEVBQ1YsYUFBYSxFQUNiLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQ3JCLHNDQUFzQyxFQUN0QyxHQUFHLENBQUM7UUFFUixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO0tBQ3pCLENBQUM7SUFDTixXQUFDO0FBQUQsQ0FsQ0EsQUFrQ0MsSUFBQTtBQWxDWSxZQUFJLE9Ba0NoQixDQUFBO0FBRUQ7Ozs7R0FJRyIsImZpbGUiOiJ0ZW1wbGF0ZS1zeW50YXgvaGVyby5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBIZXJvIHtcclxuICAgIHB1YmxpYyBpZDpudW1iZXJcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgZmlyc3ROYW1lOnN0cmluZyxcclxuICAgICAgICBwdWJsaWMgbGFzdE5hbWU/OnN0cmluZyxcclxuICAgICAgICBwdWJsaWMgYmlydGhkYXRlPzpEYXRlLFxyXG4gICAgICAgIHB1YmxpYyB1cmw/OnN0cmluZyxcclxuICAgICAgICBwdWJsaWMgcmF0ZTpudW1iZXIgPSAxMDAsXHJcbiAgICAgICAgaWQ/Om51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZCAhPSBudWxsID8gaWQgOiBIZXJvLm5leHRJZCsrO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjbG9uZSh7Zmlyc3ROYW1lLCBsYXN0TmFtZSwgYmlydGhkYXRlLCB1cmwsIHJhdGUsIGlkfSA6IEhlcm8pe1xyXG4gICAgICAgIHJldHVybiBuZXcgSGVybyAoZmlyc3ROYW1lLCBsYXN0TmFtZSwgYmlydGhkYXRlLCB1cmwsIHJhdGUsIGlkICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZ1bGxOYW1lKCkge3JldHVybiBgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfWA7fVxyXG5cclxuICAgIHN0YXRpYyBuZXh0SWQgPSAxO1xyXG5cclxuICAgIHN0YXRpYyBNb2NrSGVyb2VzID0gW1xyXG4gICAgICAgIG5ldyBIZXJvKFxyXG4gICAgICAgICAgICAnSGVyY3VsZXMnLFxyXG4gICAgICAgICAgICAnU29uIG9mIFpldXMnLFxyXG4gICAgICAgICAgICBuZXcgRGF0ZSgxOTcwLCAxLCAyNSksXHJcbiAgICAgICAgICAgICdodHRwOi8vd3d3LmltZGIuY29tL3RpdGxlL3R0MDA2NTgzMi8nLFxyXG4gICAgICAgICAgICAzMjUpLFxyXG5cclxuICAgICAgICBuZXcgSGVybygnZWVuaWUnLCAndG9lJyksXHJcbiAgICAgICAgbmV3IEhlcm8oJ01lYW5pZScsICdUb2UnKSxcclxuICAgICAgICBuZXcgSGVybygnTWlueScsICdUb2UnKSxcclxuICAgICAgICBuZXcgSGVybygnTW9lJywgJ1RvZScpXHJcbiAgICBdO1xyXG59XHJcblxyXG4vKlxyXG4gQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcclxuIGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHA6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuICovIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
