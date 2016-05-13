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
var logger_service_1 = require('./logger.service');
var nextId = 1;
// Spy on any element to which it is applied.
// Usage: <div my-spy>...</div>
var Spy = (function () {
    function Spy(_logger) {
        this._logger = _logger;
    }
    Spy.prototype.ngOnInit = function () { this._logIt("onInit"); };
    Spy.prototype.ngOnDestroy = function () { this._logIt("onDestroy"); };
    Spy.prototype._logIt = function (msg) {
        this._logger.log("Spy #" + nextId++ + " " + msg);
    };
    Spy = __decorate([
        core_1.Directive({ selector: '[my-spy]' }), 
        __metadata('design:paramtypes', [logger_service_1.LoggerService])
    ], Spy);
    return Spy;
}());
exports.Spy = Spy;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpZmVjeWNsZS1ob29rcy9zcHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsK0JBQTZCLGtCQUFrQixDQUFDLENBQUE7QUFFaEQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBRWYsNkNBQTZDO0FBQzdDLCtCQUErQjtBQUUvQjtJQUVJLGFBQW9CLE9BQXFCO1FBQXJCLFlBQU8sR0FBUCxPQUFPLENBQWM7SUFBSSxDQUFDO0lBRTlDLHNCQUFRLEdBQVIsY0FBZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFeEMseUJBQVcsR0FBWCxjQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVuQyxvQkFBTSxHQUFkLFVBQWUsR0FBVTtRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFRLE1BQU0sRUFBRSxTQUFJLEdBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFYTDtRQUFDLGdCQUFTLENBQUMsRUFBQyxRQUFRLEVBQUUsVUFBVSxFQUFDLENBQUM7O1dBQUE7SUFZbEMsVUFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFksV0FBRyxNQVdmLENBQUEiLCJmaWxlIjoibGlmZWN5Y2xlLWhvb2tzL3NweS5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0xvZ2dlclNlcnZpY2V9ICBmcm9tICcuL2xvZ2dlci5zZXJ2aWNlJztcclxuXHJcbmxldCBuZXh0SWQgPSAxO1xyXG5cclxuLy8gU3B5IG9uIGFueSBlbGVtZW50IHRvIHdoaWNoIGl0IGlzIGFwcGxpZWQuXHJcbi8vIFVzYWdlOiA8ZGl2IG15LXNweT4uLi48L2Rpdj5cclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbbXktc3B5XSd9KVxyXG5leHBvcnQgY2xhc3MgU3B5IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvZ2dlcjpMb2dnZXJTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpICAgIHsgdGhpcy5fbG9nSXQoYG9uSW5pdGApOyB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7IHRoaXMuX2xvZ0l0KGBvbkRlc3Ryb3lgKTsgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvZ0l0KG1zZzpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5sb2coYFNweSAjJHtuZXh0SWQrK30gJHttc2d9YCk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
