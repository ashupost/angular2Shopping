"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var hero_service_1 = require('./hero.service');
var HeroListComponent = (function () {
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
exports.HeroListComponent = HeroListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpa2ktaHR0cC9oZXJvLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFFaEQsNkJBQWdDLGdCQUFnQixDQUFDLENBQUE7QUFPakQ7SUFFSSwyQkFBcUIsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBRyxDQUFDO0lBS2xELG9DQUFRLEdBQVIsY0FBYSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRWhDLHFDQUFTLEdBQVQ7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFO2FBQ3hCLFNBQVMsQ0FDTixVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFwQixDQUFvQixFQUM5QixVQUFBLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQVEsS0FBSyxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELG1DQUFPLEdBQVAsVUFBUyxJQUFZO1FBQXJCLGlCQU1DO1FBTEcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQUEsTUFBTSxDQUFDO1FBQUEsQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDMUIsU0FBUyxDQUNOLFVBQUEsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQXRCLENBQXNCLEVBQy9CLFVBQUEsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBM0JMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSw4Q0FBOEM7WUFDM0QsTUFBTSxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FDbEMsQ0FBQzs7eUJBQUE7SUF3QkYsd0JBQUM7QUFBRCxDQXZCQSxBQXVCQyxJQUFBO0FBdkJZLHlCQUFpQixvQkF1QjdCLENBQUEiLCJmaWxlIjoid2lraS1odHRwL2hlcm8tbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtIZXJvfSAgICAgICAgICAgICAgZnJvbSAnLi9oZXJvJztcclxuaW1wb3J0IHtIZXJvU2VydmljZX0gICAgICAgZnJvbSAnLi9oZXJvLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hlcm8tbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy93aWtpLWh0dHAvaGVyby1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlczogWycuZXJyb3Ige2NvbG9yOnJlZDt9J11cclxufSlcclxuZXhwb3J0IGNsYXNzIEhlcm9MaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaGVyb1NlcnZpY2U6IEhlcm9TZXJ2aWNlKSB7fVxyXG5cclxuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgaGVyb2VzOkhlcm9bXTtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgdGhpcy5nZXRIZXJvZXMoKTsgfVxyXG5cclxuICAgIGdldEhlcm9lcygpIHtcclxuICAgICAgICB0aGlzLl9oZXJvU2VydmljZS5nZXRIZXJvZXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgaGVyb2VzID0+IHRoaXMuaGVyb2VzID0gaGVyb2VzLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSGVybyAobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFuYW1lKSB7cmV0dXJuO31cclxuICAgICAgICB0aGlzLl9oZXJvU2VydmljZS5hZGRIZXJvKG5hbWUpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBoZXJvICA9PiB0aGlzLmhlcm9lcy5wdXNoKGhlcm8pLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
