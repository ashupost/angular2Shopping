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
var unless_directive_1 = require("./unless.directive");
var heavy_loader_component_1 = require("./heavy-loader.component");
var StructuralDirectivesComponent = (function () {
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
exports.StructuralDirectivesComponent = StructuralDirectivesComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnVjdHVyYWwtZGlyZWN0aXZlcy9zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUMsZUFBZSxDQUFDLENBQUE7QUFDdkQsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsdUNBQW1DLDBCQUEwQixDQUFDLENBQUE7QUFROUQ7SUFBQTtRQUNJLFdBQU0sR0FBRyxDQUFDLGNBQWMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDaEQsU0FBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLFNBQUksR0FBYSxFQUFFLENBQUM7UUFDcEIsV0FBTSxHQUFHLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBYkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxXQUFXLEVBQUUsc0VBQXNFO1lBQ25GLE1BQU0sRUFBRSxDQUFDLDhCQUE4QixDQUFDO1lBQ3hDLFVBQVUsRUFBRSxDQUFDLGtDQUFlLEVBQUUsNkNBQW9CLENBQUM7U0FDdEQsQ0FBQzs7cUNBQUE7SUFRRixvQ0FBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFkscUNBQTZCLGdDQU96QyxDQUFBIiwiZmlsZSI6InN0cnVjdHVyYWwtZGlyZWN0aXZlcy9zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1VubGVzc0RpcmVjdGl2ZX0gZnJvbSBcIi4vdW5sZXNzLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQge0hlYXZ5TG9hZGVyQ29tcG9uZW50fSBmcm9tIFwiLi9oZWF2eS1sb2FkZXIuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3RydWN0dXJhbC1kaXJlY3RpdmVzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3N0cnVjdHVyYWwtZGlyZWN0aXZlcy9zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVzOiBbJ2J1dHRvbiB7IG1pbi13aWR0aDogMTAwcHg7IH0nXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtVbmxlc3NEaXJlY3RpdmUsIEhlYXZ5TG9hZGVyQ29tcG9uZW50XSAgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmFsRGlyZWN0aXZlc0NvbXBvbmVudCB7XHJcbiAgICBoZXJvZXMgPSBbJ0FBQUFBQUFBQUFBQScsICdCQkJCQkJCJywgJ0NDQ0NDQ0MnXTtcclxuICAgIGhlcm8gPSB0aGlzLmhlcm9lc1syXTtcclxuICAgIGNvbmRpdGlvbiA9IHRydWU7XHJcbiAgICBpc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgbG9nczogc3RyaW5nW10gPSBbXTtcclxuICAgIHN0YXR1cyA9ICdyZWFkeSc7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
