System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var nextId, HeavyLoaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            nextId = 1;
            HeavyLoaderComponent = (function () {
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
            exports_1("HeavyLoaderComponent", HeavyLoaderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnVjdHVyYWwtZGlyZWN0aXZlcy9oZWF2eS1sb2FkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7UUFDSSxNQUFNOzs7Ozs7O1lBQU4sTUFBTSxHQUFHLENBQUMsQ0FBQztZQUtmO2dCQUFBO29CQUNJLE9BQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQztnQkFrQmxCLENBQUM7Z0JBaEJHLHVDQUFRLEdBQVI7b0JBQ0kscURBQXFEO29CQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFnQixJQUFJLENBQUMsRUFBRSw4REFBMkQsQ0FBQyxDQUFDO2dCQUNsRyxDQUFDO2dCQUNELDBDQUFXLEdBQVg7b0JBQ0ksc0JBQXNCO29CQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFnQixJQUFJLENBQUMsRUFBRSw0QkFBeUIsQ0FBQyxDQUFDO2dCQUNoRSxDQUFDO2dCQUNPLG1DQUFJLEdBQVosVUFBYSxHQUFXO29CQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNqQixDQUFDO2dCQUNELHNEQUFzRDtnQkFDdEQsMkNBQTJDO2dCQUMzQyw2Q0FBNkM7Z0JBQ3JDLG9DQUFLLEdBQWIsY0FBa0IsVUFBVSxDQUFDLGNBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFoQjdDO29CQUFDLFlBQUssRUFBRTs7a0VBQUE7Z0JBTlo7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLDRDQUE0QztxQkFDekQsQ0FBQzs7d0NBQUE7Z0JBb0JGLDJCQUFDO1lBQUQsQ0FuQkEsQUFtQkMsSUFBQTtZQW5CRCx1REFtQkMsQ0FBQSIsImZpbGUiOiJzdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMvaGVhdnktbG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxubGV0IG5leHRJZCA9IDE7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdoZWF2eS1sb2FkZXInLFxyXG4gICAgdGVtcGxhdGU6ICc8c3Bhbj5oZWF2eSBsb2FkZXIgI3t7aWR9fSBvbiBkdXR5ITwvc3Bhbj4nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWF2eUxvYWRlckNvbXBvbmVudCB7XHJcbiAgICBpZCA9IG5leHRJZCsrO1xyXG4gICAgQElucHV0KCkgbG9nczogc3RyaW5nW107XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAvLyBNb2NrIHRvZG86IGdldCAxMCwwMDAgcm93cyBvZiBkYXRhIGZyb20gdGhlIHNlcnZlclxyXG4gICAgICAgIHRoaXMuX2xvZyhgaGVhdnktbG9hZGVyICR7dGhpcy5pZH0gaW5pdGlhbGl6ZWQsIGxvYWRpbmcgMTAsMDAwIHJvd3Mgb2YgZGF0YSBmcm9tIHRoZSBzZXJ2ZXJgKTtcclxuICAgIH1cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIC8vIE1vY2sgdG9kbzogY2xlYW4tdXBcclxuICAgICAgICB0aGlzLl9sb2coYGhlYXZ5LWxvYWRlciAke3RoaXMuaWR9IGRlc3Ryb3llZCwgY2xlYW5pbmcgdXBgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX2xvZyhtc2c6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubG9ncy5wdXNoKG1zZyk7XHJcbiAgICAgICAgdGhpcy5fdGljaygpO1xyXG4gICAgfVxyXG4gICAgLy8gVHJpZ2dlcnMgdGhlIG5leHQgcm91bmQgb2YgQW5ndWxhciBjaGFuZ2UgZGV0ZWN0aW9uXHJcbiAgICAvLyBhZnRlciBvbmUgdHVybiBvZiB0aGUgYnJvd3NlciBldmVudCBsb29wXHJcbiAgICAvLyBlbnN1cmluZyBkaXNwbGF5IG9mIG1zZyBhZGRlZCBpbiBvbkRlc3Ryb3lcclxuICAgIHByaXZhdGUgX3RpY2soKSB7IHNldFRpbWVvdXQoKCkgPT4geyB9LCAwKTsgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
