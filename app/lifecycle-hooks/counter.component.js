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
var spy_directive_1 = require('./spy.directive');
var logger_service_1 = require('./logger.service');
var MyCounter = (function () {
    function MyCounter() {
        this.changeLog = [];
    }
    MyCounter.prototype.ngOnChanges = function (changes) {
        // Empty the changeLog whenever counter goes to zero
        // hint: this is a way to respond programmatically to external value changes.
        if (this.counter === 0) {
            this.changeLog.length = 0;
        }
        // A change to `counter` is the only change we care about
        var prop = changes['counter'];
        var cur = prop.currentValue;
        var prev = JSON.stringify(prop.previousValue); // first time is {}; after is integer
        this.changeLog.push("counter: currentValue = " + cur + ", previousValue = " + prev);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MyCounter.prototype, "counter", void 0);
    MyCounter = __decorate([
        core_1.Component({
            selector: 'my-counter',
            template: "\n  <div class=\"counter\">\n    Counter = {{counter}}\n\n    <h5>-- Counter Change Log --</h5>\n    <div *ngFor=\"let chg of changeLog\" my-spy>{{chg}}</div>\n  </div>\n  ",
            styles: ['.counter {background: LightYellow; padding: 8px; margin-top: 8px}'],
            directives: [spy_directive_1.Spy]
        }), 
        __metadata('design:paramtypes', [])
    ], MyCounter);
    return MyCounter;
}());
exports.MyCounter = MyCounter;
/***************************************/
var CounterParentComponent = (function () {
    function CounterParentComponent(logger) {
        this.spyLog = [];
        this._logger = logger;
        this.spyLog = logger.logs;
        this.reset();
    }
    CounterParentComponent.prototype.updateCounter = function () {
        this.value += 1;
        this._logger.tick();
    };
    CounterParentComponent.prototype.reset = function () {
        this._logger.log('-- reset --');
        this.value = 0;
        this._logger.tick();
    };
    CounterParentComponent = __decorate([
        core_1.Component({
            selector: 'counter-parent',
            template: "\n   <div class=\"parent\">\n    <h2>Counter Spy</h2>\n\n    <button (click)=\"updateCounter()\">Update counter</button>\n    <button (click)=\"reset()\">Reset Counter</button>\n\n    <my-counter [counter]=\"value\"></my-counter>\n\n    <h4>-- Spy Lifecycle Hook Log --</h4>\n    <div *ngFor=\"let msg of spyLog\">{{msg}}</div>\n   </div>\n  ",
            styles: ['.parent {background: gold;}'],
            directives: [MyCounter],
            providers: [logger_service_1.LoggerService]
        }), 
        __metadata('design:paramtypes', [logger_service_1.LoggerService])
    ], CounterParentComponent);
    return CounterParentComponent;
}());
exports.CounterParentComponent = CounterParentComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpZmVjeWNsZS1ob29rcy9jb3VudGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBR08sZUFBZSxDQUFDLENBQUE7QUFFdkIsOEJBQWtCLGlCQUFpQixDQUFDLENBQUE7QUFDcEMsK0JBQTZCLGtCQUFrQixDQUFDLENBQUE7QUFlaEQ7SUFBQTtRQUVJLGNBQVMsR0FBWSxFQUFFLENBQUM7SUFpQjVCLENBQUM7SUFmRywrQkFBVyxHQUFYLFVBQVksT0FBK0M7UUFFdkQsb0RBQW9EO1FBQ3BELDZFQUE2RTtRQUM3RSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLENBQUM7UUFFRCx5REFBeUQ7UUFDekQsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDNUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxxQ0FBcUM7UUFDcEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsNkJBQTJCLEdBQUcsMEJBQXFCLElBQU0sQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFoQkQ7UUFBQyxZQUFLLEVBQUU7OzhDQUFBO0lBZFo7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLDhLQU9YO1lBQ0MsTUFBTSxFQUFFLENBQUMsbUVBQW1FLENBQUM7WUFDN0UsVUFBVSxFQUFDLENBQUMsbUJBQUcsQ0FBQztTQUNuQixDQUFDOztpQkFBQTtJQW9CRixnQkFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFuQlksaUJBQVMsWUFtQnJCLENBQUE7QUFFRCx5Q0FBeUM7QUFxQnpDO0lBTUksZ0NBQVksTUFBb0I7UUFKaEMsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUtqQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCw4Q0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsc0NBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBeENMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLHdWQVlYO1lBQ0MsTUFBTSxFQUFFLENBQUMsNkJBQTZCLENBQUM7WUFDdkMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ3ZCLFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7U0FDN0IsQ0FBQzs7OEJBQUE7SUF1QkYsNkJBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBdEJZLDhCQUFzQix5QkFzQmxDLENBQUEiLCJmaWxlIjoibGlmZWN5Y2xlLWhvb2tzL2NvdW50ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCxcclxuICAgIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlLFxyXG59IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtTcHl9IGZyb20gJy4vc3B5LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7TG9nZ2VyU2VydmljZX0gIGZyb20gJy4vbG9nZ2VyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWNvdW50ZXInLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwiY291bnRlclwiPlxyXG4gICAgQ291bnRlciA9IHt7Y291bnRlcn19XHJcblxyXG4gICAgPGg1Pi0tIENvdW50ZXIgQ2hhbmdlIExvZyAtLTwvaDU+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBjaGcgb2YgY2hhbmdlTG9nXCIgbXktc3B5Pnt7Y2hnfX08L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gICAgc3R5bGVzOiBbJy5jb3VudGVyIHtiYWNrZ3JvdW5kOiBMaWdodFllbGxvdzsgcGFkZGluZzogOHB4OyBtYXJnaW4tdG9wOiA4cHh9J10sXHJcbiAgICBkaXJlY3RpdmVzOltTcHldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeUNvdW50ZXIgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gICAgQElucHV0KCkgY291bnRlcjogbnVtYmVyO1xyXG4gICAgY2hhbmdlTG9nOnN0cmluZ1tdID0gW107XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczoge1twcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZX0pIHtcclxuXHJcbiAgICAgICAgLy8gRW1wdHkgdGhlIGNoYW5nZUxvZyB3aGVuZXZlciBjb3VudGVyIGdvZXMgdG8gemVyb1xyXG4gICAgICAgIC8vIGhpbnQ6IHRoaXMgaXMgYSB3YXkgdG8gcmVzcG9uZCBwcm9ncmFtbWF0aWNhbGx5IHRvIGV4dGVybmFsIHZhbHVlIGNoYW5nZXMuXHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUxvZy5sZW5ndGggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQSBjaGFuZ2UgdG8gYGNvdW50ZXJgIGlzIHRoZSBvbmx5IGNoYW5nZSB3ZSBjYXJlIGFib3V0XHJcbiAgICAgICAgbGV0IHByb3AgPSBjaGFuZ2VzWydjb3VudGVyJ107XHJcbiAgICAgICAgbGV0IGN1ciA9IHByb3AuY3VycmVudFZhbHVlO1xyXG4gICAgICAgIGxldCBwcmV2ID0gSlNPTi5zdHJpbmdpZnkocHJvcC5wcmV2aW91c1ZhbHVlKTsgLy8gZmlyc3QgdGltZSBpcyB7fTsgYWZ0ZXIgaXMgaW50ZWdlclxyXG4gICAgICAgIHRoaXMuY2hhbmdlTG9nLnB1c2goYGNvdW50ZXI6IGN1cnJlbnRWYWx1ZSA9ICR7Y3VyfSwgcHJldmlvdXNWYWx1ZSA9ICR7cHJldn1gKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY291bnRlci1wYXJlbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgPGRpdiBjbGFzcz1cInBhcmVudFwiPlxyXG4gICAgPGgyPkNvdW50ZXIgU3B5PC9oMj5cclxuXHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJ1cGRhdGVDb3VudGVyKClcIj5VcGRhdGUgY291bnRlcjwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwicmVzZXQoKVwiPlJlc2V0IENvdW50ZXI8L2J1dHRvbj5cclxuXHJcbiAgICA8bXktY291bnRlciBbY291bnRlcl09XCJ2YWx1ZVwiPjwvbXktY291bnRlcj5cclxuXHJcbiAgICA8aDQ+LS0gU3B5IExpZmVjeWNsZSBIb29rIExvZyAtLTwvaDQ+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBtc2cgb2Ygc3B5TG9nXCI+e3ttc2d9fTwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICBgLFxyXG4gICAgc3R5bGVzOiBbJy5wYXJlbnQge2JhY2tncm91bmQ6IGdvbGQ7fSddLFxyXG4gICAgZGlyZWN0aXZlczogW015Q291bnRlcl0sXHJcbiAgICBwcm92aWRlcnM6IFtMb2dnZXJTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ291bnRlclBhcmVudENvbXBvbmVudCB7XHJcbiAgICB2YWx1ZTogbnVtYmVyO1xyXG4gICAgc3B5TG9nOnN0cmluZ1tdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9nZ2VyOkxvZ2dlclNlcnZpY2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IobG9nZ2VyOkxvZ2dlclNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlciA9IGxvZ2dlcjtcclxuICAgICAgICB0aGlzLnNweUxvZyA9IGxvZ2dlci5sb2dzO1xyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDb3VudGVyKCkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgKz0gMTtcclxuICAgICAgICB0aGlzLl9sb2dnZXIudGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCl7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZygnLS0gcmVzZXQgLS0nKTtcclxuICAgICAgICB0aGlzLnZhbHVlPTA7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLnRpY2soKTtcclxuICAgIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
