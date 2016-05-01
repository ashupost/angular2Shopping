System.register(['angular2/core', './after-content.component', './after-view.component', './counter.component', './do-check.component', './on-changes.component', './peek-a-boo-parent.component', './spy.component'], function(exports_1, context_1) {
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
    var core_1, after_content_component_1, after_view_component_1, counter_component_1, do_check_component_1, on_changes_component_1, peek_a_boo_parent_component_1, spy_component_1;
    var LifecycleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (after_content_component_1_1) {
                after_content_component_1 = after_content_component_1_1;
            },
            function (after_view_component_1_1) {
                after_view_component_1 = after_view_component_1_1;
            },
            function (counter_component_1_1) {
                counter_component_1 = counter_component_1_1;
            },
            function (do_check_component_1_1) {
                do_check_component_1 = do_check_component_1_1;
            },
            function (on_changes_component_1_1) {
                on_changes_component_1 = on_changes_component_1_1;
            },
            function (peek_a_boo_parent_component_1_1) {
                peek_a_boo_parent_component_1 = peek_a_boo_parent_component_1_1;
            },
            function (spy_component_1_1) {
                spy_component_1 = spy_component_1_1;
            }],
        execute: function() {
            LifecycleComponent = (function () {
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
            exports_1("LifecycleComponent", LifecycleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpZmVjeWNsZS1ob29rcy9saWZlY3ljbGUtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBdUJBO2dCQUFBO2dCQUNBLENBQUM7Z0JBZEQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFFUCxXQUFXLEVBQUUsOENBQThDO3dCQUMzRCxVQUFVLEVBQUU7NEJBQ1IscURBQTJCOzRCQUMzQiwrQ0FBd0I7NEJBQ3hCLDBDQUFzQjs0QkFDdEIsMkNBQXNCOzRCQUN0QiwrQ0FBd0I7NEJBQ3hCLHFEQUF1Qjs0QkFDdkIsa0NBQWtCO3lCQUNyQjtxQkFDSixDQUFDOztzQ0FBQTtnQkFFRix5QkFBQztZQUFELENBREEsQUFDQyxJQUFBO1lBREQsbURBQ0MsQ0FBQSIsImZpbGUiOiJsaWZlY3ljbGUtaG9va3MvbGlmZWN5Y2xlLWNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbmltcG9ydCB7QWZ0ZXJDb250ZW50UGFyZW50Q29tcG9uZW50fSBmcm9tICcuL2FmdGVyLWNvbnRlbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHtBZnRlclZpZXdQYXJlbnRDb21wb25lbnR9IGZyb20gJy4vYWZ0ZXItdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NvdW50ZXJQYXJlbnRDb21wb25lbnR9IGZyb20gJy4vY291bnRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0RvQ2hlY2tQYXJlbnRDb21wb25lbnR9IGZyb20gJy4vZG8tY2hlY2suY29tcG9uZW50JztcclxuaW1wb3J0IHtPbkNoYW5nZXNQYXJlbnRDb21wb25lbnR9IGZyb20gJy4vb24tY2hhbmdlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1BlZWtBQm9vUGFyZW50Q29tcG9uZW50fSBmcm9tICcuL3BlZWstYS1ib28tcGFyZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U3B5UGFyZW50Q29tcG9uZW50fSBmcm9tICcuL3NweS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBcclxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2xpZmVjeWNsZS1ob29rcy9hcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1xyXG4gICAgICAgIEFmdGVyQ29udGVudFBhcmVudENvbXBvbmVudCxcclxuICAgICAgICBBZnRlclZpZXdQYXJlbnRDb21wb25lbnQsXHJcbiAgICAgICAgQ291bnRlclBhcmVudENvbXBvbmVudCxcclxuICAgICAgICBEb0NoZWNrUGFyZW50Q29tcG9uZW50LFxyXG4gICAgICAgIE9uQ2hhbmdlc1BhcmVudENvbXBvbmVudCxcclxuICAgICAgICBQZWVrQUJvb1BhcmVudENvbXBvbmVudCxcclxuICAgICAgICBTcHlQYXJlbnRDb21wb25lbnQsXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWZlY3ljbGVDb21wb25lbnQge1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
