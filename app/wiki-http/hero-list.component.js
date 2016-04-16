System.register(['angular2/core', './hero.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_service_1;
    var HeroListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroListComponent = (function () {
                function HeroListComponent(_heroService) {
                    this._heroService = _heroService;
                }
                HeroListComponent.prototype.ngOnInit = function () { this.getHeroes(); };
                HeroListComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this._heroService.getHeroes()
                        .subscribe(function (heroes) { return _this.heroes = heroes; }, function (error) { return _this.errorMessage = error; });
                };
                HeroListComponent.prototype.addHero = function (name) {
                    var _this = this;
                    if (!name) {
                        return;
                    }
                    this._heroService.addHero(name)
                        .subscribe(function (hero) { return _this.heroes.push(hero); }, function (error) { return _this.errorMessage = error; });
                };
                HeroListComponent = __decorate([
                    core_1.Component({
                        selector: 'hero-list',
                        template: "\n  <h3>Heroes:</h3>\n  <ul>\n    <li *ngFor=\"#hero of heroes\">\n      {{ hero.name }}\n    </li>\n  </ul>\n  New Hero:\n  <input #newHero />\n  <button (click)=\"addHero(newHero.value); newHero.value=''\">\n    Add Hero\n  </button>\n  <div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n  ",
                        styles: ['.error {color:red;}']
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], HeroListComponent);
                return HeroListComponent;
            }());
            exports_1("HeroListComponent", HeroListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpa2ktaHR0cC9oZXJvLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBc0JBO2dCQUVJLDJCQUFxQixZQUF5QjtvQkFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7Z0JBQUcsQ0FBQztnQkFLbEQsb0NBQVEsR0FBUixjQUFhLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRWhDLHFDQUFTLEdBQVQ7b0JBQUEsaUJBS0M7b0JBSkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUU7eUJBQ3hCLFNBQVMsQ0FDTixVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFwQixDQUFvQixFQUM5QixVQUFBLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQVEsS0FBSyxFQUE5QixDQUE4QixDQUFDLENBQUM7Z0JBQ3RELENBQUM7Z0JBRUQsbUNBQU8sR0FBUCxVQUFTLElBQVk7b0JBQXJCLGlCQU1DO29CQUxHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFBQSxNQUFNLENBQUM7b0JBQUEsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO3lCQUMxQixTQUFTLENBQ04sVUFBQSxJQUFJLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBdEIsQ0FBc0IsRUFDL0IsVUFBQSxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLEtBQUssRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO2dCQUN0RCxDQUFDO2dCQXhDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUsdVRBYVg7d0JBQ0MsTUFBTSxFQUFFLENBQUMscUJBQXFCLENBQUM7cUJBQ2xDLENBQUM7O3FDQUFBO2dCQXdCRix3QkFBQztZQUFELENBdkJBLEFBdUJDLElBQUE7WUF2QkQsaURBdUJDLENBQUEiLCJmaWxlIjoid2lraS1odHRwL2hlcm8tbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtIZXJvfSAgICAgICAgICAgICAgZnJvbSAnLi9oZXJvJztcclxuaW1wb3J0IHtIZXJvU2VydmljZX0gICAgICAgZnJvbSAnLi9oZXJvLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hlcm8tbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gIDxoMz5IZXJvZXM6PC9oMz5cclxuICA8dWw+XHJcbiAgICA8bGkgKm5nRm9yPVwiI2hlcm8gb2YgaGVyb2VzXCI+XHJcbiAgICAgIHt7IGhlcm8ubmFtZSB9fVxyXG4gICAgPC9saT5cclxuICA8L3VsPlxyXG4gIE5ldyBIZXJvOlxyXG4gIDxpbnB1dCAjbmV3SGVybyAvPlxyXG4gIDxidXR0b24gKGNsaWNrKT1cImFkZEhlcm8obmV3SGVyby52YWx1ZSk7IG5ld0hlcm8udmFsdWU9JydcIj5cclxuICAgIEFkZCBIZXJvXHJcbiAgPC9idXR0b24+XHJcbiAgPGRpdiBjbGFzcz1cImVycm9yXCIgKm5nSWY9XCJlcnJvck1lc3NhZ2VcIj57e2Vycm9yTWVzc2FnZX19PC9kaXY+XHJcbiAgYCxcclxuICAgIHN0eWxlczogWycuZXJyb3Ige2NvbG9yOnJlZDt9J11cclxufSlcclxuZXhwb3J0IGNsYXNzIEhlcm9MaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaGVyb1NlcnZpY2U6IEhlcm9TZXJ2aWNlKSB7fVxyXG5cclxuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgaGVyb2VzOkhlcm9bXTtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgdGhpcy5nZXRIZXJvZXMoKTsgfVxyXG5cclxuICAgIGdldEhlcm9lcygpIHtcclxuICAgICAgICB0aGlzLl9oZXJvU2VydmljZS5nZXRIZXJvZXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgaGVyb2VzID0+IHRoaXMuaGVyb2VzID0gaGVyb2VzLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSGVybyAobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFuYW1lKSB7cmV0dXJuO31cclxuICAgICAgICB0aGlzLl9oZXJvU2VydmljZS5hZGRIZXJvKG5hbWUpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBoZXJvICA9PiB0aGlzLmhlcm9lcy5wdXNoKGhlcm8pLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
