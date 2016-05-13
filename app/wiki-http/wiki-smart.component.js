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
var Subject_1 = require('rxjs/Subject');
var wikipedia_service_1 = require('./wikipedia.service');
var WikiSmartComponent = (function () {
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
            template: "\n    <h1>Smarter Wikipedia Demo</h1>\n    <p><i>Fetches when typing stops</i></p>\n\n    <input #term (keyup)=\"search(term.value)\"/>\n\n    <ul>\n      <li *ngFor=\"let item of items | async\">{{item}}</li>\n    </ul>\n  ",
            providers: [http_1.JSONP_PROVIDERS, wikipedia_service_1.WikipediaService]
        }), 
        __metadata('design:paramtypes', [wikipedia_service_1.WikipediaService])
    ], WikiSmartComponent);
    return WikiSmartComponent;
}());
exports.WikiSmartComponent = WikiSmartComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpa2ktaHR0cC93aWtpLXNtYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUUvQyx3QkFBK0IsY0FBYyxDQUFDLENBQUE7QUFFOUMsa0NBQStCLHFCQUFxQixDQUFDLENBQUE7QUFnQnJEO0lBRUksNEJBQXFCLGlCQUFtQztRQUY1RCxpQkFZQztRQVZ3QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBRWhELHNCQUFpQixHQUFHLElBQUksaUJBQU8sRUFBVSxDQUFDO1FBSWxELFVBQUssR0FBd0IsSUFBSSxDQUFDLGlCQUFpQjthQUM5QyxZQUFZLENBQUMsR0FBRyxDQUFDO2FBQ2pCLG9CQUFvQixFQUFFO2FBQ3RCLFNBQVMsQ0FBQyxVQUFDLElBQVcsSUFBSyxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQztJQVRULENBQUM7SUFJN0QsbUNBQU0sR0FBTixVQUFPLElBQVcsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQXBCOUQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLGtPQVNYO1lBQ0MsU0FBUyxFQUFDLENBQUMsc0JBQWUsRUFBRSxvQ0FBZ0IsQ0FBQztTQUNoRCxDQUFDOzswQkFBQTtJQWFGLHlCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSwwQkFBa0IscUJBWTlCLENBQUEiLCJmaWxlIjoid2lraS1odHRwL3dpa2ktc21hcnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9ICAgICAgICBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtKU09OUF9QUk9WSURFUlN9ICBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSAgICAgICBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge1N1YmplY3R9ICAgICAgICAgIGZyb20gJ3J4anMvU3ViamVjdCc7XHJcblxyXG5pbXBvcnQge1dpa2lwZWRpYVNlcnZpY2V9IGZyb20gJy4vd2lraXBlZGlhLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LXdpa2ktc21hcnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxoMT5TbWFydGVyIFdpa2lwZWRpYSBEZW1vPC9oMT5cclxuICAgIDxwPjxpPkZldGNoZXMgd2hlbiB0eXBpbmcgc3RvcHM8L2k+PC9wPlxyXG5cclxuICAgIDxpbnB1dCAjdGVybSAoa2V5dXApPVwic2VhcmNoKHRlcm0udmFsdWUpXCIvPlxyXG5cclxuICAgIDx1bD5cclxuICAgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zIHwgYXN5bmNcIj57e2l0ZW19fTwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIGAsXHJcbiAgICBwcm92aWRlcnM6W0pTT05QX1BST1ZJREVSUywgV2lraXBlZGlhU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFdpa2lTbWFydENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX3dpa2lwZWRpYVNlcnZpY2U6IFdpa2lwZWRpYVNlcnZpY2UpIHsgfVxyXG5cclxuICAgIHByaXZhdGUgX3NlYXJjaFRlcm1TdHJlYW0gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcblxyXG4gICAgc2VhcmNoKHRlcm06c3RyaW5nKSB7IHRoaXMuX3NlYXJjaFRlcm1TdHJlYW0ubmV4dCh0ZXJtKTsgfVxyXG5cclxuICAgIGl0ZW1zOk9ic2VydmFibGU8c3RyaW5nW10+ID0gdGhpcy5fc2VhcmNoVGVybVN0cmVhbVxyXG4gICAgICAgIC5kZWJvdW5jZVRpbWUoMzAwKVxyXG4gICAgICAgIC5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpXHJcbiAgICAgICAgLnN3aXRjaE1hcCgodGVybTpzdHJpbmcpID0+IHRoaXMuX3dpa2lwZWRpYVNlcnZpY2Uuc2VhcmNoKHRlcm0pKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
