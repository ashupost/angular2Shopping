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
var http_rest_data_service_1 = require("./http-rest.data.service");
var di_level2_compoment_1 = require("../di/di-level2.compoment");
var HTTPRestMasterComponent = (function () {
    function HTTPRestMasterComponent(_dataService) {
        this._dataService = _dataService;
    }
    HTTPRestMasterComponent.prototype.getHTTPCall = function () {
        var _this = this;
        this._dataService.getCall()
            .subscribe(function (data) { return _this.getData = JSON.stringify(data); }, function (error) { return _this.error = error; }, function () { return console.log("finished HTTP get Call"); });
    };
    HTTPRestMasterComponent = __decorate([
        core_1.Component({
            template: "\n      <button (click)=\"getHTTPCall()\">Get REST CALL SHOW TIME</button>\n      <h4>{{getData}}</h4>\n       <div class=\"alert alert-info\">\n          <h4>{{error}}</h4>\n      </div>\n       <section style=\"background-color: #0f7595;\">\n         <di-level2-component></di-level2-component>\n     </section>\n    ",
            directives: [di_level2_compoment_1.DILevel2Component],
            providers: [http_rest_data_service_1.HTTPRestDataService]
        }), 
        __metadata('design:paramtypes', [http_rest_data_service_1.HTTPRestDataService])
    ], HTTPRestMasterComponent);
    return HTTPRestMasterComponent;
}());
exports.HTTPRestMasterComponent = HTTPRestMasterComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAtcmVzdC9odHRwLXJlc3QubWFzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVDQUFrQywwQkFBMEIsQ0FBQyxDQUFBO0FBRTdELG9DQUFnQywyQkFBMkIsQ0FBQyxDQUFBO0FBaUI1RDtJQUdJLGlDQUFvQixZQUFpQztRQUFqQyxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7SUFDckQsQ0FBQztJQUVELDZDQUFXLEdBQVg7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO2FBQ3RCLFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBbkMsQ0FBbUMsRUFDM0MsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFRLEtBQUssRUFBdkIsQ0FBdUIsRUFDaEMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsRUFBckMsQ0FBcUMsQ0FDOUMsQ0FBQztJQUNWLENBQUM7SUE1Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlVQVNUO1lBQ0QsVUFBVSxFQUFFLENBQUMsdUNBQWlCLENBQUM7WUFDL0IsU0FBUyxFQUFFLENBQUMsNENBQW1CLENBQUM7U0FFbkMsQ0FBQzs7K0JBQUE7SUFlRiw4QkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFksK0JBQXVCLDBCQWNuQyxDQUFBIiwiZmlsZSI6Imh0dHAtcmVzdC9odHRwLXJlc3QubWFzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtIVFRQUmVzdERhdGFTZXJ2aWNlfSBmcm9tIFwiLi9odHRwLXJlc3QuZGF0YS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gXCIuLi9kaS9kaS1kYXRhLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtESUxldmVsMkNvbXBvbmVudH0gZnJvbSBcIi4uL2RpL2RpLWxldmVsMi5jb21wb21lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZ2V0SFRUUENhbGwoKVwiPkdldCBSRVNUIENBTEwgU0hPVyBUSU1FPC9idXR0b24+XHJcbiAgICAgIDxoND57e2dldERhdGF9fTwvaDQ+XHJcbiAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mb1wiPlxyXG4gICAgICAgICAgPGg0Pnt7ZXJyb3J9fTwvaDQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgPHNlY3Rpb24gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjMGY3NTk1O1wiPlxyXG4gICAgICAgICA8ZGktbGV2ZWwyLWNvbXBvbmVudD48L2RpLWxldmVsMi1jb21wb25lbnQ+XHJcbiAgICAgPC9zZWN0aW9uPlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtESUxldmVsMkNvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IFtIVFRQUmVzdERhdGFTZXJ2aWNlXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIEhUVFBSZXN0TWFzdGVyQ29tcG9uZW50IHtcclxuICAgIGdldERhdGE6c3RyaW5nO1xyXG4gICAgZXJyb3I6YW55O1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YVNlcnZpY2U6IEhUVFBSZXN0RGF0YVNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXRIVFRQQ2FsbCgpIHtcclxuICAgICAgICB0aGlzLl9kYXRhU2VydmljZS5nZXRDYWxsKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5nZXREYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLmVycm9yID0gPGFueT5lcnJvcixcclxuICAgICAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiZmluaXNoZWQgSFRUUCBnZXQgQ2FsbFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
