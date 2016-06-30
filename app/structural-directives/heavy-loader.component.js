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
var nextId = 1;
var HeavyLoaderComponent = (function () {
    function HeavyLoaderComponent() {
        this.id = nextId++;
    }
    HeavyLoaderComponent.prototype.ngOnInit = function () {
        // Mock todo: get 10,000 rows of data from the server
        this._log("heavy-loader " + this.id + " initialized, loading 10,000 rows of data from the server");
    };
    HeavyLoaderComponent.prototype.ngOnDestroy = function () {
        // Mock todo: clean-up
        this._log("heavy-loader " + this.id + " destroyed, cleaning up");
    };
    HeavyLoaderComponent.prototype._log = function (msg) {
        this.logs.push(msg);
        this._tick();
    };
    // Triggers the next round of Angular change detection
    // after one turn of the browser event loop
    // ensuring display of msg added in onDestroy
    HeavyLoaderComponent.prototype._tick = function () { setTimeout(function () { }, 0); };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], HeavyLoaderComponent.prototype, "logs", void 0);
    HeavyLoaderComponent = __decorate([
        core_1.Component({
            selector: 'heavy-loader',
            template: '<span>heavy loader #{{id}} on duty!</span>'
        }), 
        __metadata('design:paramtypes', [])
    ], HeavyLoaderComponent);
    return HeavyLoaderComponent;
}());
exports.HeavyLoaderComponent = HeavyLoaderComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnVjdHVyYWwtZGlyZWN0aXZlcy9oZWF2eS1sb2FkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUMsZUFBZSxDQUFDLENBQUE7QUFDdkQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBS2Y7SUFBQTtRQUNJLE9BQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQztJQWtCbEIsQ0FBQztJQWhCRyx1Q0FBUSxHQUFSO1FBQ0kscURBQXFEO1FBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWdCLElBQUksQ0FBQyxFQUFFLDhEQUEyRCxDQUFDLENBQUM7SUFDbEcsQ0FBQztJQUNELDBDQUFXLEdBQVg7UUFDSSxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBZ0IsSUFBSSxDQUFDLEVBQUUsNEJBQXlCLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBQ08sbUNBQUksR0FBWixVQUFhLEdBQVc7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDRCxzREFBc0Q7SUFDdEQsMkNBQTJDO0lBQzNDLDZDQUE2QztJQUNyQyxvQ0FBSyxHQUFiLGNBQWtCLFVBQVUsQ0FBQyxjQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFoQjdDO1FBQUMsWUFBSyxFQUFFOztzREFBQTtJQU5aO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSw0Q0FBNEM7U0FDekQsQ0FBQzs7NEJBQUE7SUFvQkYsMkJBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBO0FBbkJZLDRCQUFvQix1QkFtQmhDLENBQUEiLCJmaWxlIjoic3RydWN0dXJhbC1kaXJlY3RpdmVzL2hlYXZ5LWxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmxldCBuZXh0SWQgPSAxO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaGVhdnktbG9hZGVyJyxcclxuICAgIHRlbXBsYXRlOiAnPHNwYW4+aGVhdnkgbG9hZGVyICN7e2lkfX0gb24gZHV0eSE8L3NwYW4+J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhdnlMb2FkZXJDb21wb25lbnQge1xyXG4gICAgaWQgPSBuZXh0SWQrKztcclxuICAgIEBJbnB1dCgpIGxvZ3M6IHN0cmluZ1tdO1xyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy8gTW9jayB0b2RvOiBnZXQgMTAsMDAwIHJvd3Mgb2YgZGF0YSBmcm9tIHRoZSBzZXJ2ZXJcclxuICAgICAgICB0aGlzLl9sb2coYGhlYXZ5LWxvYWRlciAke3RoaXMuaWR9IGluaXRpYWxpemVkLCBsb2FkaW5nIDEwLDAwMCByb3dzIG9mIGRhdGEgZnJvbSB0aGUgc2VydmVyYCk7XHJcbiAgICB9XHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICAvLyBNb2NrIHRvZG86IGNsZWFuLXVwXHJcbiAgICAgICAgdGhpcy5fbG9nKGBoZWF2eS1sb2FkZXIgJHt0aGlzLmlkfSBkZXN0cm95ZWQsIGNsZWFuaW5nIHVwYCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9sb2cobXNnOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmxvZ3MucHVzaChtc2cpO1xyXG4gICAgICAgIHRoaXMuX3RpY2soKTtcclxuICAgIH1cclxuICAgIC8vIFRyaWdnZXJzIHRoZSBuZXh0IHJvdW5kIG9mIEFuZ3VsYXIgY2hhbmdlIGRldGVjdGlvblxyXG4gICAgLy8gYWZ0ZXIgb25lIHR1cm4gb2YgdGhlIGJyb3dzZXIgZXZlbnQgbG9vcFxyXG4gICAgLy8gZW5zdXJpbmcgZGlzcGxheSBvZiBtc2cgYWRkZWQgaW4gb25EZXN0cm95XHJcbiAgICBwcml2YXRlIF90aWNrKCkgeyBzZXRUaW1lb3V0KCgpID0+IHsgfSwgMCk7IH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
