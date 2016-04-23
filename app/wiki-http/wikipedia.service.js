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
                    // TODO: Add error handling
                    return this.jsonp
                        .get(wikiUrl, { search: params })
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpa2ktaHR0cC93aWtpcGVkaWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUNJLDBCQUFvQixLQUFZO29CQUFaLFVBQUssR0FBTCxLQUFLLENBQU87Z0JBQUcsQ0FBQztnQkFFcEMsaUNBQU0sR0FBTixVQUFRLElBQVk7b0JBRWhCLElBQUksT0FBTyxHQUFHLG1DQUFtQyxDQUFDO29CQUVsRCxJQUFJLE1BQU0sR0FBRyxJQUFJLHNCQUFlLEVBQUUsQ0FBQztvQkFDbkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQywwQkFBMEI7b0JBQ3RELE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO29CQUNuQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDN0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztvQkFFekMsMkJBQTJCO29CQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUs7eUJBQ1osR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQzt5QkFDaEMsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQVcsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7Z0JBQ3RELENBQUM7Z0JBbEJMO29CQUFDLGlCQUFVLEVBQUU7O29DQUFBO2dCQW1CYix1QkFBQztZQUFELENBbEJBLEFBa0JDLElBQUE7WUFsQkQsK0NBa0JDLENBQUEiLCJmaWxlIjoid2lraS1odHRwL3dpa2lwZWRpYS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtKc29ucCwgVVJMU2VhcmNoUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdpa2lwZWRpYVNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBqc29ucDogSnNvbnApIHt9XHJcblxyXG4gICAgc2VhcmNoICh0ZXJtOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgbGV0IHdpa2lVcmwgPSAnaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvdy9hcGkucGhwJztcclxuXHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICAgICAgICBwYXJhbXMuc2V0KCdzZWFyY2gnLCB0ZXJtKTsgLy8gdGhlIHVzZXIncyBzZWFyY2ggdmFsdWVcclxuICAgICAgICBwYXJhbXMuc2V0KCdhY3Rpb24nLCAnb3BlbnNlYXJjaCcpO1xyXG4gICAgICAgIHBhcmFtcy5zZXQoJ2Zvcm1hdCcsICdqc29uJyk7XHJcbiAgICAgICAgcGFyYW1zLnNldCgnY2FsbGJhY2snLCAnSlNPTlBfQ0FMTEJBQ0snKTtcclxuXHJcbiAgICAgICAgLy8gVE9ETzogQWRkIGVycm9yIGhhbmRsaW5nXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuanNvbnBcclxuICAgICAgICAgICAgLmdldCh3aWtpVXJsLCB7IHNlYXJjaDogcGFyYW1zIH0pXHJcbiAgICAgICAgICAgIC5tYXAocmVxdWVzdCA9PiA8c3RyaW5nW10+IHJlcXVlc3QuanNvbigpWzJdKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
