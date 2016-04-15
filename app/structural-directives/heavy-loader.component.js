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
                    this._log("heavy-loader " + this.id + " initialized,\n      loading 10,000 rows of data from the server");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnVjdHVyYWwtZGlyZWN0aXZlcy9oZWF2eS1sb2FkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7UUFDSSxNQUFNOzs7Ozs7O1lBQU4sTUFBTSxHQUFHLENBQUMsQ0FBQztZQUtmO2dCQUFBO29CQUNJLE9BQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQztnQkFtQmxCLENBQUM7Z0JBakJHLHVDQUFRLEdBQVI7b0JBQ0kscURBQXFEO29CQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFnQixJQUFJLENBQUMsRUFBRSxxRUFDUyxDQUFDLENBQUM7Z0JBQ2hELENBQUM7Z0JBQ0QsMENBQVcsR0FBWDtvQkFDSSxzQkFBc0I7b0JBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWdCLElBQUksQ0FBQyxFQUFFLDRCQUF5QixDQUFDLENBQUM7Z0JBQ2hFLENBQUM7Z0JBQ08sbUNBQUksR0FBWixVQUFhLEdBQVc7b0JBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNwQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2pCLENBQUM7Z0JBQ0Qsc0RBQXNEO2dCQUN0RCwyQ0FBMkM7Z0JBQzNDLDZDQUE2QztnQkFDckMsb0NBQUssR0FBYixjQUFrQixVQUFVLENBQUMsY0FBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQWpCN0M7b0JBQUMsWUFBSyxFQUFFOztrRUFBQTtnQkFOWjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsNENBQTRDO3FCQUN6RCxDQUFDOzt3Q0FBQTtnQkFxQkYsMkJBQUM7WUFBRCxDQXBCQSxBQW9CQyxJQUFBO1lBcEJELHVEQW9CQyxDQUFBIiwiZmlsZSI6InN0cnVjdHVyYWwtZGlyZWN0aXZlcy9oZWF2eS1sb2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5sZXQgbmV4dElkID0gMTtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hlYXZ5LWxvYWRlcicsXHJcbiAgICB0ZW1wbGF0ZTogJzxzcGFuPmhlYXZ5IGxvYWRlciAje3tpZH19IG9uIGR1dHkhPC9zcGFuPidcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlYXZ5TG9hZGVyQ29tcG9uZW50IHtcclxuICAgIGlkID0gbmV4dElkKys7XHJcbiAgICBASW5wdXQoKSBsb2dzOiBzdHJpbmdbXTtcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vIE1vY2sgdG9kbzogZ2V0IDEwLDAwMCByb3dzIG9mIGRhdGEgZnJvbSB0aGUgc2VydmVyXHJcbiAgICAgICAgdGhpcy5fbG9nKGBoZWF2eS1sb2FkZXIgJHt0aGlzLmlkfSBpbml0aWFsaXplZCxcclxuICAgICAgbG9hZGluZyAxMCwwMDAgcm93cyBvZiBkYXRhIGZyb20gdGhlIHNlcnZlcmApO1xyXG4gICAgfVxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gTW9jayB0b2RvOiBjbGVhbi11cFxyXG4gICAgICAgIHRoaXMuX2xvZyhgaGVhdnktbG9hZGVyICR7dGhpcy5pZH0gZGVzdHJveWVkLCBjbGVhbmluZyB1cGApO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfbG9nKG1zZzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5sb2dzLnB1c2gobXNnKTtcclxuICAgICAgICB0aGlzLl90aWNrKCk7XHJcbiAgICB9XHJcbiAgICAvLyBUcmlnZ2VycyB0aGUgbmV4dCByb3VuZCBvZiBBbmd1bGFyIGNoYW5nZSBkZXRlY3Rpb25cclxuICAgIC8vIGFmdGVyIG9uZSB0dXJuIG9mIHRoZSBicm93c2VyIGV2ZW50IGxvb3BcclxuICAgIC8vIGVuc3VyaW5nIGRpc3BsYXkgb2YgbXNnIGFkZGVkIGluIG9uRGVzdHJveVxyXG4gICAgcHJpdmF0ZSBfdGljaygpIHsgc2V0VGltZW91dCgoKSA9PiB7IH0sIDApOyB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
