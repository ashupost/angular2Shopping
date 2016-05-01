System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var WikipediaService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            WikipediaService = (function () {
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
            exports_1("WikipediaService", WikipediaService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpa2ktaHR0cC93aWtpcGVkaWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUNJLDBCQUFvQixLQUFZO29CQUFaLFVBQUssR0FBTCxLQUFLLENBQU87Z0JBQUcsQ0FBQztnQkFFcEMsaUNBQU0sR0FBTixVQUFRLElBQVk7b0JBRWhCLElBQUksT0FBTyxHQUFHLG1DQUFtQyxDQUFDO29CQUVsRCxJQUFJLE1BQU0sR0FBRyxJQUFJLHNCQUFlLEVBQUUsQ0FBQztvQkFDbkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQywwQkFBMEI7b0JBQ3RELE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO29CQUNuQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDN0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztvQkFDekMsdUhBQXVIO29CQUN2SCwyQkFBMkI7b0JBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUM7eUJBQzdDLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFXLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO2dCQUN0RCxDQUFDO2dCQWpCTDtvQkFBQyxpQkFBVSxFQUFFOztvQ0FBQTtnQkFrQmIsdUJBQUM7WUFBRCxDQWpCQSxBQWlCQyxJQUFBO1lBakJELCtDQWlCQyxDQUFBIiwiZmlsZSI6Indpa2ktaHR0cC93aWtpcGVkaWEuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7SnNvbnAsIFVSTFNlYXJjaFBhcmFtc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2lraXBlZGlhU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGpzb25wOiBKc29ucCkge31cclxuXHJcbiAgICBzZWFyY2ggKHRlcm06IHN0cmluZykge1xyXG5cclxuICAgICAgICBsZXQgd2lraVVybCA9ICdodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93L2FwaS5waHAnO1xyXG5cclxuICAgICAgICB2YXIgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgICAgIHBhcmFtcy5zZXQoJ3NlYXJjaCcsIHRlcm0pOyAvLyB0aGUgdXNlcidzIHNlYXJjaCB2YWx1ZVxyXG4gICAgICAgIHBhcmFtcy5zZXQoJ2FjdGlvbicsICdvcGVuc2VhcmNoJyk7XHJcbiAgICAgICAgcGFyYW1zLnNldCgnZm9ybWF0JywgJ2pzb24nKTtcclxuICAgICAgICBwYXJhbXMuc2V0KCdjYWxsYmFjaycsICdKU09OUF9DQUxMQkFDSycpO1xyXG4gICAgICAgIC8vcmV0dXJuIE9ic2VydmFibGUuZm9ya0pvaW4odGhpcy5qc29ucC5nZXQod2lraVVybCwgeyBzZWFyY2g6IHBhcmFtcyB9KS5tYXAocmVxdWVzdCA9PiA8c3RyaW5nW10+IHJlcXVlc3QuanNvbigpWzJdKSk7XHJcbiAgICAgICAgLy8gVE9ETzogQWRkIGVycm9yIGhhbmRsaW5nXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuanNvbnAuZ2V0KHdpa2lVcmwsIHsgc2VhcmNoOiBwYXJhbXMgfSlcclxuICAgICAgICAgICAgLm1hcChyZXF1ZXN0ID0+IDxzdHJpbmdbXT4gcmVxdWVzdC5qc29uKClbMl0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
