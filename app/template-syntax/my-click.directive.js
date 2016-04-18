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
    var MyClickDirective, MyClickDirective2;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyClickDirective = (function () {
                function MyClickDirective(el) {
                    var _this = this;
                    this.clicks = new core_1.EventEmitter(); //  @Output(alias) propertyName = ...
                    this._toggle = false;
                    el.nativeElement
                        .addEventListener('click', function (event) {
                        _this._toggle = !_this._toggle;
                        _this.clicks.emit(_this._toggle ? 'Click!' : '');
                    });
                }
                __decorate([
                    core_1.Output('myClick'), 
                    __metadata('design:type', Object)
                ], MyClickDirective.prototype, "clicks", void 0);
                MyClickDirective = __decorate([
                    core_1.Directive({ selector: '[myClick]' }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], MyClickDirective);
                return MyClickDirective;
            }());
            exports_1("MyClickDirective", MyClickDirective);
            MyClickDirective2 = (function () {
                function MyClickDirective2(el) {
                    var _this = this;
                    this.clicks = new core_1.EventEmitter();
                    this._toggle = false;
                    el.nativeElement
                        .addEventListener('click', function (event) {
                        _this._toggle = !_this._toggle;
                        _this.clicks.emit(_this._toggle ? 'Click2!' : '');
                    });
                }
                MyClickDirective2 = __decorate([
                    core_1.Directive({
                        selector: '[myClick2]',
                        outputs: ['clicks:myClick'] // propertyName:alias
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], MyClickDirective2);
                return MyClickDirective2;
            }());
            exports_1("MyClickDirective2", MyClickDirective2);
        }
    }
});
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLXN5bnRheC9teS1jbGljay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFHSSwwQkFBWSxFQUFjO29CQUg5QixpQkFXQztvQkFWc0IsV0FBTSxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDLENBQUMscUNBQXFDO29CQVM3RixZQUFPLEdBQUcsS0FBSyxDQUFDO29CQU5aLEVBQUUsQ0FBQyxhQUFhO3lCQUNYLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQVc7d0JBQ25DLEtBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDO3dCQUM3QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQztvQkFDbkQsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQztnQkFSRDtvQkFBQyxhQUFNLENBQUMsU0FBUyxDQUFDOztnRUFBQTtnQkFGdEI7b0JBQUMsZ0JBQVMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxXQUFXLEVBQUMsQ0FBQzs7b0NBQUE7Z0JBWWxDLHVCQUFDO1lBQUQsQ0FYQSxBQVdDLElBQUE7WUFYRCwrQ0FXQyxDQUFBO1lBTUQ7Z0JBR0ksMkJBQVksRUFBYztvQkFIOUIsaUJBV0M7b0JBVkcsV0FBTSxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO29CQVNwQyxZQUFPLEdBQUcsS0FBSyxDQUFDO29CQU5aLEVBQUUsQ0FBQyxhQUFhO3lCQUNYLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQVc7d0JBQ25DLEtBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDO3dCQUM3QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQztvQkFDcEQsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQztnQkFiTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxZQUFZO3dCQUNyQixPQUFPLEVBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFFLHFCQUFxQjtxQkFDcEQsQ0FBQzs7cUNBQUE7Z0JBWUYsd0JBQUM7WUFBRCxDQVhBLEFBV0MsSUFBQTtZQVhELGlEQVdDLENBQUE7Ozs7QUFFRDs7OztHQUlHIiwiZmlsZSI6InRlbXBsYXRlLXN5bnRheC9teS1jbGljay5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgIE91dHB1dCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOidbbXlDbGlja10nfSlcclxuZXhwb3J0IGNsYXNzIE15Q2xpY2tEaXJlY3RpdmUge1xyXG4gICAgQE91dHB1dCgnbXlDbGljaycpIGNsaWNrcyA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpOyAvLyAgQE91dHB1dChhbGlhcykgcHJvcGVydHlOYW1lID0gLi4uXHJcblxyXG4gICAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYpe1xyXG4gICAgICAgIGVsLm5hdGl2ZUVsZW1lbnRcclxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90b2dnbGUgPSAhdGhpcy5fdG9nZ2xlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja3MuZW1pdCh0aGlzLl90b2dnbGUgPyAnQ2xpY2shJyA6ICcnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfdG9nZ2xlID0gZmFsc2U7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6J1tteUNsaWNrMl0nLFxyXG4gICAgb3V0cHV0czpbJ2NsaWNrczpteUNsaWNrJ10gIC8vIHByb3BlcnR5TmFtZTphbGlhc1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTXlDbGlja0RpcmVjdGl2ZTIge1xyXG4gICAgY2xpY2tzID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYpe1xyXG4gICAgICAgIGVsLm5hdGl2ZUVsZW1lbnRcclxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90b2dnbGUgPSAhdGhpcy5fdG9nZ2xlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja3MuZW1pdCh0aGlzLl90b2dnbGUgPyAnQ2xpY2syIScgOiAnJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX3RvZ2dsZSA9IGZhbHNlO1xyXG59XHJcblxyXG4vKlxyXG4gQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcclxuIGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHA6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuICovIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
