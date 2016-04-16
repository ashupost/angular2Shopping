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
    var BootstrapMainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BootstrapMainComponent = (function () {
                function BootstrapMainComponent() {
                }
                BootstrapMainComponent.prototype.ngAfterViewInit = function () {
                    console.log("ngAfterViewInit");
                };
                BootstrapMainComponent.prototype.ngOnInit = function () {
                    console.log("ngOnInit..");
                };
                BootstrapMainComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'templates/bootstrap/bootstrap-main.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], BootstrapMainComponent);
                return BootstrapMainComponent;
            }());
            exports_1("BootstrapMainComponent", BootstrapMainComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC9ib290c3RyYXAtbWFpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFBQTtnQkFZQSxDQUFDO2dCQVRBLGdEQUFlLEdBQWY7b0JBQ08sT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQUlELHlDQUFRLEdBQVI7b0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkFoQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFFUCxXQUFXLEVBQUUsbURBQW1EO3FCQUVuRSxDQUFDOzswQ0FBQTtnQkFhRiw2QkFBQztZQUFELENBWkEsQUFZQyxJQUFBO1lBWkQsMkRBWUMsQ0FBQSIsImZpbGUiOiJib290c3RyYXAvYm9vdHN0cmFwLW1haW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkLCBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRDaGVja2VkLCBBZnRlckNvbnRlbnRJbml0LFxyXG4gICAgT25DaGFuZ2VzLCBEb0NoZWNrLCBPbkRlc3Ryb3lcclxufSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cclxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2Jvb3RzdHJhcC9ib290c3RyYXAtbWFpbi5jb21wb25lbnQuaHRtbCdcclxuICAgIFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzICAgT25Jbml0LCAgICBBZnRlclZpZXdJbml0XHJcbiAgICAge1xyXG5cclxuIG5nQWZ0ZXJWaWV3SW5pdCgpOmFueSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuZ0FmdGVyVmlld0luaXRcIik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBuZ09uSW5pdCgpOmFueSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuZ09uSW5pdC4uXCIpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
