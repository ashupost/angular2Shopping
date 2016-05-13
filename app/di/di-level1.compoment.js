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
var di_data_service_1 = require("./di-data.service");
var DILevel1Component = (function () {
    function DILevel1Component(_dataService) {
        this._dataService = _dataService;
    }
    DILevel1Component.prototype.getRandomData = function () {
        this.data = this._dataService.getRandomData();
    };
    DILevel1Component.prototype.pushData = function (inputData) {
        this._dataService.insertData(inputData);
    };
    DILevel1Component = __decorate([
        core_1.Component({
            selector: 'di-level1-component',
            template: "\n        <div>\n                <h1>Component 1</h1>\n                <button (click)=\"getRandomData()\">Get Randaom Data</button>\n                <p>Data selected is: {{data}}</p>\n                <input type=\"text\" #inputData> \n                <button (click)=\"pushData(inputData.value)\" >Add</button>\n\t\t</div>\n    "
        }), 
        __metadata('design:paramtypes', [di_data_service_1.DataService])
    ], DILevel1Component);
    return DILevel1Component;
}());
exports.DILevel1Component = DILevel1Component;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpL2RpLWxldmVsMS5jb21wb21lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCxnQ0FBMEIsbUJBQW1CLENBQUMsQ0FBQTtBQWdCOUM7SUFFSSwyQkFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7SUFFN0MsQ0FBQztJQUNELHlDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUNELG9DQUFRLEdBQVIsVUFBUyxTQUFpQjtRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBeEJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsUUFBUSxFQUFFLDJVQVFUO1NBR0osQ0FBQzs7eUJBQUE7SUFZRix3QkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFkseUJBQWlCLG9CQVc3QixDQUFBIiwiZmlsZSI6ImRpL2RpLWxldmVsMS5jb21wb21lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtEYXRhU2VydmljZX0gZnJvbSBcIi4vZGktZGF0YS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHsgLy8gTk8gU0VMRUNUT1IgQkVDQVVTRSBJVCBJUyBBIFJPVVRFXHJcbiAgICBzZWxlY3RvcjogJ2RpLWxldmVsMS1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPkNvbXBvbmVudCAxPC9oMT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImdldFJhbmRvbURhdGEoKVwiPkdldCBSYW5kYW9tIERhdGE8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxwPkRhdGEgc2VsZWN0ZWQgaXM6IHt7ZGF0YX19PC9wPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0RGF0YT4gXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJwdXNoRGF0YShpbnB1dERhdGEudmFsdWUpXCIgPkFkZDwvYnV0dG9uPlxyXG5cdFx0PC9kaXY+XHJcbiAgICBgXHJcblxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIERJTGV2ZWwxQ29tcG9uZW50IHtcclxuICAgZGF0YTogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKXtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRSYW5kb21EYXRhKCl7XHJcbiAgICAgICAgdGhpcy5kYXRhPXRoaXMuX2RhdGFTZXJ2aWNlLmdldFJhbmRvbURhdGEoKTtcclxuICAgIH1cclxuICAgIHB1c2hEYXRhKGlucHV0RGF0YTogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLl9kYXRhU2VydmljZS5pbnNlcnREYXRhKGlucHV0RGF0YSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
