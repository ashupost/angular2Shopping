System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1, core_2;
    var UnlessDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            UnlessDirective = (function () {
                function UnlessDirective(_templateRef, _viewContainer) {
                    this._templateRef = _templateRef;
                    this._viewContainer = _viewContainer;
                }
                Object.defineProperty(UnlessDirective.prototype, "myUnless", {
                    set: function (condition) {
                        console.log(this._templateRef);
                        if (!condition) {
                            this._viewContainer.createEmbeddedView(this._templateRef);
                        }
                        else {
                            this._viewContainer.clear();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean), 
                    __metadata('design:paramtypes', [Boolean])
                ], UnlessDirective.prototype, "myUnless", null);
                UnlessDirective = __decorate([
                    core_1.Directive({ selector: '[myUnless]' }), 
                    __metadata('design:paramtypes', [core_2.TemplateRef, core_2.ViewContainerRef])
                ], UnlessDirective);
                return UnlessDirective;
            }());
            exports_1("UnlessDirective", UnlessDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnVjdHVyYWwtZGlyZWN0aXZlcy91bmxlc3MuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUNJLHlCQUFvQixZQUF5QixFQUFVLGNBQWdDO29CQUFuRSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7Z0JBQUksQ0FBQztnQkFFbkYsc0JBQUkscUNBQVE7eUJBQVosVUFBYSxTQUFrQjt3QkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQy9CLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs0QkFDYixJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDOUQsQ0FBQzt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDSixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNoQyxDQUFDO29CQUNMLENBQUM7OzttQkFBQTtnQkFQRDtvQkFBQyxZQUFLLEVBQUU7OzsrREFBQTtnQkFKWjtvQkFBQyxnQkFBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxDQUFDOzttQ0FBQTtnQkFZdEMsc0JBQUM7WUFBRCxDQVhBLEFBV0MsSUFBQTtZQVhELDZDQVdDLENBQUEiLCJmaWxlIjoic3RydWN0dXJhbC1kaXJlY3RpdmVzL3VubGVzcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1RlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW215VW5sZXNzXScgfSlcclxuZXhwb3J0IGNsYXNzIFVubGVzc0RpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWYsIHByaXZhdGUgX3ZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHsgfVxyXG5cclxuICAgIEBJbnB1dCgpIHNldCBteVVubGVzcyhjb25kaXRpb246IGJvb2xlYW4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl90ZW1wbGF0ZVJlZik7XHJcbiAgICAgICAgaWYgKCFjb25kaXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5fdGVtcGxhdGVSZWYpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXIuY2xlYXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
