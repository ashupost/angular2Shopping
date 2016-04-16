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
                    this.heroes = ['Mr. Nice', 'Narco', 'Bombasto'];
                    this.hero = this.heroes[0];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnVjdHVyYWwtZGlyZWN0aXZlcy9zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBQUE7b0JBQ0ksV0FBTSxHQUFHLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztvQkFDM0MsU0FBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3RCLGNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQ2pCLGNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQ2pCLFNBQUksR0FBYSxFQUFFLENBQUM7b0JBQ3BCLFdBQU0sR0FBRyxPQUFPLENBQUM7Z0JBQ3JCLENBQUM7Z0JBYkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsdUJBQXVCO3dCQUNqQyxXQUFXLEVBQUUsc0VBQXNFO3dCQUNuRixNQUFNLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzt3QkFDeEMsVUFBVSxFQUFFLENBQUMsa0NBQWUsRUFBRSw2Q0FBb0IsQ0FBQztxQkFDdEQsQ0FBQzs7aURBQUE7Z0JBUUYsb0NBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELHlFQU9DLENBQUEiLCJmaWxlIjoic3RydWN0dXJhbC1kaXJlY3RpdmVzL3N0cnVjdHVyYWwtZGlyZWN0aXZlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7VW5sZXNzRGlyZWN0aXZlfSBmcm9tIFwiLi91bmxlc3MuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7SGVhdnlMb2FkZXJDb21wb25lbnR9IGZyb20gXCIuL2hlYXZ5LWxvYWRlci5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvc3RydWN0dXJhbC1kaXJlY3RpdmVzL3N0cnVjdHVyYWwtZGlyZWN0aXZlcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZXM6IFsnYnV0dG9uIHsgbWluLXdpZHRoOiAxMDBweDsgfSddLFxyXG4gICAgZGlyZWN0aXZlczogW1VubGVzc0RpcmVjdGl2ZSwgSGVhdnlMb2FkZXJDb21wb25lbnRdICBcclxufSlcclxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyYWxEaXJlY3RpdmVzQ29tcG9uZW50IHtcclxuICAgIGhlcm9lcyA9IFsnTXIuIE5pY2UnLCAnTmFyY28nLCAnQm9tYmFzdG8nXTtcclxuICAgIGhlcm8gPSB0aGlzLmhlcm9lc1swXTtcclxuICAgIGNvbmRpdGlvbiA9IHRydWU7XHJcbiAgICBpc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgbG9nczogc3RyaW5nW10gPSBbXTtcclxuICAgIHN0YXR1cyA9ICdyZWFkeSc7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
