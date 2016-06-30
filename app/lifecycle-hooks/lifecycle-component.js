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
var core_1 = require('@angular/core');
var after_content_component_1 = require('./after-content.component');
var after_view_component_1 = require('./after-view.component');
var counter_component_1 = require('./counter.component');
var do_check_component_1 = require('./do-check.component');
var on_changes_component_1 = require('./on-changes.component');
var peek_a_boo_parent_component_1 = require('./peek-a-boo-parent.component');
var spy_component_1 = require('./spy.component');
var LifecycleComponent = (function () {
    function LifecycleComponent() {
    }
    LifecycleComponent = __decorate([
        core_1.Component({
            templateUrl: 'templates/lifecycle-hooks/app.component.html',
            directives: [
                after_content_component_1.AfterContentParentComponent,
                after_view_component_1.AfterViewParentComponent,
                counter_component_1.CounterParentComponent,
                do_check_component_1.DoCheckParentComponent,
                on_changes_component_1.OnChangesParentComponent,
                peek_a_boo_parent_component_1.PeekABooParentComponent,
                spy_component_1.SpyParentComponent,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LifecycleComponent);
    return LifecycleComponent;
}());
exports.LifecycleComponent = LifecycleComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpZmVjeWNsZS1ob29rcy9saWZlY3ljbGUtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFFeEMsd0NBQTBDLDJCQUEyQixDQUFDLENBQUE7QUFDdEUscUNBQXVDLHdCQUF3QixDQUFDLENBQUE7QUFDaEUsa0NBQXFDLHFCQUFxQixDQUFDLENBQUE7QUFDM0QsbUNBQXFDLHNCQUFzQixDQUFDLENBQUE7QUFDNUQscUNBQXVDLHdCQUF3QixDQUFDLENBQUE7QUFDaEUsNENBQXNDLCtCQUErQixDQUFDLENBQUE7QUFDdEUsOEJBQWlDLGlCQUFpQixDQUFDLENBQUE7QUFlbkQ7SUFBQTtJQUNBLENBQUM7SUFkRDtRQUFDLGdCQUFTLENBQUM7WUFFUCxXQUFXLEVBQUUsOENBQThDO1lBQzNELFVBQVUsRUFBRTtnQkFDUixxREFBMkI7Z0JBQzNCLCtDQUF3QjtnQkFDeEIsMENBQXNCO2dCQUN0QiwyQ0FBc0I7Z0JBQ3RCLCtDQUF3QjtnQkFDeEIscURBQXVCO2dCQUN2QixrQ0FBa0I7YUFDckI7U0FDSixDQUFDOzswQkFBQTtJQUVGLHlCQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSwwQkFBa0IscUJBQzlCLENBQUEiLCJmaWxlIjoibGlmZWN5Y2xlLWhvb2tzL2xpZmVjeWNsZS1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0FmdGVyQ29udGVudFBhcmVudENvbXBvbmVudH0gZnJvbSAnLi9hZnRlci1jb250ZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QWZ0ZXJWaWV3UGFyZW50Q29tcG9uZW50fSBmcm9tICcuL2FmdGVyLXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb3VudGVyUGFyZW50Q29tcG9uZW50fSBmcm9tICcuL2NvdW50ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtEb0NoZWNrUGFyZW50Q29tcG9uZW50fSBmcm9tICcuL2RvLWNoZWNrLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7T25DaGFuZ2VzUGFyZW50Q29tcG9uZW50fSBmcm9tICcuL29uLWNoYW5nZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHtQZWVrQUJvb1BhcmVudENvbXBvbmVudH0gZnJvbSAnLi9wZWVrLWEtYm9vLXBhcmVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NweVBhcmVudENvbXBvbmVudH0gZnJvbSAnLi9zcHkuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9saWZlY3ljbGUtaG9va3MvYXBwLmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtcclxuICAgICAgICBBZnRlckNvbnRlbnRQYXJlbnRDb21wb25lbnQsXHJcbiAgICAgICAgQWZ0ZXJWaWV3UGFyZW50Q29tcG9uZW50LFxyXG4gICAgICAgIENvdW50ZXJQYXJlbnRDb21wb25lbnQsXHJcbiAgICAgICAgRG9DaGVja1BhcmVudENvbXBvbmVudCxcclxuICAgICAgICBPbkNoYW5nZXNQYXJlbnRDb21wb25lbnQsXHJcbiAgICAgICAgUGVla0FCb29QYXJlbnRDb21wb25lbnQsXHJcbiAgICAgICAgU3B5UGFyZW50Q29tcG9uZW50LFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlmZWN5Y2xlQ29tcG9uZW50IHtcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
