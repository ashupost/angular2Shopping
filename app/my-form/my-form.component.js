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
//# sourceMappingURL=my-form.component.js.map