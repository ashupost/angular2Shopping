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
    var DILevel2Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (di_data_service_1_1) {
                di_data_service_1 = di_data_service_1_1;
            }],
        execute: function() {
            DILevel2Component = (function () {
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
            exports_1("DILevel2Component", DILevel2Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpL2RpLWxldmVsMi5jb21wb21lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFFSSwyQkFBb0IsWUFBeUI7b0JBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO2dCQUU3QyxDQUFDO2dCQUNELHlDQUFhLEdBQWI7b0JBQ0ksSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNoRCxDQUFDO2dCQUNELG9DQUFRLEdBQVIsVUFBUyxTQUFpQjtvQkFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBdEJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjt3QkFDL0IsUUFBUSxFQUFFLDJVQVFUO3FCQUNKLENBQUM7O3FDQUFBO2dCQVlGLHdCQUFDO1lBQUQsQ0FYQSxBQVdDLElBQUE7WUFYRCxpREFXQyxDQUFBIiwiZmlsZSI6ImRpL2RpLWxldmVsMi5jb21wb21lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtEYXRhU2VydmljZX0gZnJvbSBcIi4vZGktZGF0YS5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkaS1sZXZlbDItY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMT5Db21wb25lbnQgMjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJnZXRSYW5kb21EYXRhKClcIj5HZXQgUmFuZGFvbSBEYXRhPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8cD5EYXRhIHNlbGVjdGVkIGlzOiB7e2RhdGF9fTwvcD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNpbnB1dERhdGE+IFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicHVzaERhdGEoaW5wdXREYXRhLnZhbHVlKVwiID5BZGQ8L2J1dHRvbj5cclxuXHRcdDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRElMZXZlbDJDb21wb25lbnQge1xyXG4gICAgZGF0YTogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKXtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRSYW5kb21EYXRhKCl7XHJcbiAgICAgICAgdGhpcy5kYXRhPXRoaXMuX2RhdGFTZXJ2aWNlLmdldFJhbmRvbURhdGEoKTtcclxuICAgIH1cclxuICAgIHB1c2hEYXRhKGlucHV0RGF0YTogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLl9kYXRhU2VydmljZS5pbnNlcnREYXRhKGlucHV0RGF0YSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
