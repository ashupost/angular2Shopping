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
                        .subscribe(function (data) { return _this.getData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("finished HTTP get Call"); });
                };
                HTTPRestMasterComponent = __decorate([
                    core_1.Component({
                        template: "\n      <button (click)=\"getHTTPCall()\">Get REST CALL SHOW TIME</button>\n      <h4>{{getData}}</h4>\n    ",
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
//# sourceMappingURL=http-rest.master.component.js.map