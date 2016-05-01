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
                function IndexComponent(_elRef) {
                    this._elRef = _elRef;
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
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], IndexComponent);
                return IndexComponent;
            }());
            exports_1("IndexComponent", IndexComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4L2luZGV4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUVDLHdCQUFvQixNQUFrQjtvQkFBbEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtnQkFFbkMsQ0FBQztnQkFFSixpQ0FBUSxHQUFSO29CQUVHLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFFdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUVqQyx3Q0FBd0M7Z0JBRzNDLENBQUM7Z0JBckJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFdBQVcsRUFBRSxzQ0FBc0M7d0JBQ25ELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUVsQyxDQUFDOztrQ0FBQTtnQkFtQkYscUJBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELDJDQWtCQyxDQUFBIiwiZmlsZSI6ImluZGV4L2luZGV4LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbmRlY2xhcmUgdmFyIEFkbWluTFRFOiBhbnk7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1pbmRleCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9pbmRleC9pbmRleC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5kZXhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gY29uc3RydWN0b3IocHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYpe1xyXG5cclxuICAgIH1cclxuXHJcbiBuZ09uSW5pdCgpOiBhbnl7XHJcblxyXG4gICAgY29uc29sZS5sb2coalF1ZXJ5KCkpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCQuQWRtaW5MVEUub3B0aW9ucyk7XHJcblxyXG4gICAvLyBjb25zb2xlLmxvZygkLkFkbWluTFRFLmxheW91dC5maXgoKSk7XHJcblxyXG4gICAgICAgXHJcbn1cclxuXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
