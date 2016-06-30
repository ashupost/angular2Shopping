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
    var JqueryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            JqueryComponent = (function () {
                function JqueryComponent(_elRef) {
                    this._elRef = _elRef;
                }
                JqueryComponent.prototype.ngOnInit = function () {
                    jQuery(this._elRef.nativeElement).find('button').on("click", function () {
                        alert('working');
                    });
                    jQuery(this._elRef.nativeElement).find('p:last').addClass("selected highlight");
                };
                JqueryComponent = __decorate([
                    core_1.Component({
                        template: "\n       <button>Click me</button>\n       <p>Hello</p>\n       <p id=\"india\">and</p>\n       <p>Goodbye</p>\n    ",
                        styles: ['.highlight {background: yellow;} .selected {color: red;}']
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], JqueryComponent);
                return JqueryComponent;
            }());
            exports_1("JqueryComponent", JqueryComponent);
        }
    }
});
//# sourceMappingURL=jquery.component.js.map