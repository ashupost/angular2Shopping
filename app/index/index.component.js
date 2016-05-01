System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var IndexComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            IndexComponent = (function () {
                function IndexComponent() {
                }
                IndexComponent.prototype.ngOnInit = function () {
                    console.log(jQuery());
                    console.log($.AdminLTE.options);
                    // console.log($.AdminLTE.layout.fix());
                };
                IndexComponent = __decorate([
                    core_1.Component({
                        selector: 'my-index',
                        templateUrl: 'templates/index/index.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], IndexComponent);
                return IndexComponent;
            }());
            exports_1("IndexComponent", IndexComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4L2luZGV4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUFBO2dCQWNBLENBQUM7Z0JBWkEsaUNBQVEsR0FBUjtvQkFFRyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBRXRCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFFakMsd0NBQXdDO2dCQUczQyxDQUFDO2dCQWpCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixXQUFXLEVBQUUsc0NBQXNDO3dCQUNuRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztxQkFFbEMsQ0FBQzs7a0NBQUE7Z0JBZUYscUJBQUM7WUFBRCxDQWRBLEFBY0MsSUFBQTtZQWRELDJDQWNDLENBQUEiLCJmaWxlIjoiaW5kZXgvaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuZGVjbGFyZSB2YXIgQWRtaW5MVEU6IGFueTtcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWluZGV4JyxcclxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2luZGV4L2luZGV4LmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbmRleENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiBuZ09uSW5pdCgpOiBhbnl7XHJcblxyXG4gICAgY29uc29sZS5sb2coalF1ZXJ5KCkpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCQuQWRtaW5MVEUub3B0aW9ucyk7XHJcblxyXG4gICAvLyBjb25zb2xlLmxvZygkLkFkbWluTFRFLmxheW91dC5maXgoKSk7XHJcblxyXG4gICAgICAgXHJcbn1cclxuXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
