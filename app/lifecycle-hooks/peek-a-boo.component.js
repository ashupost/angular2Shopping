"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var PeekABoo = (function () {
    function PeekABoo(_logger) {
        this._logger = _logger;
    }
    // implement OnInit's `ngOnInit` method
    PeekABoo.prototype.ngOnInit = function () { this._logIt("OnInit"); };
    PeekABoo.prototype._logIt = function (msg) {
        this._logger.log("#" + nextId++ + " " + msg);
    };
    return PeekABoo;
}());
exports.PeekABoo = PeekABoo;
var PeekABooComponent = (function (_super) {
    __extends(PeekABooComponent, _super);
    function PeekABooComponent(logger) {
        _super.call(this, logger);
        this._verb = 'initialized';
        var is = this.name ? 'is' : 'is not';
        this._logIt("name " + is + " known at construction");
    }
    // only called for/if there is an @input variable set by parent.
    PeekABooComponent.prototype.ngOnChanges = function (changes) {
        var changesMsgs = [];
        for (var propName in changes) {
            if (propName === 'name') {
                var name_1 = changes['name'].currentValue;
                changesMsgs.push("name " + this._verb + " to \"" + name_1 + "\"");
            }
            else {
                changesMsgs.push(propName + ' ' + this._verb);
            }
        }
        this._logIt("OnChanges: " + changesMsgs.join('; '));
        this._verb = 'changed'; // next time it will be a change
    };
    // Beware! Called frequently!
    // Called in every change detection cycle anywhere on the page
    PeekABooComponent.prototype.ngDoCheck = function () { this._logIt("DoCheck"); };
    PeekABooComponent.prototype.ngAfterContentInit = function () { this._logIt("AfterContentInit"); };
    // Beware! Called frequently!
    // Called in every change detection cycle anywhere on the page
    PeekABooComponent.prototype.ngAfterContentChecked = function () { this._logIt("AfterContentChecked"); };
    PeekABooComponent.prototype.ngAfterViewInit = function () { this._logIt("AfterViewInit"); };
    // Beware! Called frequently!
    // Called in every change detection cycle anywhere on the page
    PeekABooComponent.prototype.ngAfterViewChecked = function () { this._logIt("AfterViewChecked"); };
    PeekABooComponent.prototype.ngOnDestroy = function () { this._logIt("OnDestroy"); };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PeekABooComponent.prototype, "name", void 0);
    PeekABooComponent = __decorate([
        core_1.Component({
            selector: 'peek-a-boo',
            template: '<p>Now you see my hero, {{name}}</p>',
            styles: ['p {background: LightYellow; padding: 8px}']
        }), 
        __metadata('design:paramtypes', [logger_service_1.LoggerService])
    ], PeekABooComponent);
    return PeekABooComponent;
}(PeekABoo));
exports.PeekABooComponent = PeekABooComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpZmVjeWNsZS1ob29rcy9wZWVrLWEtYm9vLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSxxQkFBdUMsZUFBZSxDQUFDLENBQUE7QUFDdkQsK0JBQXVDLGtCQUFrQixDQUFDLENBQUE7QUFFMUQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBRWY7SUFDSSxrQkFBb0IsT0FBcUI7UUFBckIsWUFBTyxHQUFQLE9BQU8sQ0FBYztJQUFJLENBQUM7SUFFOUMsdUNBQXVDO0lBQ3ZDLDJCQUFRLEdBQVIsY0FBYSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUzQix5QkFBTSxHQUFoQixVQUFpQixHQUFVO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQUksTUFBTSxFQUFFLFNBQUksR0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLGdCQUFRLFdBU3BCLENBQUE7QUFTRDtJQUF1QyxxQ0FBUTtJQVMzQywyQkFBWSxNQUFvQjtRQUM1QixrQkFBTSxNQUFNLENBQUMsQ0FBQztRQUhWLFVBQUssR0FBRyxhQUFhLENBQUM7UUFLMUIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBUSxFQUFFLDJCQUF3QixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELGdFQUFnRTtJQUNoRSx1Q0FBVyxHQUFYLFVBQVksT0FBK0M7UUFDdkQsSUFBSSxXQUFXLEdBQVksRUFBRSxDQUFBO1FBQzdCLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDM0IsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksTUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUM7Z0JBQ3hDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBUSxJQUFJLENBQUMsS0FBSyxjQUFRLE1BQUksT0FBRyxDQUFDLENBQUM7WUFDeEQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEQsQ0FBQztRQUNMLENBQUM7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFjLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFHLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxDQUFDLGdDQUFnQztJQUM1RCxDQUFDO0lBRUQsNkJBQTZCO0lBQzdCLDhEQUE4RDtJQUM5RCxxQ0FBUyxHQUFULGNBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdEMsOENBQWtCLEdBQWxCLGNBQXNCLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFFekQsNkJBQTZCO0lBQzdCLDhEQUE4RDtJQUM5RCxpREFBcUIsR0FBckIsY0FBeUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU5RCwyQ0FBZSxHQUFmLGNBQW1CLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWxELDZCQUE2QjtJQUM3Qiw4REFBOEQ7SUFDOUQsOENBQWtCLEdBQWxCLGNBQXNCLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFeEQsdUNBQVcsR0FBWCxjQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQTFDM0M7UUFBQyxZQUFLLEVBQUU7O21EQUFBO0lBWlo7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLHNDQUFzQztZQUNoRCxNQUFNLEVBQUUsQ0FBQywyQ0FBMkMsQ0FBQztTQUN4RCxDQUFDOzt5QkFBQTtJQW1ERix3QkFBQztBQUFELENBaERBLEFBZ0RDLENBaERzQyxRQUFRLEdBZ0Q5QztBQWhEWSx5QkFBaUIsb0JBZ0Q3QixDQUFBIiwiZmlsZSI6ImxpZmVjeWNsZS1ob29rcy9wZWVrLWEtYm9vLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZSxcclxuICAgIE9uSW5pdCxcclxuICAgIERvQ2hlY2ssXHJcbiAgICBBZnRlckNvbnRlbnRJbml0LFxyXG4gICAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcclxuICAgIEFmdGVyVmlld0luaXQsXHJcbiAgICBBZnRlclZpZXdDaGVja2VkLFxyXG4gICAgT25EZXN0cm95XHJcbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtMb2dnZXJTZXJ2aWNlfSAgICAgICAgICAgIGZyb20gJy4vbG9nZ2VyLnNlcnZpY2UnO1xyXG5cclxubGV0IG5leHRJZCA9IDE7XHJcblxyXG5leHBvcnQgY2xhc3MgUGVla0FCb28gaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9nZ2VyOkxvZ2dlclNlcnZpY2UpIHsgfVxyXG5cclxuICAgIC8vIGltcGxlbWVudCBPbkluaXQncyBgbmdPbkluaXRgIG1ldGhvZFxyXG4gICAgbmdPbkluaXQoKSB7IHRoaXMuX2xvZ0l0KGBPbkluaXRgKTsgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfbG9nSXQobXNnOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhgIyR7bmV4dElkKyt9ICR7bXNnfWApO1xyXG4gICAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncGVlay1hLWJvbycsXHJcbiAgICB0ZW1wbGF0ZTogJzxwPk5vdyB5b3Ugc2VlIG15IGhlcm8sIHt7bmFtZX19PC9wPicsXHJcbiAgICBzdHlsZXM6IFsncCB7YmFja2dyb3VuZDogTGlnaHRZZWxsb3c7IHBhZGRpbmc6IDhweH0nXVxyXG59KVxyXG4vLyBEb24ndCBIQVZFIHRvIG1lbnRpb24gdGhlIExpZmVjeWNsZSBIb29rIGludGVyZmFjZXNcclxuLy8gdW5sZXNzIHdlIHdhbnQgdHlwaW5nIGFuZCB0b29sIHN1cHBvcnQuXHJcbmV4cG9ydCBjbGFzcyBQZWVrQUJvb0NvbXBvbmVudCBleHRlbmRzIFBlZWtBQm9vIGltcGxlbWVudHNcclxuICAgIE9uQ2hhbmdlcywgT25Jbml0LCBEb0NoZWNrLFxyXG4gICAgQWZ0ZXJDb250ZW50SW5pdCxBZnRlckNvbnRlbnRDaGVja2VkLFxyXG4gICAgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCxcclxuICAgIE9uRGVzdHJveSB7XHJcbiAgICBASW5wdXQoKSAgbmFtZTpzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSBfdmVyYiA9ICdpbml0aWFsaXplZCc7XHJcblxyXG4gICAgY29uc3RydWN0b3IobG9nZ2VyOkxvZ2dlclNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihsb2dnZXIpO1xyXG5cclxuICAgICAgICBsZXQgaXMgPSB0aGlzLm5hbWUgPyAnaXMnIDogJ2lzIG5vdCc7XHJcbiAgICAgICAgdGhpcy5fbG9nSXQoYG5hbWUgJHtpc30ga25vd24gYXQgY29uc3RydWN0aW9uYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gb25seSBjYWxsZWQgZm9yL2lmIHRoZXJlIGlzIGFuIEBpbnB1dCB2YXJpYWJsZSBzZXQgYnkgcGFyZW50LlxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczoge1twcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZX0pe1xyXG4gICAgICAgIGxldCBjaGFuZ2VzTXNnczpzdHJpbmdbXSA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xyXG4gICAgICAgICAgICBpZiAocHJvcE5hbWUgPT09ICduYW1lJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBjaGFuZ2VzWyduYW1lJ10uY3VycmVudFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlc01zZ3MucHVzaChgbmFtZSAke3RoaXMuX3ZlcmJ9IHRvIFwiJHtuYW1lfVwiYCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VzTXNncy5wdXNoKHByb3BOYW1lICsgJyAnICsgdGhpcy5fdmVyYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbG9nSXQoYE9uQ2hhbmdlczogJHtjaGFuZ2VzTXNncy5qb2luKCc7ICcpfWApO1xyXG4gICAgICAgIHRoaXMuX3ZlcmIgPSAnY2hhbmdlZCc7IC8vIG5leHQgdGltZSBpdCB3aWxsIGJlIGEgY2hhbmdlXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQmV3YXJlISBDYWxsZWQgZnJlcXVlbnRseSFcclxuICAgIC8vIENhbGxlZCBpbiBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlIGFueXdoZXJlIG9uIHRoZSBwYWdlXHJcbiAgICBuZ0RvQ2hlY2soKXsgdGhpcy5fbG9nSXQoYERvQ2hlY2tgKTsgfVxyXG5cclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpeyB0aGlzLl9sb2dJdChgQWZ0ZXJDb250ZW50SW5pdGApOyAgfVxyXG5cclxuICAgIC8vIEJld2FyZSEgQ2FsbGVkIGZyZXF1ZW50bHkhXHJcbiAgICAvLyBDYWxsZWQgaW4gZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZSBhbnl3aGVyZSBvbiB0aGUgcGFnZVxyXG4gICAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCl7IHRoaXMuX2xvZ0l0KGBBZnRlckNvbnRlbnRDaGVja2VkYCk7IH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKXsgdGhpcy5fbG9nSXQoYEFmdGVyVmlld0luaXRgKTsgfVxyXG5cclxuICAgIC8vIEJld2FyZSEgQ2FsbGVkIGZyZXF1ZW50bHkhXHJcbiAgICAvLyBDYWxsZWQgaW4gZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZSBhbnl3aGVyZSBvbiB0aGUgcGFnZVxyXG4gICAgbmdBZnRlclZpZXdDaGVja2VkKCl7IHRoaXMuX2xvZ0l0KGBBZnRlclZpZXdDaGVja2VkYCk7IH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHsgdGhpcy5fbG9nSXQoYE9uRGVzdHJveWApOyB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
