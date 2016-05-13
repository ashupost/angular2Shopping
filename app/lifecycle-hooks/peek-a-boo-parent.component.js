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
var peek_a_boo_component_1 = require('./peek-a-boo.component');
var logger_service_1 = require('./logger.service');
var PeekABooParentComponent = (function () {
    function PeekABooParentComponent(logger) {
        this.hasChild = false;
        this.heroName = 'Windstorm';
        this._logger = logger;
        this.hookLog = logger.logs;
    }
    PeekABooParentComponent.prototype.toggleChild = function () {
        this.hasChild = !this.hasChild;
        if (this.hasChild) {
            this.heroName = 'Windstorm';
            this._logger.clear(); // clear log on create
        }
        this._logger.tick();
    };
    PeekABooParentComponent.prototype.updateHero = function () {
        this.heroName += '!';
        this._logger.tick();
    };
    PeekABooParentComponent = __decorate([
        core_1.Component({
            selector: 'peek-a-boo-parent',
            template: "\n  <div class=\"parent\">\n    <h2>Peek-A-Boo</h2>\n\n    <button (click)=\"toggleChild()\">\n      {{hasChild ? 'Destroy' : 'Create'}} PeekABooComponent\n    </button>\n    <button (click)=\"updateHero()\" [hidden]=\"!hasChild\">Update Hero</button>\n\n    <peek-a-boo *ngIf=\"hasChild\" [name]=\"heroName\">\n    </peek-a-boo>\n\n    <h4>-- Lifecycle Hook Log --</h4>\n    <div *ngFor=\"let msg of hookLog\">{{msg}}</div>\n  </div>\n  ",
            styles: ['.parent {background: moccasin}'],
            directives: [peek_a_boo_component_1.PeekABooComponent],
            providers: [logger_service_1.LoggerService]
        }), 
        __metadata('design:paramtypes', [logger_service_1.LoggerService])
    ], PeekABooParentComponent);
    return PeekABooParentComponent;
}());
exports.PeekABooParentComponent = PeekABooParentComponent;
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpZmVjeWNsZS1ob29rcy9wZWVrLWEtYm9vLXBhcmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCxxQ0FBZ0Msd0JBQ2hDLENBQUMsQ0FEdUQ7QUFDeEQsK0JBQTZCLGtCQUFrQixDQUFDLENBQUE7QUF3QmhEO0lBUUksaUNBQVksTUFBb0I7UUFOaEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUdqQixhQUFRLEdBQUcsV0FBVyxDQUFDO1FBSW5CLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRUQsNkNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1lBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxzQkFBc0I7UUFDaEQsQ0FBQztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELDRDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUEvQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUsd2JBZVg7WUFDQyxNQUFNLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztZQUMxQyxVQUFVLEVBQUUsQ0FBQyx3Q0FBaUIsQ0FBQztZQUMvQixTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1NBQzdCLENBQUM7OytCQUFBO0lBMkJGLDhCQUFDO0FBQUQsQ0ExQkEsQUEwQkMsSUFBQTtBQTFCWSwrQkFBdUIsMEJBMEJuQyxDQUFBO0FBR0Q7Ozs7R0FJRyIsImZpbGUiOiJsaWZlY3ljbGUtaG9va3MvcGVlay1hLWJvby1wYXJlbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9ICAgICAgICAgZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7UGVla0FCb29Db21wb25lbnR9IGZyb20gJy4vcGVlay1hLWJvby5jb21wb25lbnQnXHJcbmltcG9ydCB7TG9nZ2VyU2VydmljZX0gIGZyb20gJy4vbG9nZ2VyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BlZWstYS1ib28tcGFyZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cInBhcmVudFwiPlxyXG4gICAgPGgyPlBlZWstQS1Cb288L2gyPlxyXG5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZUNoaWxkKClcIj5cclxuICAgICAge3toYXNDaGlsZCA/ICdEZXN0cm95JyA6ICdDcmVhdGUnfX0gUGVla0FCb29Db21wb25lbnRcclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwidXBkYXRlSGVybygpXCIgW2hpZGRlbl09XCIhaGFzQ2hpbGRcIj5VcGRhdGUgSGVybzwvYnV0dG9uPlxyXG5cclxuICAgIDxwZWVrLWEtYm9vICpuZ0lmPVwiaGFzQ2hpbGRcIiBbbmFtZV09XCJoZXJvTmFtZVwiPlxyXG4gICAgPC9wZWVrLWEtYm9vPlxyXG5cclxuICAgIDxoND4tLSBMaWZlY3ljbGUgSG9vayBMb2cgLS08L2g0PlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgbXNnIG9mIGhvb2tMb2dcIj57e21zZ319PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICAgIHN0eWxlczogWycucGFyZW50IHtiYWNrZ3JvdW5kOiBtb2NjYXNpbn0nXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtQZWVrQUJvb0NvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IFtMb2dnZXJTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVla0FCb29QYXJlbnRDb21wb25lbnQge1xyXG5cclxuICAgIGhhc0NoaWxkID0gZmFsc2U7XHJcbiAgICBob29rTG9nOnN0cmluZ1tdO1xyXG5cclxuICAgIGhlcm9OYW1lID0gJ1dpbmRzdG9ybSc7XHJcbiAgICBwcml2YXRlIF9sb2dnZXI6TG9nZ2VyU2VydmljZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2dnZXI6TG9nZ2VyU2VydmljZSl7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyID0gbG9nZ2VyO1xyXG4gICAgICAgIHRoaXMuaG9va0xvZyA9IGxvZ2dlci5sb2dzO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUNoaWxkKCkge1xyXG4gICAgICAgIHRoaXMuaGFzQ2hpbGQgPSAhdGhpcy5oYXNDaGlsZDtcclxuICAgICAgICBpZiAodGhpcy5oYXNDaGlsZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhlcm9OYW1lID0gJ1dpbmRzdG9ybSc7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5jbGVhcigpOyAvLyBjbGVhciBsb2cgb24gY3JlYXRlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2xvZ2dlci50aWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGVybygpIHtcclxuICAgICAgICB0aGlzLmhlcm9OYW1lICs9ICchJztcclxuICAgICAgICB0aGlzLl9sb2dnZXIudGljaygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLypcclxuIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0XHJcbiBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqLyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
