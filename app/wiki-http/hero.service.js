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
var http_1 = require('angular2/http');
var http_2 = require('angular2/http');
var Observable_1 = require('rxjs/Observable');
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        /*
         private _heroesUrl = 'app/heroes.json'; // URL to JSON file
         */
        this._heroesUrl = 'app/heroes'; // URL to web api
    }
    HeroService.prototype.getHeroes = function () {
        return this.http.get(this._heroesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HeroService.prototype.addHero = function (name) {
        var body = JSON.stringify({ name: name });
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this._heroesUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HeroService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body = res.json();
        return body.data || {};
    };
    HeroService.prototype.handleError = function (error) {
        // In a real world app, we might send the error to remote logging infrastructure
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpa2ktaHR0cC9oZXJvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHFCQUE2QixlQUFlLENBQUMsQ0FBQTtBQUM3QyxxQkFBNkIsZUFBZSxDQUFDLENBQUE7QUFDN0MscUJBQXNDLGVBQWUsQ0FBQyxDQUFBO0FBRXRELDJCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRy9DO0lBQ0kscUJBQXFCLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRS9COztXQUVHO1FBRUssZUFBVSxHQUFHLFlBQVksQ0FBQyxDQUFFLGlCQUFpQjtJQU5uQixDQUFDO0lBUW5DLCtCQUFTLEdBQVQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUNoQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVMsSUFBWTtRQUVqQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBQSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUNsRSxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUV2RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO2FBQ2hELEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUdPLGlDQUFXLEdBQW5CLFVBQW9CLEdBQWE7UUFDN0IsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFELENBQUM7UUFDRCxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRyxDQUFDO0lBQzVCLENBQUM7SUFFTyxpQ0FBVyxHQUFuQixVQUFxQixLQUFVO1FBQzNCLGdGQUFnRjtRQUNoRixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxJQUFJLGNBQWMsQ0FBQztRQUM3QyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMseUJBQXlCO1FBQ2hELE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBekNMO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUEwQ2Isa0JBQUM7QUFBRCxDQXpDQSxBQXlDQyxJQUFBO0FBekNZLG1CQUFXLGNBeUN2QixDQUFBIiwiZmlsZSI6Indpa2ktaHR0cC9oZXJvLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtJbmplY3RhYmxlfSAgICAgZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQge0hlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0IHtIZXJvfSAgICAgICAgICAgZnJvbSAnLi9oZXJvJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSAgICAgZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhlcm9TZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6IEh0dHApIHt9XHJcblxyXG4gICAgLypcclxuICAgICBwcml2YXRlIF9oZXJvZXNVcmwgPSAnYXBwL2hlcm9lcy5qc29uJzsgLy8gVVJMIHRvIEpTT04gZmlsZVxyXG4gICAgICovXHJcblxyXG4gICAgcHJpdmF0ZSBfaGVyb2VzVXJsID0gJ2FwcC9oZXJvZXMnOyAgLy8gVVJMIHRvIHdlYiBhcGlcclxuXHJcbiAgICBnZXRIZXJvZXMgKCk6IE9ic2VydmFibGU8SGVyb1tdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5faGVyb2VzVXJsKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRIZXJvIChuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEhlcm8+ICB7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoeyBuYW1lIH0pO1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuX2hlcm9lc1VybCwgYm9keSwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgZXh0cmFjdERhdGEocmVzOiBSZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzIDwgMjAwIHx8IHJlcy5zdGF0dXMgPj0gMzAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQmFkIHJlc3BvbnNlIHN0YXR1czogJyArIHJlcy5zdGF0dXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYm9keSA9IHJlcy5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGJvZHkuZGF0YSB8fCB7IH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvciAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIC8vIEluIGEgcmVhbCB3b3JsZCBhcHAsIHdlIG1pZ2h0IHNlbmQgdGhlIGVycm9yIHRvIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXHJcbiAgICAgICAgbGV0IGVyck1zZyA9IGVycm9yLm1lc3NhZ2UgfHwgJ1NlcnZlciBlcnJvcic7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJNc2cpOyAvLyBsb2cgdG8gY29uc29sZSBpbnN0ZWFkXHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyTXNnKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
