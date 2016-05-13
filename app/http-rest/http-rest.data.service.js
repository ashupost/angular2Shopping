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
var http_1 = require("angular2/http");
var core_1 = require("angular2/core");
require("rxjs/add/operator/map");
var Observable_1 = require("rxjs/Observable");
var HTTPRestDataService = (function () {
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
exports.HTTPRestDataService = HTTPRestDataService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAtcmVzdC9odHRwLXJlc3QuZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkIsZUFBZSxDQUFDLENBQUE7QUFDN0MscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQiwyQkFBeUIsaUJBQWlCLENBQUMsQ0FBQTtBQUczQztJQUVJLDZCQUFvQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUR2QixVQUFLLEdBQUcsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBR2hELENBQUM7SUFDRCxxQ0FBTyxHQUFQO1FBQ0ksdUZBQXVGO1FBQ3ZGLE9BQU87UUFDUCwyREFBMkQ7UUFDM0QsOEVBQThFO1FBQzlFLHVFQUF1RTtRQUV2RSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsaURBQWlELENBQUM7YUFDbkUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRS9ELENBQUM7SUFDRCxzQ0FBUSxHQUFSLFVBQVMsS0FBYTtRQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBR08seUNBQVcsR0FBbkIsVUFBb0IsR0FBYTtRQUM3QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDeEMsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUQsQ0FBQztRQUNGLHlCQUF5QjtRQUN6QiwyQkFBMkI7UUFDMUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ08seUNBQVcsR0FBbkIsVUFBcUIsS0FBVTtRQUMzQixnRkFBZ0Y7UUFDaEYsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxjQUFjLENBQUM7UUFDN0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLHlCQUF5QjtRQUNoRCxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQW5DTDtRQUFDLGlCQUFVLEVBQUU7OzJCQUFBO0lBb0NiLDBCQUFDO0FBQUQsQ0FuQ0EsQUFtQ0MsSUFBQTtBQW5DWSwyQkFBbUIsc0JBbUMvQixDQUFBIiwiZmlsZSI6Imh0dHAtcmVzdC9odHRwLXJlc3QuZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIVFRQUmVzdERhdGFTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX2RhdGEgPSBbXCJNcml0dW5qYXlcIiwgXCJTYXBuYVwiLCBcIkt1bWFyXCJdO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCl7XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0Q2FsbCgpOiBPYnNlcnZhYmxlPGFueT57XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KFwicGFja2FnZS5qc29uXCIpLm1hcCh0aGlzLmV4dHJhY3REYXRhKS5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgICAgICAvLyBKYXZhXHJcbiAgICAgICAgLy8gIHJlc3BvbnNlLmFkZEhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiLCBcIipcIik7XHJcbiAgICAgICAgLy8gIHJlc3BvbnNlLmFkZEhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHNcIiwgXCJHRVQsUFVULFBPU1QsREVMRVRFXCIpO1xyXG4gICAgICAgIC8vICByZXNwb25zZS5hZGRIZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzXCIsIFwiQ29udGVudC1UeXBlXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwODAvU3ByaW5nTVZDL3Jlc3Qva2ZjL2JyYW5kc1wiKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpLnNoYXJlKCk7XHJcblxyXG4gICAgfVxyXG4gICAgcG9zdERhdGEodmFsdWU6IHN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5fZGF0YS5wdXNoKHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYWN0RGF0YShyZXM6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPCAyMDAgfHwgcmVzLnN0YXR1cyA+PSAzMDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCYWQgcmVzcG9uc2Ugc3RhdHVzOiAnICsgcmVzLnN0YXR1cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgLy8gbGV0IGJvZHkgPSByZXMuanNvbigpO1xyXG4gICAgICAgLy8gcmV0dXJuIGJvZHkuZGF0YSB8fCB7IH07XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgLy8gSW4gYSByZWFsIHdvcmxkIGFwcCwgd2UgbWlnaHQgc2VuZCB0aGUgZXJyb3IgdG8gcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcclxuICAgICAgICBsZXQgZXJyTXNnID0gZXJyb3IubWVzc2FnZSB8fCAnU2VydmVyIGVycm9yJztcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7IC8vIGxvZyB0byBjb25zb2xlIGluc3RlYWRcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJNc2cpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
