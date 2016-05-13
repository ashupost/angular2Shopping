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
var WikipediaService = (function () {
    function WikipediaService(jsonp) {
        this.jsonp = jsonp;
    }
    WikipediaService.prototype.search = function (term) {
        var wikiUrl = 'http://en.wikipedia.org/w/api.php';
        var params = new http_1.URLSearchParams();
        params.set('search', term); // the user's search value
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        //return Observable.forkJoin(this.jsonp.get(wikiUrl, { search: params }).map(request => <string[]> request.json()[2]));
        // TODO: Add error handling
        return this.jsonp.get(wikiUrl, { search: params })
            .map(function (request) { return request.json()[2]; });
    };
    WikipediaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], WikipediaService);
    return WikipediaService;
}());
exports.WikipediaService = WikipediaService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpa2ktaHR0cC93aWtpcGVkaWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHFCQUFxQyxlQUFlLENBQUMsQ0FBQTtBQUlyRDtJQUNJLDBCQUFvQixLQUFZO1FBQVosVUFBSyxHQUFMLEtBQUssQ0FBTztJQUFHLENBQUM7SUFFcEMsaUNBQU0sR0FBTixVQUFRLElBQVk7UUFFaEIsSUFBSSxPQUFPLEdBQUcsbUNBQW1DLENBQUM7UUFFbEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxzQkFBZSxFQUFFLENBQUM7UUFDbkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQywwQkFBMEI7UUFDdEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUN6Qyx1SEFBdUg7UUFDdkgsMkJBQTJCO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUM7YUFDN0MsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQVcsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQWpCTDtRQUFDLGlCQUFVLEVBQUU7O3dCQUFBO0lBa0JiLHVCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtBQWpCWSx3QkFBZ0IsbUJBaUI1QixDQUFBIiwiZmlsZSI6Indpa2ktaHR0cC93aWtpcGVkaWEuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7SnNvbnAsIFVSTFNlYXJjaFBhcmFtc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2lraXBlZGlhU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGpzb25wOiBKc29ucCkge31cclxuXHJcbiAgICBzZWFyY2ggKHRlcm06IHN0cmluZykge1xyXG5cclxuICAgICAgICBsZXQgd2lraVVybCA9ICdodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93L2FwaS5waHAnO1xyXG5cclxuICAgICAgICB2YXIgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgICAgIHBhcmFtcy5zZXQoJ3NlYXJjaCcsIHRlcm0pOyAvLyB0aGUgdXNlcidzIHNlYXJjaCB2YWx1ZVxyXG4gICAgICAgIHBhcmFtcy5zZXQoJ2FjdGlvbicsICdvcGVuc2VhcmNoJyk7XHJcbiAgICAgICAgcGFyYW1zLnNldCgnZm9ybWF0JywgJ2pzb24nKTtcclxuICAgICAgICBwYXJhbXMuc2V0KCdjYWxsYmFjaycsICdKU09OUF9DQUxMQkFDSycpO1xyXG4gICAgICAgIC8vcmV0dXJuIE9ic2VydmFibGUuZm9ya0pvaW4odGhpcy5qc29ucC5nZXQod2lraVVybCwgeyBzZWFyY2g6IHBhcmFtcyB9KS5tYXAocmVxdWVzdCA9PiA8c3RyaW5nW10+IHJlcXVlc3QuanNvbigpWzJdKSk7XHJcbiAgICAgICAgLy8gVE9ETzogQWRkIGVycm9yIGhhbmRsaW5nXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuanNvbnAuZ2V0KHdpa2lVcmwsIHsgc2VhcmNoOiBwYXJhbXMgfSlcclxuICAgICAgICAgICAgLm1hcChyZXF1ZXN0ID0+IDxzdHJpbmdbXT4gcmVxdWVzdC5qc29uKClbMl0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
