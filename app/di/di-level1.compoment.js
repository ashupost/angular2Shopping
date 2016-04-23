System.register(['angular2/core', "./di-data.service"], function(exports_1, context_1) {
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
    var core_1, di_data_service_1;
    var DILevel1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (di_data_service_1_1) {
                di_data_service_1 = di_data_service_1_1;
            }],
        execute: function() {
            DILevel1Component = (function () {
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
            exports_1("DILevel1Component", DILevel1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpL2RpLWxldmVsMS5jb21wb21lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBRUksMkJBQW9CLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFFN0MsQ0FBQztnQkFDRCx5Q0FBYSxHQUFiO29CQUNJLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDaEQsQ0FBQztnQkFDRCxvQ0FBUSxHQUFSLFVBQVMsU0FBaUI7b0JBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO2dCQXhCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxxQkFBcUI7d0JBQy9CLFFBQVEsRUFBRSwyVUFRVDtxQkFHSixDQUFDOztxQ0FBQTtnQkFZRix3QkFBQztZQUFELENBWEEsQUFXQyxJQUFBO1lBWEQsaURBV0MsQ0FBQSIsImZpbGUiOiJkaS9kaS1sZXZlbDEuY29tcG9tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gXCIuL2RpLWRhdGEuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7IC8vIE5PIFNFTEVDVE9SIEJFQ0FVU0UgSVQgSVMgQSBST1VURVxyXG4gICAgc2VsZWN0b3I6ICdkaS1sZXZlbDEtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMT5Db21wb25lbnQgMTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJnZXRSYW5kb21EYXRhKClcIj5HZXQgUmFuZGFvbSBEYXRhPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8cD5EYXRhIHNlbGVjdGVkIGlzOiB7e2RhdGF9fTwvcD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNpbnB1dERhdGE+IFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicHVzaERhdGEoaW5wdXREYXRhLnZhbHVlKVwiID5BZGQ8L2J1dHRvbj5cclxuXHRcdDwvZGl2PlxyXG4gICAgYFxyXG5cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBESUxldmVsMUNvbXBvbmVudCB7XHJcbiAgIGRhdGE6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSl7XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0UmFuZG9tRGF0YSgpe1xyXG4gICAgICAgIHRoaXMuZGF0YT10aGlzLl9kYXRhU2VydmljZS5nZXRSYW5kb21EYXRhKCk7XHJcbiAgICB9XHJcbiAgICBwdXNoRGF0YShpbnB1dERhdGE6IHN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5fZGF0YVNlcnZpY2UuaW5zZXJ0RGF0YShpbnB1dERhdGEpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
