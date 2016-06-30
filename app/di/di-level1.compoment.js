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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpL2RpLWxldmVsMS5jb21wb21lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCxnQ0FBMEIsbUJBQW1CLENBQUMsQ0FBQTtBQWdCOUM7SUFFSSwyQkFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7SUFFN0MsQ0FBQztJQUNELHlDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUNELG9DQUFRLEdBQVIsVUFBUyxTQUFpQjtRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBeEJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsUUFBUSxFQUFFLDJVQVFUO1NBR0osQ0FBQzs7eUJBQUE7SUFZRix3QkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFkseUJBQWlCLG9CQVc3QixDQUFBIiwiZmlsZSI6ImRpL2RpLWxldmVsMS5jb21wb21lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gXCIuL2RpLWRhdGEuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHsgLy8gTk8gU0VMRUNUT1IgQkVDQVVTRSBJVCBJUyBBIFJPVVRFXG4gICAgc2VsZWN0b3I6ICdkaS1sZXZlbDEtY29tcG9uZW50JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5Db21wb25lbnQgMTwvaDE+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZ2V0UmFuZG9tRGF0YSgpXCI+R2V0IFJhbmRhb20gRGF0YTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxwPkRhdGEgc2VsZWN0ZWQgaXM6IHt7ZGF0YX19PC9wPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNpbnB1dERhdGE+IFxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInB1c2hEYXRhKGlucHV0RGF0YS52YWx1ZSlcIiA+QWRkPC9idXR0b24+XG5cdFx0PC9kaXY+XG4gICAgYFxuXG5cbn0pXG5leHBvcnQgY2xhc3MgRElMZXZlbDFDb21wb25lbnQge1xuICAgZGF0YTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSl7XG5cbiAgICB9XG4gICAgZ2V0UmFuZG9tRGF0YSgpe1xuICAgICAgICB0aGlzLmRhdGE9dGhpcy5fZGF0YVNlcnZpY2UuZ2V0UmFuZG9tRGF0YSgpO1xuICAgIH1cbiAgICBwdXNoRGF0YShpbnB1dERhdGE6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX2RhdGFTZXJ2aWNlLmluc2VydERhdGEoaW5wdXREYXRhKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
