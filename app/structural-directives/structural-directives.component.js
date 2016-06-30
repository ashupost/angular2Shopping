System.register(['angular2/core', "./unless.directive", "./heavy-loader.component"], function(exports_1, context_1) {
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
    var core_1, unless_directive_1, heavy_loader_component_1;
    var StructuralDirectivesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (unless_directive_1_1) {
                unless_directive_1 = unless_directive_1_1;
            },
            function (heavy_loader_component_1_1) {
                heavy_loader_component_1 = heavy_loader_component_1_1;
            }],
        execute: function() {
            StructuralDirectivesComponent = (function () {
                function StructuralDirectivesComponent() {
                    this.heroes = ['AAAAAAAAAAAA', 'BBBBBBB', 'CCCCCCC'];
                    this.hero = this.heroes[2];
                    this.condition = true;
                    this.isVisible = true;
                    this.logs = [];
                    this.status = 'ready';
                }
                StructuralDirectivesComponent = __decorate([
                    core_1.Component({
                        selector: 'structural-directives',
                        templateUrl: 'templates/structural-directives/structural-directives.component.html',
                        styles: ['button { min-width: 100px; }'],
                        directives: [unless_directive_1.UnlessDirective, heavy_loader_component_1.HeavyLoaderComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], StructuralDirectivesComponent);
                return StructuralDirectivesComponent;
            }());
            exports_1("StructuralDirectivesComponent", StructuralDirectivesComponent);
        }
    }
});
//# sourceMappingURL=structural-directives.component.js.map