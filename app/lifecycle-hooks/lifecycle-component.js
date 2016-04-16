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
//# sourceMappingURL=lifecycle-component.js.map