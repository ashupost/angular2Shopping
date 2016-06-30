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
//# sourceMappingURL=my-click.directive.js.map