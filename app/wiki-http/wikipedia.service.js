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
                function WikipediaService(_jsonp) {
                    this._jsonp = _jsonp;
                }
                WikipediaService.prototype.search = function (term) {
                    var wikiUrl = 'http://en.wikipedia.org/w/api.php';
                    var params = new http_1.URLSearchParams();
                    params.set('search', term); // the user's search value
                    params.set('action', 'opensearch');
                    params.set('format', 'json');
                    params.set('callback', 'JSONP_CALLBACK');
                    // TODO: Add error handling
                    return this._jsonp
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpa2ktaHR0cC93aWtpcGVkaWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUNJLDBCQUFvQixNQUFhO29CQUFiLFdBQU0sR0FBTixNQUFNLENBQU87Z0JBQUcsQ0FBQztnQkFFckMsaUNBQU0sR0FBTixVQUFRLElBQVk7b0JBRWhCLElBQUksT0FBTyxHQUFHLG1DQUFtQyxDQUFDO29CQUVsRCxJQUFJLE1BQU0sR0FBRyxJQUFJLHNCQUFlLEVBQUUsQ0FBQztvQkFDbkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQywwQkFBMEI7b0JBQ3RELE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO29CQUNuQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDN0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztvQkFDekMsMkJBQTJCO29CQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07eUJBQ2IsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQzt5QkFDaEMsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQVcsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7Z0JBQ3RELENBQUM7Z0JBakJMO29CQUFDLGlCQUFVLEVBQUU7O29DQUFBO2dCQWtCYix1QkFBQztZQUFELENBakJBLEFBaUJDLElBQUE7WUFqQkQsK0NBaUJDLENBQUEiLCJmaWxlIjoid2lraS1odHRwL3dpa2lwZWRpYS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtKc29ucCwgVVJMU2VhcmNoUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdpa2lwZWRpYVNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfanNvbnA6IEpzb25wKSB7fVxyXG5cclxuICAgIHNlYXJjaCAodGVybTogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGxldCB3aWtpVXJsID0gJ2h0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3cvYXBpLnBocCc7XHJcblxyXG4gICAgICAgIHZhciBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICAgICAgcGFyYW1zLnNldCgnc2VhcmNoJywgdGVybSk7IC8vIHRoZSB1c2VyJ3Mgc2VhcmNoIHZhbHVlXHJcbiAgICAgICAgcGFyYW1zLnNldCgnYWN0aW9uJywgJ29wZW5zZWFyY2gnKTtcclxuICAgICAgICBwYXJhbXMuc2V0KCdmb3JtYXQnLCAnanNvbicpO1xyXG4gICAgICAgIHBhcmFtcy5zZXQoJ2NhbGxiYWNrJywgJ0pTT05QX0NBTExCQUNLJyk7XHJcbiAgICAgICAgLy8gVE9ETzogQWRkIGVycm9yIGhhbmRsaW5nXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2pzb25wXHJcbiAgICAgICAgICAgIC5nZXQod2lraVVybCwgeyBzZWFyY2g6IHBhcmFtcyB9KVxyXG4gICAgICAgICAgICAubWFwKHJlcXVlc3QgPT4gPHN0cmluZ1tdPiByZXF1ZXN0Lmpzb24oKVsyXSk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
