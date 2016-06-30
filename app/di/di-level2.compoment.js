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
var core_1 = require('@angular/core');
var di_data_service_1 = require("./di-data.service");
var DILevel2Component = (function () {
    function DILevel2Component(_dataService) {
        this._dataService = _dataService;
    }
    DILevel2Component.prototype.getRandomData = function () {
        this.data = this._dataService.getRandomData();
    };
    DILevel2Component.prototype.pushData = function (inputData) {
        this._dataService.insertData(inputData);
    };
    DILevel2Component = __decorate([
        core_1.Component({
            selector: 'di-level2-component',
            template: "\n        <div>\n                <h1>Component 2</h1>\n                <button (click)=\"getRandomData()\">Get Randaom Data</button>\n                <p>Data selected is: {{data}}</p>\n                <input type=\"text\" #inputData> \n                <button (click)=\"pushData(inputData.value)\" >Add</button>\n\t\t</div>\n    "
        }), 
        __metadata('design:paramtypes', [di_data_service_1.DataService])
    ], DILevel2Component);
    return DILevel2Component;
}());
exports.DILevel2Component = DILevel2Component;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpL2RpLWxldmVsMi5jb21wb21lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCxnQ0FBMEIsbUJBQW1CLENBQUMsQ0FBQTtBQWE5QztJQUVJLDJCQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUU3QyxDQUFDO0lBQ0QseUNBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBQ0Qsb0NBQVEsR0FBUixVQUFTLFNBQWlCO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUF0Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixRQUFRLEVBQUUsMlVBUVQ7U0FDSixDQUFDOzt5QkFBQTtJQVlGLHdCQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSx5QkFBaUIsb0JBVzdCLENBQUEiLCJmaWxlIjoiZGkvZGktbGV2ZWwyLmNvbXBvbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tIFwiLi9kaS1kYXRhLnNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2RpLWxldmVsMi1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPkNvbXBvbmVudCAyPC9oMT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImdldFJhbmRvbURhdGEoKVwiPkdldCBSYW5kYW9tIERhdGE8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxwPkRhdGEgc2VsZWN0ZWQgaXM6IHt7ZGF0YX19PC9wPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0RGF0YT4gXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJwdXNoRGF0YShpbnB1dERhdGEudmFsdWUpXCIgPkFkZDwvYnV0dG9uPlxyXG5cdFx0PC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBESUxldmVsMkNvbXBvbmVudCB7XHJcbiAgICBkYXRhOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhU2VydmljZTogRGF0YVNlcnZpY2Upe1xyXG5cclxuICAgIH1cclxuICAgIGdldFJhbmRvbURhdGEoKXtcclxuICAgICAgICB0aGlzLmRhdGE9dGhpcy5fZGF0YVNlcnZpY2UuZ2V0UmFuZG9tRGF0YSgpO1xyXG4gICAgfVxyXG4gICAgcHVzaERhdGEoaW5wdXREYXRhOiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuX2RhdGFTZXJ2aWNlLmluc2VydERhdGEoaW5wdXREYXRhKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
