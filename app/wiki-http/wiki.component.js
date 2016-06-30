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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var wikipedia_service_1 = require('./wikipedia.service');
var WikiComponent = (function () {
    function WikiComponent(_wikipediaService) {
        this._wikipediaService = _wikipediaService;
    }
    WikiComponent.prototype.search = function (term) {
        this.items = this._wikipediaService.search(term);
    };
    WikiComponent = __decorate([
        core_1.Component({
            selector: 'my-wiki',
            template: "\n    <h1>Wikipedia Demo</h1>\n    <p><i>Fetches after each keystroke</i></p>\n\n    <input #term (keyup)=\"search(term.value)\"/>\n    \n    <ul>\n      <li *ngFor=\"let item of items | async\">{{item}}</li>\n    </ul>\n  ",
            providers: [http_1.JSONP_PROVIDERS, wikipedia_service_1.WikipediaService]
        }), 
        __metadata('design:paramtypes', [wikipedia_service_1.WikipediaService])
    ], WikiComponent);
    return WikiComponent;
}());
exports.WikiComponent = WikiComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpa2ktaHR0cC93aWtpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUcvQyxrQ0FBK0IscUJBQXFCLENBQUMsQ0FBQTtBQWdCckQ7SUFFSSx1QkFBcUIsaUJBQW1DO1FBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7SUFBRyxDQUFDO0lBSTVELDhCQUFNLEdBQU4sVUFBUSxJQUFZO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBdEJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxpT0FTWDtZQUNDLFNBQVMsRUFBQyxDQUFDLHNCQUFlLEVBQUUsb0NBQWdCLENBQUM7U0FDaEQsQ0FBQzs7cUJBQUE7SUFVRixvQkFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFkscUJBQWEsZ0JBU3pCLENBQUEiLCJmaWxlIjoid2lraS1odHRwL3dpa2kuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9ICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtKU09OUF9QUk9WSURFUlN9ICBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSAgICAgICBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuaW1wb3J0IHtXaWtpcGVkaWFTZXJ2aWNlfSBmcm9tICcuL3dpa2lwZWRpYS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS13aWtpJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8aDE+V2lraXBlZGlhIERlbW88L2gxPlxyXG4gICAgPHA+PGk+RmV0Y2hlcyBhZnRlciBlYWNoIGtleXN0cm9rZTwvaT48L3A+XHJcblxyXG4gICAgPGlucHV0ICN0ZXJtIChrZXl1cCk9XCJzZWFyY2godGVybS52YWx1ZSlcIi8+XHJcbiAgICBcclxuICAgIDx1bD5cclxuICAgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zIHwgYXN5bmNcIj57e2l0ZW19fTwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIGAsXHJcbiAgICBwcm92aWRlcnM6W0pTT05QX1BST1ZJREVSUywgV2lraXBlZGlhU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFdpa2lDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF93aWtpcGVkaWFTZXJ2aWNlOiBXaWtpcGVkaWFTZXJ2aWNlKSB7fVxyXG5cclxuICAgIGl0ZW1zOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcclxuXHJcbiAgICBzZWFyY2ggKHRlcm06IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLl93aWtpcGVkaWFTZXJ2aWNlLnNlYXJjaCh0ZXJtKTtcclxuICAgIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
