System.register(['angular2/core', 'angular2/http', 'rxjs/Subject', './wikipedia.service'], function(exports_1, context_1) {
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
    var core_1, http_1, Subject_1, wikipedia_service_1;
    var WikiSmartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (wikipedia_service_1_1) {
                wikipedia_service_1 = wikipedia_service_1_1;
            }],
        execute: function() {
            WikiSmartComponent = (function () {
                function WikiSmartComponent(_wikipediaService) {
                    var _this = this;
                    this._wikipediaService = _wikipediaService;
                    this._searchTermStream = new Subject_1.Subject();
                    this.items = this._searchTermStream
                        .debounceTime(300)
                        .distinctUntilChanged()
                        .switchMap(function (term) { return _this._wikipediaService.search(term); });
                }
                WikiSmartComponent.prototype.search = function (term) { this._searchTermStream.next(term); };
                WikiSmartComponent = __decorate([
                    core_1.Component({
                        selector: 'my-wiki-smart',
                        template: "\n    <h1>Smarter Wikipedia Demo</h1>\n    <p><i>Fetches when typing stops</i></p>\n\n    <input #term (keyup)=\"search(term.value)\"/>\n\n    <ul>\n      <li *ngFor=\"#item of items | async\">{{item}}</li>\n    </ul>\n  ",
                        providers: [http_1.JSONP_PROVIDERS, wikipedia_service_1.WikipediaService]
                    }), 
                    __metadata('design:paramtypes', [wikipedia_service_1.WikipediaService])
                ], WikiSmartComponent);
                return WikiSmartComponent;
            }());
            exports_1("WikiSmartComponent", WikiSmartComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpa2ktaHR0cC93aWtpLXNtYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFFSSw0QkFBcUIsaUJBQW1DO29CQUY1RCxpQkFZQztvQkFWd0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtvQkFFaEQsc0JBQWlCLEdBQUcsSUFBSSxpQkFBTyxFQUFVLENBQUM7b0JBSWxELFVBQUssR0FBd0IsSUFBSSxDQUFDLGlCQUFpQjt5QkFDOUMsWUFBWSxDQUFDLEdBQUcsQ0FBQzt5QkFDakIsb0JBQW9CLEVBQUU7eUJBQ3RCLFNBQVMsQ0FBQyxVQUFDLElBQVcsSUFBSyxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQztnQkFUVCxDQUFDO2dCQUk3RCxtQ0FBTSxHQUFOLFVBQU8sSUFBVyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQXBCOUQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsUUFBUSxFQUFFLCtOQVNYO3dCQUNDLFNBQVMsRUFBQyxDQUFDLHNCQUFlLEVBQUUsb0NBQWdCLENBQUM7cUJBQ2hELENBQUM7O3NDQUFBO2dCQWFGLHlCQUFDO1lBQUQsQ0FaQSxBQVlDLElBQUE7WUFaRCxtREFZQyxDQUFBIiwiZmlsZSI6Indpa2ktaHR0cC93aWtpLXNtYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSAgICAgICAgZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7SlNPTlBfUFJPVklERVJTfSAgZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gICAgICAgZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtTdWJqZWN0fSAgICAgICAgICBmcm9tICdyeGpzL1N1YmplY3QnO1xyXG5cclxuaW1wb3J0IHtXaWtpcGVkaWFTZXJ2aWNlfSBmcm9tICcuL3dpa2lwZWRpYS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS13aWtpLXNtYXJ0JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8aDE+U21hcnRlciBXaWtpcGVkaWEgRGVtbzwvaDE+XHJcbiAgICA8cD48aT5GZXRjaGVzIHdoZW4gdHlwaW5nIHN0b3BzPC9pPjwvcD5cclxuXHJcbiAgICA8aW5wdXQgI3Rlcm0gKGtleXVwKT1cInNlYXJjaCh0ZXJtLnZhbHVlKVwiLz5cclxuXHJcbiAgICA8dWw+XHJcbiAgICAgIDxsaSAqbmdGb3I9XCIjaXRlbSBvZiBpdGVtcyB8IGFzeW5jXCI+e3tpdGVtfX08L2xpPlxyXG4gICAgPC91bD5cclxuICBgLFxyXG4gICAgcHJvdmlkZXJzOltKU09OUF9QUk9WSURFUlMsIFdpa2lwZWRpYVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaWtpU21hcnRDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF93aWtpcGVkaWFTZXJ2aWNlOiBXaWtpcGVkaWFTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBwcml2YXRlIF9zZWFyY2hUZXJtU3RyZWFtID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xyXG5cclxuICAgIHNlYXJjaCh0ZXJtOnN0cmluZykgeyB0aGlzLl9zZWFyY2hUZXJtU3RyZWFtLm5leHQodGVybSk7IH1cclxuXHJcbiAgICBpdGVtczpPYnNlcnZhYmxlPHN0cmluZ1tdPiA9IHRoaXMuX3NlYXJjaFRlcm1TdHJlYW1cclxuICAgICAgICAuZGVib3VuY2VUaW1lKDMwMClcclxuICAgICAgICAuZGlzdGluY3RVbnRpbENoYW5nZWQoKVxyXG4gICAgICAgIC5zd2l0Y2hNYXAoKHRlcm06c3RyaW5nKSA9PiB0aGlzLl93aWtpcGVkaWFTZXJ2aWNlLnNlYXJjaCh0ZXJtKSk7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
