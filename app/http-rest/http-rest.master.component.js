System.register(['angular2/core', "./http-rest.data.service"], function(exports_1, context_1) {
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
    var core_1, http_rest_data_service_1;
    var HTTPRestMasterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_rest_data_service_1_1) {
                http_rest_data_service_1 = http_rest_data_service_1_1;
            }],
        execute: function() {
            HTTPRestMasterComponent = (function () {
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
                        template: "\n      <button (click)=\"getHTTPCall()\">Get REST CALL SHOW TIME</button>\n      <h4>{{getData}}</h4>\n       <div class=\"alert alert-info\">\n          <h4>{{error}}</h4>\n      </div>\n    ",
                        providers: [http_rest_data_service_1.HTTPRestDataService]
                    }), 
                    __metadata('design:paramtypes', [http_rest_data_service_1.HTTPRestDataService])
                ], HTTPRestMasterComponent);
                return HTTPRestMasterComponent;
            }());
            exports_1("HTTPRestMasterComponent", HTTPRestMasterComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAtcmVzdC9odHRwLXJlc3QubWFzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQUdJLGlDQUFvQixZQUFpQztvQkFBakMsaUJBQVksR0FBWixZQUFZLENBQXFCO2dCQUNyRCxDQUFDO2dCQUVELDZDQUFXLEdBQVg7b0JBQUEsaUJBT0M7b0JBTkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7eUJBQ3RCLFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBbkMsQ0FBbUMsRUFDM0MsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFRLEtBQUssRUFBdkIsQ0FBdUIsRUFDaEMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsRUFBckMsQ0FBcUMsQ0FDOUMsQ0FBQztnQkFDVixDQUFDO2dCQXhCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxtTUFNVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyw0Q0FBbUIsQ0FBQztxQkFFbkMsQ0FBQzs7MkNBQUE7Z0JBZUYsOEJBQUM7WUFBRCxDQWRBLEFBY0MsSUFBQTtZQWRELDZEQWNDLENBQUEiLCJmaWxlIjoiaHR0cC1yZXN0L2h0dHAtcmVzdC5tYXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0hUVFBSZXN0RGF0YVNlcnZpY2V9IGZyb20gXCIuL2h0dHAtcmVzdC5kYXRhLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZ2V0SFRUUENhbGwoKVwiPkdldCBSRVNUIENBTEwgU0hPVyBUSU1FPC9idXR0b24+XHJcbiAgICAgIDxoND57e2dldERhdGF9fTwvaDQ+XHJcbiAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mb1wiPlxyXG4gICAgICAgICAgPGg0Pnt7ZXJyb3J9fTwvaDQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIHByb3ZpZGVyczogW0hUVFBSZXN0RGF0YVNlcnZpY2VdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgSFRUUFJlc3RNYXN0ZXJDb21wb25lbnQge1xyXG4gICAgZ2V0RGF0YTpzdHJpbmc7XHJcbiAgICBlcnJvcjphbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhU2VydmljZTogSFRUUFJlc3REYXRhU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIGdldEhUVFBDYWxsKCkge1xyXG4gICAgICAgIHRoaXMuX2RhdGFTZXJ2aWNlLmdldENhbGwoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB0aGlzLmdldERhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3IgPSA8YW55PmVycm9yLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJmaW5pc2hlZCBIVFRQIGdldCBDYWxsXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
