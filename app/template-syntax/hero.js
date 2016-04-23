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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLXN5bnRheC9oZXJvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFBQTtnQkFHSSxjQUNXLFNBQWdCLEVBQ2hCLFFBQWdCLEVBQ2hCLFNBQWUsRUFDZixHQUFXLEVBQ1gsSUFBaUIsRUFDeEIsRUFBVTtvQkFEVixvQkFBd0IsR0FBeEIsVUFBd0I7b0JBSmpCLGNBQVMsR0FBVCxTQUFTLENBQU87b0JBQ2hCLGFBQVEsR0FBUixRQUFRLENBQVE7b0JBQ2hCLGNBQVMsR0FBVCxTQUFTLENBQU07b0JBQ2YsUUFBRyxHQUFILEdBQUcsQ0FBUTtvQkFDWCxTQUFJLEdBQUosSUFBSSxDQUFhO29CQUV4QixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxJQUFJLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDOUMsQ0FBQztnQkFFTSxVQUFLLEdBQVosVUFBYSxFQUFzRDt3QkFBckQsd0JBQVMsRUFBRSxzQkFBUSxFQUFFLHdCQUFTLEVBQUUsWUFBRyxFQUFFLGNBQUksRUFBRSxVQUFFO29CQUN2RCxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUUsQ0FBQztnQkFDckUsQ0FBQztnQkFFRCxzQkFBSSwwQkFBUTt5QkFBWixjQUFnQixNQUFNLENBQUksSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsUUFBVSxDQUFDLENBQUEsQ0FBQzs7O21CQUFBO2dCQUV0RCxXQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUVYLGVBQVUsR0FBRztvQkFDaEIsSUFBSSxJQUFJLENBQ0osVUFBVSxFQUNWLGFBQWEsRUFDYixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUNyQixzQ0FBc0MsRUFDdEMsR0FBRyxDQUFDO29CQUVSLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7b0JBQ3hCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7b0JBQ3pCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7b0JBQ3ZCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7aUJBQ3pCLENBQUM7Z0JBQ04sV0FBQztZQUFELENBbENBLEFBa0NDLElBQUE7WUFsQ0QsdUJBa0NDLENBQUE7Ozs7QUFFRDs7OztHQUlHIiwiZmlsZSI6InRlbXBsYXRlLXN5bnRheC9oZXJvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEhlcm8ge1xyXG4gICAgcHVibGljIGlkOm51bWJlclxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBmaXJzdE5hbWU6c3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBsYXN0TmFtZT86c3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBiaXJ0aGRhdGU/OkRhdGUsXHJcbiAgICAgICAgcHVibGljIHVybD86c3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyByYXRlOm51bWJlciA9IDEwMCxcclxuICAgICAgICBpZD86bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkICE9IG51bGwgPyBpZCA6IEhlcm8ubmV4dElkKys7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNsb25lKHtmaXJzdE5hbWUsIGxhc3ROYW1lLCBiaXJ0aGRhdGUsIHVybCwgcmF0ZSwgaWR9IDogSGVybyl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBIZXJvIChmaXJzdE5hbWUsIGxhc3ROYW1lLCBiaXJ0aGRhdGUsIHVybCwgcmF0ZSwgaWQgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZnVsbE5hbWUoKSB7cmV0dXJuIGAke3RoaXMuZmlyc3ROYW1lfSAke3RoaXMubGFzdE5hbWV9YDt9XHJcblxyXG4gICAgc3RhdGljIG5leHRJZCA9IDE7XHJcblxyXG4gICAgc3RhdGljIE1vY2tIZXJvZXMgPSBbXHJcbiAgICAgICAgbmV3IEhlcm8oXHJcbiAgICAgICAgICAgICdIZXJjdWxlcycsXHJcbiAgICAgICAgICAgICdTb24gb2YgWmV1cycsXHJcbiAgICAgICAgICAgIG5ldyBEYXRlKDE5NzAsIDEsIDI1KSxcclxuICAgICAgICAgICAgJ2h0dHA6Ly93d3cuaW1kYi5jb20vdGl0bGUvdHQwMDY1ODMyLycsXHJcbiAgICAgICAgICAgIDMyNSksXHJcblxyXG4gICAgICAgIG5ldyBIZXJvKCdlZW5pZScsICd0b2UnKSxcclxuICAgICAgICBuZXcgSGVybygnTWVhbmllJywgJ1RvZScpLFxyXG4gICAgICAgIG5ldyBIZXJvKCdNaW55JywgJ1RvZScpLFxyXG4gICAgICAgIG5ldyBIZXJvKCdNb2UnLCAnVG9lJylcclxuICAgIF07XHJcbn1cclxuXHJcbi8qXHJcbiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxyXG4gY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cDovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4gKi8iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
