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
                        templateUrl: 'templates/wiki-http/hero-list.component.html',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpa2ktaHR0cC9oZXJvLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBRUksMkJBQXFCLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRyxDQUFDO2dCQUtsRCxvQ0FBUSxHQUFSLGNBQWEsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFFaEMscUNBQVMsR0FBVDtvQkFBQSxpQkFLQztvQkFKRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRTt5QkFDeEIsU0FBUyxDQUNOLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQXBCLENBQW9CLEVBQzlCLFVBQUEsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQUMsQ0FBQztnQkFDdEQsQ0FBQztnQkFFRCxtQ0FBTyxHQUFQLFVBQVMsSUFBWTtvQkFBckIsaUJBTUM7b0JBTEcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUFBLE1BQU0sQ0FBQztvQkFBQSxDQUFDO29CQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7eUJBQzFCLFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUF0QixDQUFzQixFQUMvQixVQUFBLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQVEsS0FBSyxFQUE5QixDQUE4QixDQUFDLENBQUM7Z0JBQ3RELENBQUM7Z0JBM0JMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFdBQVcsRUFBRSw4Q0FBOEM7d0JBQzNELE1BQU0sRUFBRSxDQUFDLHFCQUFxQixDQUFDO3FCQUNsQyxDQUFDOztxQ0FBQTtnQkF3QkYsd0JBQUM7WUFBRCxDQXZCQSxBQXVCQyxJQUFBO1lBdkJELGlEQXVCQyxDQUFBIiwiZmlsZSI6Indpa2ktaHR0cC9oZXJvLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7SGVyb30gICAgICAgICAgICAgIGZyb20gJy4vaGVybyc7XHJcbmltcG9ydCB7SGVyb1NlcnZpY2V9ICAgICAgIGZyb20gJy4vaGVyby5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdoZXJvLWxpc3QnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvd2lraS1odHRwL2hlcm8tbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZXM6IFsnLmVycm9yIHtjb2xvcjpyZWQ7fSddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZXJvTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2hlcm9TZXJ2aWNlOiBIZXJvU2VydmljZSkge31cclxuXHJcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxuICAgIGhlcm9lczpIZXJvW107XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IHRoaXMuZ2V0SGVyb2VzKCk7IH1cclxuXHJcbiAgICBnZXRIZXJvZXMoKSB7XHJcbiAgICAgICAgdGhpcy5faGVyb1NlcnZpY2UuZ2V0SGVyb2VzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGhlcm9lcyA9PiB0aGlzLmhlcm9lcyA9IGhlcm9lcyxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+ICB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEhlcm8gKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghbmFtZSkge3JldHVybjt9XHJcbiAgICAgICAgdGhpcy5faGVyb1NlcnZpY2UuYWRkSGVybyhuYW1lKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgaGVybyAgPT4gdGhpcy5oZXJvZXMucHVzaChoZXJvKSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+ICB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
