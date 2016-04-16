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
    var core_1;
    var BootstrapSecondComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BootstrapSecondComponent = (function () {
                function BootstrapSecondComponent() {
                }
                BootstrapSecondComponent.prototype.ngAfterViewInit = function () {
                    console.log("ngAfterViewInit");
                };
                BootstrapSecondComponent.prototype.ngOnInit = function () {
                    console.log("ngOnInit..");
                };
                BootstrapSecondComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'templates/bootstrap/bootstrap-second.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], BootstrapSecondComponent);
                return BootstrapSecondComponent;
            }());
            exports_1("BootstrapSecondComponent", BootstrapSecondComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC9ib290c3RyYXAtc2Vjb25kLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUFBO2dCQVlBLENBQUM7Z0JBVEEsa0RBQWUsR0FBZjtvQkFDTyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBSUQsMkNBQVEsR0FBUjtvQkFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUM5QixDQUFDO2dCQWhCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUVQLFdBQVcsRUFBRSxxREFBcUQ7cUJBRXJFLENBQUM7OzRDQUFBO2dCQWFGLCtCQUFDO1lBQUQsQ0FaQSxBQVlDLElBQUE7WUFaRCwrREFZQyxDQUFBIiwiZmlsZSI6ImJvb3RzdHJhcC9ib290c3RyYXAtc2Vjb25kLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJDb250ZW50SW5pdCxcclxuICAgIE9uQ2hhbmdlcywgRG9DaGVjaywgT25EZXN0cm95XHJcbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9ib290c3RyYXAvYm9vdHN0cmFwLXNlY29uZC5jb21wb25lbnQuaHRtbCdcclxuICAgIFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwU2Vjb25kQ29tcG9uZW50IGltcGxlbWVudHMgICBPbkluaXQsICAgIEFmdGVyVmlld0luaXRcclxuICAgICB7XHJcblxyXG4gbmdBZnRlclZpZXdJbml0KCk6YW55IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5nQWZ0ZXJWaWV3SW5pdFwiKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIG5nT25Jbml0KCk6YW55IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5nT25Jbml0Li5cIik7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
