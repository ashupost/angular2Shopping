System.register(['angular2/core', 'angular2/http', './wikipedia.service'], function(exports_1, context_1) {
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
    var core_1, http_1, wikipedia_service_1;
    var WikiComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (wikipedia_service_1_1) {
                wikipedia_service_1 = wikipedia_service_1_1;
            }],
        execute: function() {
            WikiComponent = (function () {
                function WikiComponent(_wikipediaService) {
                    this._wikipediaService = _wikipediaService;
                }
                WikiComponent.prototype.search = function (term) {
                    this.items = this._wikipediaService.search(term);
                };
                WikiComponent = __decorate([
                    core_1.Component({
                        selector: 'my-wiki',
                        template: "\n    <h1>Wikipedia Demo</h1>\n    <p><i>Fetches after each keystroke</i></p>\n\n    <input #term (keyup)=\"search(term.value)\"/>\n    \n    <ul>\n      <li *ngFor=\"#item of items | async\">{{item}}</li>\n    </ul>\n  ",
                        providers: [http_1.JSONP_PROVIDERS, wikipedia_service_1.WikipediaService]
                    }), 
                    __metadata('design:paramtypes', [wikipedia_service_1.WikipediaService])
                ], WikiComponent);
                return WikiComponent;
            }());
            exports_1("WikiComponent", WikiComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpa2ktaHR0cC93aWtpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW9CQTtnQkFFSSx1QkFBcUIsaUJBQW1DO29CQUFuQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO2dCQUFHLENBQUM7Z0JBSTVELDhCQUFNLEdBQU4sVUFBUSxJQUFZO29CQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JELENBQUM7Z0JBdEJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLFFBQVEsRUFBRSw4TkFTWDt3QkFDQyxTQUFTLEVBQUMsQ0FBQyxzQkFBZSxFQUFFLG9DQUFnQixDQUFDO3FCQUNoRCxDQUFDOztpQ0FBQTtnQkFVRixvQkFBQztZQUFELENBVEEsQUFTQyxJQUFBO1lBVEQseUNBU0MsQ0FBQSIsImZpbGUiOiJ3aWtpLWh0dHAvd2lraS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gICAgICAgIGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0pTT05QX1BST1ZJREVSU30gIGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQge09ic2VydmFibGV9ICAgICAgIGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQge1dpa2lwZWRpYVNlcnZpY2V9IGZyb20gJy4vd2lraXBlZGlhLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LXdpa2knLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxoMT5XaWtpcGVkaWEgRGVtbzwvaDE+XHJcbiAgICA8cD48aT5GZXRjaGVzIGFmdGVyIGVhY2gga2V5c3Ryb2tlPC9pPjwvcD5cclxuXHJcbiAgICA8aW5wdXQgI3Rlcm0gKGtleXVwKT1cInNlYXJjaCh0ZXJtLnZhbHVlKVwiLz5cclxuICAgIFxyXG4gICAgPHVsPlxyXG4gICAgICA8bGkgKm5nRm9yPVwiI2l0ZW0gb2YgaXRlbXMgfCBhc3luY1wiPnt7aXRlbX19PC9saT5cclxuICAgIDwvdWw+XHJcbiAgYCxcclxuICAgIHByb3ZpZGVyczpbSlNPTlBfUFJPVklERVJTLCBXaWtpcGVkaWFTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2lraUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX3dpa2lwZWRpYVNlcnZpY2U6IFdpa2lwZWRpYVNlcnZpY2UpIHt9XHJcblxyXG4gICAgaXRlbXM6IE9ic2VydmFibGU8c3RyaW5nW10+O1xyXG5cclxuICAgIHNlYXJjaCAodGVybTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuX3dpa2lwZWRpYVNlcnZpY2Uuc2VhcmNoKHRlcm0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
