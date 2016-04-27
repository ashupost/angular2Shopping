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
                    // return this._http.get("package.json").map(this.extractData).catch(this.handleError);
                    // Java
                    //  response.addHeader("Access-Control-Allow-Origin", "*");
                    //  response.addHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
                    //  response.addHeader("Access-Control-Allow-Headers", "Content-Type");
                    return this._http.get("http://localhost:8080/SpringMVC/rest/kfc/brands")
                        .map(this.extractData).catch(this.handleError).share();
                };
                HTTPRestDataService.prototype.postData = function (value) {
                    this._data.push(value);
                };
                HTTPRestDataService.prototype.extractData = function (res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    // let body = res.json();
                    // return body.data || { };
                    return res.json();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAtcmVzdC9odHRwLXJlc3QuZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUVJLDZCQUFvQixLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07b0JBRHZCLFVBQUssR0FBRyxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBR2hELENBQUM7Z0JBQ0QscUNBQU8sR0FBUDtvQkFDSSx1RkFBdUY7b0JBQ3ZGLE9BQU87b0JBQ1AsMkRBQTJEO29CQUMzRCw4RUFBOEU7b0JBQzlFLHVFQUF1RTtvQkFFdkUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGlEQUFpRCxDQUFDO3lCQUNuRSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBRS9ELENBQUM7Z0JBQ0Qsc0NBQVEsR0FBUixVQUFTLEtBQWE7b0JBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQixDQUFDO2dCQUdPLHlDQUFXLEdBQW5CLFVBQW9CLEdBQWE7b0JBQzdCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDeEMsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzFELENBQUM7b0JBQ0YseUJBQXlCO29CQUN6QiwyQkFBMkI7b0JBQzFCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3RCLENBQUM7Z0JBQ08seUNBQVcsR0FBbkIsVUFBcUIsS0FBVTtvQkFDM0IsZ0ZBQWdGO29CQUNoRixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxJQUFJLGNBQWMsQ0FBQztvQkFDN0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLHlCQUF5QjtvQkFDaEQsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQW5DTDtvQkFBQyxpQkFBVSxFQUFFOzt1Q0FBQTtnQkFvQ2IsMEJBQUM7WUFBRCxDQW5DQSxBQW1DQyxJQUFBO1lBbkNELHFEQW1DQyxDQUFBIiwiZmlsZSI6Imh0dHAtcmVzdC9odHRwLXJlc3QuZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIVFRQUmVzdERhdGFTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX2RhdGEgPSBbXCJNcml0dW5qYXlcIiwgXCJTYXBuYVwiLCBcIkt1bWFyXCJdO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCl7XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0Q2FsbCgpOiBPYnNlcnZhYmxlPGFueT57XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KFwicGFja2FnZS5qc29uXCIpLm1hcCh0aGlzLmV4dHJhY3REYXRhKS5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgICAgICAvLyBKYXZhXHJcbiAgICAgICAgLy8gIHJlc3BvbnNlLmFkZEhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiLCBcIipcIik7XHJcbiAgICAgICAgLy8gIHJlc3BvbnNlLmFkZEhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHNcIiwgXCJHRVQsUFVULFBPU1QsREVMRVRFXCIpO1xyXG4gICAgICAgIC8vICByZXNwb25zZS5hZGRIZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzXCIsIFwiQ29udGVudC1UeXBlXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwODAvU3ByaW5nTVZDL3Jlc3Qva2ZjL2JyYW5kc1wiKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpLnNoYXJlKCk7XHJcblxyXG4gICAgfVxyXG4gICAgcG9zdERhdGEodmFsdWU6IHN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5fZGF0YS5wdXNoKHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYWN0RGF0YShyZXM6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPCAyMDAgfHwgcmVzLnN0YXR1cyA+PSAzMDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCYWQgcmVzcG9uc2Ugc3RhdHVzOiAnICsgcmVzLnN0YXR1cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgLy8gbGV0IGJvZHkgPSByZXMuanNvbigpO1xyXG4gICAgICAgLy8gcmV0dXJuIGJvZHkuZGF0YSB8fCB7IH07XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgLy8gSW4gYSByZWFsIHdvcmxkIGFwcCwgd2UgbWlnaHQgc2VuZCB0aGUgZXJyb3IgdG8gcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcclxuICAgICAgICBsZXQgZXJyTXNnID0gZXJyb3IubWVzc2FnZSB8fCAnU2VydmVyIGVycm9yJztcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7IC8vIGxvZyB0byBjb25zb2xlIGluc3RlYWRcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJNc2cpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
