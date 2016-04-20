System.register(['angular2/core', './highlight.directive'], function(exports_1, context_1) {
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
    var core_1, highlight_directive_1;
    var AttributeDirectiveAppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            }],
        execute: function() {
            AttributeDirectiveAppComponent = (function () {
                function AttributeDirectiveAppComponent() {
                }
                AttributeDirectiveAppComponent = __decorate([
                    core_1.Component({
                        template: "\n                    <h1>My First Attribute Directive</h1>\n                    <h4>Pick a highlight color</h4>\n                    <div>\n                      <input type=\"radio\" name=\"colors\" (click)=\"color='lightgreen'\">Green\n                      <input type=\"radio\" name=\"colors\" (click)=\"color='yellow'\">Yellow\n                      <input type=\"radio\" name=\"colors\" (click)=\"color='cyan'\">Cyan\n                    </div>\n                    \n                    <p [myHighlight]=\"color\">Highlight me!</p>\n                    <p [myHighlight]=\"color\" [defaultColor]=\"'violet'\">Highlight me too!</p>\n    ",
                        directives: [highlight_directive_1.HighlightDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AttributeDirectiveAppComponent);
                return AttributeDirectiveAppComponent;
            }());
            exports_1("AttributeDirectiveAppComponent", AttributeDirectiveAppComponent);
        }
    }
});
//# sourceMappingURL=attrubute-directive.app.component.js.map