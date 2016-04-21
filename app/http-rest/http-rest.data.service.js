System.register(["angular2/http", "angular2/core", "rxjs/add/operator/map", "rxjs/Observable"], function(exports_1, context_1) {
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
    var http_1, core_1, Observable_1;
    var HTTPRestDataService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            HTTPRestDataService = (function () {
                function HTTPRestDataService(_http) {
                    this._http = _http;
                    this._data = ["Mritunjay", "Sapna", "Kumar"];
                }
                HTTPRestDataService.prototype.getCall = function () {
                    return this._http.get("package.json1")
                        .map(this.extractData).catch(this.handleError);
                };
                HTTPRestDataService.prototype.postData = function (value) {
                    this._data.push(value);
                };
                HTTPRestDataService.prototype.extractData = function (res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    var body = res.json();
                    return body.data || {};
                };
                HTTPRestDataService.prototype.handleError = function (error) {
                    // In a real world app, we might send the error to remote logging infrastructure
                    var errMsg = error.message || 'Server error';
                    console.error(errMsg); // log to console instead
                    return Observable_1.Observable.throw(errMsg);
                };
                HTTPRestDataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HTTPRestDataService);
                return HTTPRestDataService;
            }());
            exports_1("HTTPRestDataService", HTTPRestDataService);
        }
    }
});
//# sourceMappingURL=http-rest.data.service.js.map