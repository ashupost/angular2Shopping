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
var employee_1 = require("../mock/employee");
var MyFormComponent = (function () {
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
exports.MyFormComponent = MyFormComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWZvcm0vbXktZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUV4Qyx5QkFBdUIsa0JBQWtCLENBQUMsQ0FBQTtBQU0xQztJQUFBO1FBQ0MsV0FBTSxHQUFHLENBQUMsY0FBYyxFQUFFLGdCQUFnQjtZQUN6QyxXQUFXLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUVqQyxVQUFLLEdBQUcsSUFBSSxtQkFBUSxDQUFDLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFbEYsY0FBUyxHQUFHLEtBQUssQ0FBQztRQU9sQixvRUFBb0U7UUFDcEUsa0RBQWtEO1FBQ2xELDRDQUE0QztRQUM1QywyREFBMkQ7UUFDM0QsV0FBTSxHQUFHLElBQUksQ0FBQztJQWtCZixDQUFDO0lBM0JBLGtDQUFRLEdBQVIsY0FBYSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFHckMsc0JBQUksdUNBQVU7UUFEZCxvQ0FBb0M7YUFDcEMsY0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFRdkQsaUNBQU8sR0FBUDtRQUFBLGlCQUlDO1FBSEEsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLG1CQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixVQUFVLENBQUMsY0FBSyxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxFQUFoQixDQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxtQ0FBbUM7SUFFbkMsa0JBQWtCO0lBQ2xCLDREQUE0RDtJQUM1RCwwQ0FBZ0IsR0FBaEIsVUFBaUIsSUFBVztRQUUzQixNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUztJQUN4QyxDQUFDO0lBcENGO1FBQUMsZ0JBQVMsQ0FBQztZQUNSLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDL0MsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FDbEMsQ0FBQzs7dUJBQUE7SUFvQ0Ysc0JBQUM7QUFBRCxDQW5DQSxBQW1DQyxJQUFBO0FBbkNZLHVCQUFlLGtCQW1DM0IsQ0FBQSIsImZpbGUiOiJteS1mb3JtL215LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge05nRm9ybX0gICAgZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuaW1wb3J0IHtFbXBsb3llZX0gZnJvbSBcIi4uL21vY2svZW1wbG95ZWVcIjtcclxuXHJcbkBDb21wb25lbnQoeyAvLyBOTyBTRUxFQ1RPUiBCRUNBVVNFIElUIElTIEEgUk9VVEVcclxuICBcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL215LWZvcm0vbXktZm9ybS5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnc3JjL2Nzcy9teS1mb3JtLmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeUZvcm1Db21wb25lbnQge1xyXG5cdHBvd2VycyA9IFsnUmVhbGx5IFNtYXJ0JywgJ1N1cGVyIEZsZXhpYmxlJyxcclxuXHRcdCdTdXBlciBIb3QnLCAnV2VhdGhlciBDaGFuZ2VyJ107XHJcblxyXG5cdG1vZGVsID0gbmV3IEVtcGxveWVlKDIwLCAnRHJzc3Nzc3Nzc3Nzc3MgSVEnLCB0aGlzLnBvd2Vyc1swXSwgJ0NodWNrIE92ZXJzdHJlZXQnKTtcclxuXHJcblx0c3VibWl0dGVkID0gZmFsc2U7XHJcblxyXG5cdG9uU3VibWl0KCkgeyB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7IH1cclxuXHJcblx0Ly8gVE9ETzogUmVtb3ZlIHRoaXMgd2hlbiB3ZSdyZSBkb25lXHJcblx0Z2V0IGRpYWdub3N0aWMoKSB7IHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLm1vZGVsKTsgfVxyXG5cclxuXHQvLyBSZXNldCB0aGUgZm9ybSB3aXRoIGEgbmV3IGhlcm8gQU5EIHJlc3RvcmUgJ3ByaXN0aW5lJyBjbGFzcyBzdGF0ZVxyXG5cdC8vIGJ5IHRvZ2dsaW5nICdhY3RpdmUnIGZsYWcgd2hpY2ggY2F1c2VzIHRoZSBmb3JtXHJcblx0Ly8gdG8gYmUgcmVtb3ZlZC9yZS1hZGRlZCBpbiBhIHRpY2sgdmlhIE5nSWZcclxuXHQvLyBUT0RPOiBXb3JrYXJvdW5kIHVudGlsIE5nRm9ybSBoYXMgYSByZXNldCBtZXRob2QgKCM2ODIyKVxyXG5cdGFjdGl2ZSA9IHRydWU7XHJcblxyXG5cdG5ld0hlcm8oKSB7XHJcblx0XHR0aGlzLm1vZGVsID0gbmV3IEVtcGxveWVlKDQyLCAnJywgJycpO1xyXG5cdFx0dGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdHNldFRpbWVvdXQoKCk9PiB0aGlzLmFjdGl2ZT10cnVlLCAwKTtcclxuXHR9XHJcblx0Ly8vLy8vLy8gTk9UIFNIT1dOIElOIERPQ1MgLy8vLy8vLy9cclxuXHJcblx0Ly8gUmV2ZWFsIGluIGh0bWw6XHJcblx0Ly8gICBOYW1lIHZpYSBmb3JtLmNvbnRyb2xzID0ge3tzaG93Rm9ybUNvbnRyb2xzKGhlcm9Gb3JtKX19XHJcblx0c2hvd0Zvcm1Db250cm9scyhmb3JtOk5nRm9ybSl7XHJcblxyXG5cdFx0cmV0dXJuIGZvcm0gJiYgZm9ybS5jb250cm9sc1snbmFtZSddICYmXHJcblx0XHRcdGZvcm0uY29udHJvbHNbJ25hbWUnXS52YWx1ZTsgLy8gRHIuIElRXHJcblx0fVxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
