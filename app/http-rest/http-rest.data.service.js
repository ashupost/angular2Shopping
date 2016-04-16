System.register(["angular2/http", "angular2/core", "rxjs/add/operator/map"], function(exports_1, context_1) {
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
    var http_1, core_1;
    var HTTPRestDataService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            HTTPRestDataService = (function () {
                function HTTPRestDataService(_http) {
                    this._http = _http;
                    this._data = ["Mritunjay", "Sapna", "Kumar"];
                }
                HTTPRestDataService.prototype.getCall = function () {
                    return this._http.get("package.json")
                        .map(function (res) { return res.json(); });
                };
                HTTPRestDataService.prototype.postData = function (value) {
                    this._data.push(value);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAtcmVzdC9odHRwLXJlc3QuZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUVJLDZCQUFvQixLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07b0JBRHZCLFVBQUssR0FBRyxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBR2hELENBQUM7Z0JBQ0QscUNBQU8sR0FBUDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO3lCQUNoQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBQ0Qsc0NBQVEsR0FBUixVQUFTLEtBQWE7b0JBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQixDQUFDO2dCQVpMO29CQUFDLGlCQUFVLEVBQUU7O3VDQUFBO2dCQWFiLDBCQUFDO1lBQUQsQ0FaQSxBQVlDLElBQUE7WUFaRCxxREFZQyxDQUFBIiwiZmlsZSI6Imh0dHAtcmVzdC9odHRwLXJlc3QuZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSFRUUFJlc3REYXRhU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9kYXRhID0gW1wiTXJpdHVuamF5XCIsIFwiU2FwbmFcIiwgXCJLdW1hclwiXTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApe1xyXG5cclxuICAgIH1cclxuICAgIGdldENhbGwoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoXCJwYWNrYWdlLmpzb25cIilcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcbiAgICBwb3N0RGF0YSh2YWx1ZTogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLl9kYXRhLnB1c2godmFsdWUpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
