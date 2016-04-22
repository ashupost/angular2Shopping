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
                    return this._http.get("package.json")
                        .map(this.extractData).catch(this.handleError);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAtcmVzdC9odHRwLXJlc3QuZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUVJLDZCQUFvQixLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07b0JBRHZCLFVBQUssR0FBRyxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBR2hELENBQUM7Z0JBQ0QscUNBQU8sR0FBUDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO3lCQUNoQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3ZELENBQUM7Z0JBQ0Qsc0NBQVEsR0FBUixVQUFTLEtBQWE7b0JBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQixDQUFDO2dCQUdPLHlDQUFXLEdBQW5CLFVBQW9CLEdBQWE7b0JBQzdCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDeEMsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzFELENBQUM7b0JBQ0YseUJBQXlCO29CQUN6QiwyQkFBMkI7b0JBQzFCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3RCLENBQUM7Z0JBQ08seUNBQVcsR0FBbkIsVUFBcUIsS0FBVTtvQkFDM0IsZ0ZBQWdGO29CQUNoRixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxJQUFJLGNBQWMsQ0FBQztvQkFDN0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLHlCQUF5QjtvQkFDaEQsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQTVCTDtvQkFBQyxpQkFBVSxFQUFFOzt1Q0FBQTtnQkE2QmIsMEJBQUM7WUFBRCxDQTVCQSxBQTRCQyxJQUFBO1lBNUJELHFEQTRCQyxDQUFBIiwiZmlsZSI6Imh0dHAtcmVzdC9odHRwLXJlc3QuZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIVFRQUmVzdERhdGFTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX2RhdGEgPSBbXCJNcml0dW5qYXlcIiwgXCJTYXBuYVwiLCBcIkt1bWFyXCJdO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCl7XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0Q2FsbCgpOiBPYnNlcnZhYmxlPGFueT57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KFwicGFja2FnZS5qc29uXCIpXHJcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSkuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcbiAgICBwb3N0RGF0YSh2YWx1ZTogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLl9kYXRhLnB1c2godmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGV4dHJhY3REYXRhKHJlczogUmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAocmVzLnN0YXR1cyA8IDIwMCB8fCByZXMuc3RhdHVzID49IDMwMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JhZCByZXNwb25zZSBzdGF0dXM6ICcgKyByZXMuc3RhdHVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAvLyBsZXQgYm9keSA9IHJlcy5qc29uKCk7XHJcbiAgICAgICAvLyByZXR1cm4gYm9keS5kYXRhIHx8IHsgfTtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IgKGVycm9yOiBhbnkpIHtcclxuICAgICAgICAvLyBJbiBhIHJlYWwgd29ybGQgYXBwLCB3ZSBtaWdodCBzZW5kIHRoZSBlcnJvciB0byByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxyXG4gICAgICAgIGxldCBlcnJNc2cgPSBlcnJvci5tZXNzYWdlIHx8ICdTZXJ2ZXIgZXJyb3InO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTsgLy8gbG9nIHRvIGNvbnNvbGUgaW5zdGVhZFxyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVyck1zZyk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
