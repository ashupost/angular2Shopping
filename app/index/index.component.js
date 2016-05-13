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
var router_1 = require('angular2/router');
var IndexComponent = (function () {
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
exports.IndexComponent = IndexComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4L2luZGV4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW9DLGVBQWUsQ0FBQyxDQUFBO0FBR3BELHVCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBT2xEO0lBRUMsd0JBQW9CLE1BQWtCO1FBQWxCLFdBQU0sR0FBTixNQUFNLENBQVk7SUFFbkMsQ0FBQztJQUVKLGlDQUFRLEdBQVI7UUFFRyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFFdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWpDLHdDQUF3QztJQUczQyxDQUFDO0lBckJEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxzQ0FBc0M7WUFDbkQsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7U0FFbEMsQ0FBQzs7c0JBQUE7SUFtQkYscUJBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBbEJZLHNCQUFjLGlCQWtCMUIsQ0FBQSIsImZpbGUiOiJpbmRleC9pbmRleC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5kZWNsYXJlIHZhciBBZG1pbkxURTogYW55O1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktaW5kZXgnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaW5kZXgvaW5kZXguY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIEluZGV4Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmKXtcclxuXHJcbiAgICB9XHJcblxyXG4gbmdPbkluaXQoKTogYW55e1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGpRdWVyeSgpKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygkLkFkbWluTFRFLm9wdGlvbnMpO1xyXG5cclxuICAgLy8gY29uc29sZS5sb2coJC5BZG1pbkxURS5sYXlvdXQuZml4KCkpO1xyXG5cclxuICAgICAgIFxyXG59XHJcblxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
