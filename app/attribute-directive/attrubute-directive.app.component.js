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
                        template: "\n                    <h1>My First Attribute Directive</h1>\n                    <h4>Pick a highlight color</h4>\n                    <div>\n                      <input type=\"radio\" name=\"colors\" (click)=\"color='lightgreen'\">Green\n                      <input type=\"radio\" name=\"colors\" (click)=\"color='yellow'\">Yellow\n                      <input type=\"radio\" name=\"colors\" (click)=\"color='cyan'\">Cyan\n                    </div>\n                    \n                    <p [myHighlight]=\"color\">Highlight me!</p>\n                    \n                    <p [myHighlight]=\"color\" [defaultColor]=\"'violet'\">\n                      Highlight me too!\n                    </p>\n    ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS1kaXJlY3RpdmUvYXR0cnVidXRlLWRpcmVjdGl2ZS5hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBdUJBO2dCQUFBO2dCQUE4QyxDQUFDO2dCQXBCL0M7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUseXNCQWNUO3dCQUVELFVBQVUsRUFBRSxDQUFDLHdDQUFrQixDQUFDO3FCQUNuQyxDQUFDOztrREFBQTtnQkFFNEMscUNBQUM7WUFBRCxDQUE5QyxBQUErQyxJQUFBO1lBQS9DLDJFQUErQyxDQUFBIiwiZmlsZSI6ImF0dHJpYnV0ZS1kaXJlY3RpdmUvYXR0cnVidXRlLWRpcmVjdGl2ZS5hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0hpZ2hsaWdodERpcmVjdGl2ZX0gZnJvbSAnLi9oaWdobGlnaHQuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgICAgICAgICA8aDE+TXkgRmlyc3QgQXR0cmlidXRlIERpcmVjdGl2ZTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PlBpY2sgYSBoaWdobGlnaHQgY29sb3I8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNvbG9yc1wiIChjbGljayk9XCJjb2xvcj0nbGlnaHRncmVlbidcIj5HcmVlblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjb2xvcnNcIiAoY2xpY2spPVwiY29sb3I9J3llbGxvdydcIj5ZZWxsb3dcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY29sb3JzXCIgKGNsaWNrKT1cImNvbG9yPSdjeWFuJ1wiPkN5YW5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8cCBbbXlIaWdobGlnaHRdPVwiY29sb3JcIj5IaWdobGlnaHQgbWUhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxwIFtteUhpZ2hsaWdodF09XCJjb2xvclwiIFtkZWZhdWx0Q29sb3JdPVwiJ3Zpb2xldCdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEhpZ2hsaWdodCBtZSB0b28hXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgYCxcclxuXHJcbiAgICBkaXJlY3RpdmVzOiBbSGlnaGxpZ2h0RGlyZWN0aXZlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZURpcmVjdGl2ZUFwcENvbXBvbmVudCB7IH1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
