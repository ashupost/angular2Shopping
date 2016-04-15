System.register(['angular2/core', "../mock/employee"], function(exports_1, context_1) {
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
    var core_1, employee_1;
    var MyFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (employee_1_1) {
                employee_1 = employee_1_1;
            }],
        execute: function() {
            MyFormComponent = (function () {
                function MyFormComponent() {
                    this.powers = ['Really Smart', 'Super Flexible',
                        'Super Hot', 'Weather Changer'];
                    this.model = new employee_1.Employee(20, 'Drssssssssssss IQ', this.powers[0], 'Chuck Overstreet');
                    this.submitted = false;
                    // Reset the form with a new hero AND restore 'pristine' class state
                    // by toggling 'active' flag which causes the form
                    // to be removed/re-added in a tick via NgIf
                    // TODO: Workaround until NgForm has a reset method (#6822)
                    this.active = true;
                }
                MyFormComponent.prototype.onSubmit = function () { this.submitted = true; };
                Object.defineProperty(MyFormComponent.prototype, "diagnostic", {
                    // TODO: Remove this when we're done
                    get: function () { return JSON.stringify(this.model); },
                    enumerable: true,
                    configurable: true
                });
                MyFormComponent.prototype.newHero = function () {
                    var _this = this;
                    this.model = new employee_1.Employee(42, '', '');
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                //////// NOT SHOWN IN DOCS ////////
                // Reveal in html:
                //   Name via form.controls = {{showFormControls(heroForm)}}
                MyFormComponent.prototype.showFormControls = function (form) {
                    return form && form.controls['name'] &&
                        form.controls['name'].value; // Dr. IQ
                };
                MyFormComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'templates/my-form/my-form.html',
                        styleUrls: ['src/css/my-form.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyFormComponent);
                return MyFormComponent;
            }());
            exports_1("MyFormComponent", MyFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWZvcm0vbXktZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFBQTtvQkFDQyxXQUFNLEdBQUcsQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCO3dCQUN6QyxXQUFXLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztvQkFFakMsVUFBSyxHQUFHLElBQUksbUJBQVEsQ0FBQyxFQUFFLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO29CQUVsRixjQUFTLEdBQUcsS0FBSyxDQUFDO29CQU9sQixvRUFBb0U7b0JBQ3BFLGtEQUFrRDtvQkFDbEQsNENBQTRDO29CQUM1QywyREFBMkQ7b0JBQzNELFdBQU0sR0FBRyxJQUFJLENBQUM7Z0JBa0JmLENBQUM7Z0JBM0JBLGtDQUFRLEdBQVIsY0FBYSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBR3JDLHNCQUFJLHVDQUFVO29CQURkLG9DQUFvQzt5QkFDcEMsY0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O21CQUFBO2dCQVF2RCxpQ0FBTyxHQUFQO29CQUFBLGlCQUlDO29CQUhBLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxtQkFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNwQixVQUFVLENBQUMsY0FBSyxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxFQUFoQixDQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQUNELG1DQUFtQztnQkFFbkMsa0JBQWtCO2dCQUNsQiw0REFBNEQ7Z0JBQzVELDBDQUFnQixHQUFoQixVQUFpQixJQUFXO29CQUUzQixNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO3dCQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVM7Z0JBQ3hDLENBQUM7Z0JBdENGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1IsV0FBVyxFQUFFLGdDQUFnQzt3QkFDL0MsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7cUJBR2xDLENBQUM7O21DQUFBO2dCQW9DRixzQkFBQztZQUFELENBbkNBLEFBbUNDLElBQUE7WUFuQ0QsNkNBbUNDLENBQUEiLCJmaWxlIjoibXktZm9ybS9teS1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtOZ0Zvcm19ICAgIGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcbmltcG9ydCB7RW1wbG95ZWV9IGZyb20gXCIuLi9tb2NrL2VtcGxveWVlXCI7XHJcblxyXG5AQ29tcG9uZW50KHsgLy8gTk8gU0VMRUNUT1IgQkVDQVVTRSBJVCBJUyBBIFJPVVRFXHJcbiAgXHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9teS1mb3JtL215LWZvcm0uaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJ3NyYy9jc3MvbXktZm9ybS5jc3MnXVxyXG5cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeUZvcm1Db21wb25lbnQge1xyXG5cdHBvd2VycyA9IFsnUmVhbGx5IFNtYXJ0JywgJ1N1cGVyIEZsZXhpYmxlJyxcclxuXHRcdCdTdXBlciBIb3QnLCAnV2VhdGhlciBDaGFuZ2VyJ107XHJcblxyXG5cdG1vZGVsID0gbmV3IEVtcGxveWVlKDIwLCAnRHJzc3Nzc3Nzc3Nzc3MgSVEnLCB0aGlzLnBvd2Vyc1swXSwgJ0NodWNrIE92ZXJzdHJlZXQnKTtcclxuXHJcblx0c3VibWl0dGVkID0gZmFsc2U7XHJcblxyXG5cdG9uU3VibWl0KCkgeyB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7IH1cclxuXHJcblx0Ly8gVE9ETzogUmVtb3ZlIHRoaXMgd2hlbiB3ZSdyZSBkb25lXHJcblx0Z2V0IGRpYWdub3N0aWMoKSB7IHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLm1vZGVsKTsgfVxyXG5cclxuXHQvLyBSZXNldCB0aGUgZm9ybSB3aXRoIGEgbmV3IGhlcm8gQU5EIHJlc3RvcmUgJ3ByaXN0aW5lJyBjbGFzcyBzdGF0ZVxyXG5cdC8vIGJ5IHRvZ2dsaW5nICdhY3RpdmUnIGZsYWcgd2hpY2ggY2F1c2VzIHRoZSBmb3JtXHJcblx0Ly8gdG8gYmUgcmVtb3ZlZC9yZS1hZGRlZCBpbiBhIHRpY2sgdmlhIE5nSWZcclxuXHQvLyBUT0RPOiBXb3JrYXJvdW5kIHVudGlsIE5nRm9ybSBoYXMgYSByZXNldCBtZXRob2QgKCM2ODIyKVxyXG5cdGFjdGl2ZSA9IHRydWU7XHJcblxyXG5cdG5ld0hlcm8oKSB7XHJcblx0XHR0aGlzLm1vZGVsID0gbmV3IEVtcGxveWVlKDQyLCAnJywgJycpO1xyXG5cdFx0dGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdHNldFRpbWVvdXQoKCk9PiB0aGlzLmFjdGl2ZT10cnVlLCAwKTtcclxuXHR9XHJcblx0Ly8vLy8vLy8gTk9UIFNIT1dOIElOIERPQ1MgLy8vLy8vLy9cclxuXHJcblx0Ly8gUmV2ZWFsIGluIGh0bWw6XHJcblx0Ly8gICBOYW1lIHZpYSBmb3JtLmNvbnRyb2xzID0ge3tzaG93Rm9ybUNvbnRyb2xzKGhlcm9Gb3JtKX19XHJcblx0c2hvd0Zvcm1Db250cm9scyhmb3JtOk5nRm9ybSl7XHJcblxyXG5cdFx0cmV0dXJuIGZvcm0gJiYgZm9ybS5jb250cm9sc1snbmFtZSddICYmXHJcblx0XHRcdGZvcm0uY29udHJvbHNbJ25hbWUnXS52YWx1ZTsgLy8gRHIuIElRXHJcblx0fVxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
