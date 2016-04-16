System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, http_2, Observable_1;
    var HeroService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            HeroService = (function () {
                function HeroService(http) {
                    this.http = http;
                    /*
                     private _heroesUrl = 'app/heroes.json'; // URL to JSON file
                     */
                    this._heroesUrl = 'app/heroes'; // URL to web api
                }
                HeroService.prototype.getHeroes = function () {
                    return this.http.get(this._heroesUrl)
                        .map(function (res) { return res.json().data; })
                        .do(function (data) { return console.log(data); }) // eyeball results in the console
                        .catch(this.handleError);
                };
                HeroService.prototype.addHero = function (name) {
                    var body = JSON.stringify({ name: name });
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this.http.post(this._heroesUrl, body, options)
                        .map(function (res) { return res.json().data; })
                        .catch(this.handleError);
                };
                HeroService.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                HeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HeroService);
                return HeroService;
            }());
            exports_1("HeroService", HeroService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpa2ktaHR0cC9oZXJvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBQ0kscUJBQXFCLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtvQkFFL0I7O3VCQUVHO29CQUVLLGVBQVUsR0FBRyxZQUFZLENBQUMsQ0FBRSxpQkFBaUI7Z0JBTm5CLENBQUM7Z0JBUW5DLCtCQUFTLEdBQVQ7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7eUJBQ2hDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFTLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQXhCLENBQXdCLENBQUM7eUJBQ3BDLEVBQUUsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLENBQUMsQ0FBQyxpQ0FBaUM7eUJBQy9ELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUQsNkJBQU8sR0FBUCxVQUFTLElBQVk7b0JBRWpCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFBLElBQUksRUFBRSxDQUFDLENBQUM7b0JBQ3BDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztvQkFDbEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7b0JBRXZELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7eUJBQ2hELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSyxPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQXRCLENBQXNCLENBQUM7eUJBQ25DLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7Z0JBQ2hDLENBQUM7Z0JBRU8saUNBQVcsR0FBbkIsVUFBcUIsS0FBZTtvQkFDaEMsbUZBQW1GO29CQUNuRiw0Q0FBNEM7b0JBQzVDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxDQUFDO2dCQUNsRSxDQUFDO2dCQWpDTDtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkFrQ2Isa0JBQUM7WUFBRCxDQWpDQSxBQWlDQyxJQUFBO1lBakNELHFDQWlDQyxDQUFBIiwiZmlsZSI6Indpa2ktaHR0cC9oZXJvLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtJbmplY3RhYmxlfSAgICAgZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQge0hlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0IHtIZXJvfSAgICAgICAgICAgZnJvbSAnLi9oZXJvJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSAgICAgZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhlcm9TZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6IEh0dHApIHt9XHJcblxyXG4gICAgLypcclxuICAgICBwcml2YXRlIF9oZXJvZXNVcmwgPSAnYXBwL2hlcm9lcy5qc29uJzsgLy8gVVJMIHRvIEpTT04gZmlsZVxyXG4gICAgICovXHJcblxyXG4gICAgcHJpdmF0ZSBfaGVyb2VzVXJsID0gJ2FwcC9oZXJvZXMnOyAgLy8gVVJMIHRvIHdlYiBhcGlcclxuXHJcbiAgICBnZXRIZXJvZXMgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuX2hlcm9lc1VybClcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gPEhlcm9bXT4gcmVzLmpzb24oKS5kYXRhKVxyXG4gICAgICAgICAgICAuZG8oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSkgLy8gZXllYmFsbCByZXN1bHRzIGluIHRoZSBjb25zb2xlXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRIZXJvIChuYW1lOiBzdHJpbmcpIDogT2JzZXJ2YWJsZTxIZXJvPiAge1xyXG5cclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHsgbmFtZSB9KTtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLl9oZXJvZXNVcmwsIGJvZHksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+ICA8SGVybz4gcmVzLmpzb24oKS5kYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcilcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yIChlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgICAgICAvLyBpbiBhIHJlYWwgd29ybGQgYXBwLCB3ZSBtYXkgc2VuZCB0aGUgZXJyb3IgdG8gc29tZSByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxyXG4gICAgICAgIC8vIGluc3RlYWQgb2YganVzdCBsb2dnaW5nIGl0IHRvIHRoZSBjb25zb2xlXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
