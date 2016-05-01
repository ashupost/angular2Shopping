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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWZvcm0vbXktZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFBQTtvQkFDQyxXQUFNLEdBQUcsQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCO3dCQUN6QyxXQUFXLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztvQkFFakMsVUFBSyxHQUFHLElBQUksbUJBQVEsQ0FBQyxFQUFFLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO29CQUVsRixjQUFTLEdBQUcsS0FBSyxDQUFDO29CQU9sQixvRUFBb0U7b0JBQ3BFLGtEQUFrRDtvQkFDbEQsNENBQTRDO29CQUM1QywyREFBMkQ7b0JBQzNELFdBQU0sR0FBRyxJQUFJLENBQUM7Z0JBa0JmLENBQUM7Z0JBM0JBLGtDQUFRLEdBQVIsY0FBYSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBR3JDLHNCQUFJLHVDQUFVO29CQURkLG9DQUFvQzt5QkFDcEMsY0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O21CQUFBO2dCQVF2RCxpQ0FBTyxHQUFQO29CQUFBLGlCQUlDO29CQUhBLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxtQkFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNwQixVQUFVLENBQUMsY0FBSyxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxFQUFoQixDQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQUNELG1DQUFtQztnQkFFbkMsa0JBQWtCO2dCQUNsQiw0REFBNEQ7Z0JBQzVELDBDQUFnQixHQUFoQixVQUFpQixJQUFXO29CQUUzQixNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO3dCQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVM7Z0JBQ3hDLENBQUM7Z0JBcENGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1IsV0FBVyxFQUFFLGdDQUFnQzt3QkFDL0MsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7cUJBQ2xDLENBQUM7O21DQUFBO2dCQW9DRixzQkFBQztZQUFELENBbkNBLEFBbUNDLElBQUE7WUFuQ0QsNkNBbUNDLENBQUEiLCJmaWxlIjoibXktZm9ybS9teS1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtOZ0Zvcm19ICAgIGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcbmltcG9ydCB7RW1wbG95ZWV9IGZyb20gXCIuLi9tb2NrL2VtcGxveWVlXCI7XHJcblxyXG5AQ29tcG9uZW50KHsgLy8gTk8gU0VMRUNUT1IgQkVDQVVTRSBJVCBJUyBBIFJPVVRFXHJcbiAgXHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9teS1mb3JtL215LWZvcm0uaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJ3NyYy9jc3MvbXktZm9ybS5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXlGb3JtQ29tcG9uZW50IHtcclxuXHRwb3dlcnMgPSBbJ1JlYWxseSBTbWFydCcsICdTdXBlciBGbGV4aWJsZScsXHJcblx0XHQnU3VwZXIgSG90JywgJ1dlYXRoZXIgQ2hhbmdlciddO1xyXG5cclxuXHRtb2RlbCA9IG5ldyBFbXBsb3llZSgyMCwgJ0Ryc3Nzc3Nzc3Nzc3NzIElRJywgdGhpcy5wb3dlcnNbMF0sICdDaHVjayBPdmVyc3RyZWV0Jyk7XHJcblxyXG5cdHN1Ym1pdHRlZCA9IGZhbHNlO1xyXG5cclxuXHRvblN1Ym1pdCgpIHsgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlOyB9XHJcblxyXG5cdC8vIFRPRE86IFJlbW92ZSB0aGlzIHdoZW4gd2UncmUgZG9uZVxyXG5cdGdldCBkaWFnbm9zdGljKCkgeyByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5tb2RlbCk7IH1cclxuXHJcblx0Ly8gUmVzZXQgdGhlIGZvcm0gd2l0aCBhIG5ldyBoZXJvIEFORCByZXN0b3JlICdwcmlzdGluZScgY2xhc3Mgc3RhdGVcclxuXHQvLyBieSB0b2dnbGluZyAnYWN0aXZlJyBmbGFnIHdoaWNoIGNhdXNlcyB0aGUgZm9ybVxyXG5cdC8vIHRvIGJlIHJlbW92ZWQvcmUtYWRkZWQgaW4gYSB0aWNrIHZpYSBOZ0lmXHJcblx0Ly8gVE9ETzogV29ya2Fyb3VuZCB1bnRpbCBOZ0Zvcm0gaGFzIGEgcmVzZXQgbWV0aG9kICgjNjgyMilcclxuXHRhY3RpdmUgPSB0cnVlO1xyXG5cclxuXHRuZXdIZXJvKCkge1xyXG5cdFx0dGhpcy5tb2RlbCA9IG5ldyBFbXBsb3llZSg0MiwgJycsICcnKTtcclxuXHRcdHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRzZXRUaW1lb3V0KCgpPT4gdGhpcy5hY3RpdmU9dHJ1ZSwgMCk7XHJcblx0fVxyXG5cdC8vLy8vLy8vIE5PVCBTSE9XTiBJTiBET0NTIC8vLy8vLy8vXHJcblxyXG5cdC8vIFJldmVhbCBpbiBodG1sOlxyXG5cdC8vICAgTmFtZSB2aWEgZm9ybS5jb250cm9scyA9IHt7c2hvd0Zvcm1Db250cm9scyhoZXJvRm9ybSl9fVxyXG5cdHNob3dGb3JtQ29udHJvbHMoZm9ybTpOZ0Zvcm0pe1xyXG5cclxuXHRcdHJldHVybiBmb3JtICYmIGZvcm0uY29udHJvbHNbJ25hbWUnXSAmJlxyXG5cdFx0XHRmb3JtLmNvbnRyb2xzWyduYW1lJ10udmFsdWU7IC8vIERyLiBJUVxyXG5cdH1cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
