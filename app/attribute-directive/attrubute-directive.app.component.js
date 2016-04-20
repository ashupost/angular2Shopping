System.register(['angular2/core', './highlight.directive', "./attrubute-description.component"], function(exports_1, context_1) {
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
    var core_1, highlight_directive_1, attrubute_description_component_1;
    var AttributeDirectiveAppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            },
            function (attrubute_description_component_1_1) {
                attrubute_description_component_1 = attrubute_description_component_1_1;
            }],
        execute: function() {
            AttributeDirectiveAppComponent = (function () {
                function AttributeDirectiveAppComponent() {
                }
                AttributeDirectiveAppComponent = __decorate([
                    core_1.Component({
                        template: "\n                    <h1>My First Attribute Directive</h1>\n                    <h4>Pick a highlight color</h4>\n                    <div>\n                      <input type=\"radio\" name=\"colors\" (click)=\"color='lightgreen'\">Green\n                      <input type=\"radio\" name=\"colors\" (click)=\"color='yellow'\">Yellow\n                      <input type=\"radio\" name=\"colors\" (click)=\"color='cyan'\">Cyan\n                    </div>\n                    \n                    <p [myHighlight]=\"color\">Highlight me!</p>\n                    <p [myHighlight]=\"color\" [defaultColor]=\"'violet'\">Highlight me too!</p>\n                    \n                    <my-attribute-description></my-attribute-description>\n    ",
                        directives: [highlight_directive_1.HighlightDirective, attrubute_description_component_1.AttributeDirectiveDescriptionComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AttributeDirectiveAppComponent);
                return AttributeDirectiveAppComponent;
            }());
            exports_1("AttributeDirectiveAppComponent", AttributeDirectiveAppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS1kaXJlY3RpdmUvYXR0cnVidXRlLWRpcmVjdGl2ZS5hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBc0JBO2dCQUFBO2dCQUE4QyxDQUFDO2dCQWxCL0M7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsc3VCQWFUO3dCQUNELFVBQVUsRUFBRSxDQUFDLHdDQUFrQixFQUFFLHdFQUFzQyxDQUFDO3FCQUMzRSxDQUFDOztrREFBQTtnQkFFNEMscUNBQUM7WUFBRCxDQUE5QyxBQUErQyxJQUFBO1lBQS9DLDJFQUErQyxDQUFBIiwiZmlsZSI6ImF0dHJpYnV0ZS1kaXJlY3RpdmUvYXR0cnVidXRlLWRpcmVjdGl2ZS5hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0hpZ2hsaWdodERpcmVjdGl2ZX0gZnJvbSAnLi9oaWdobGlnaHQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtBdHRyaWJ1dGVEaXJlY3RpdmVEZXNjcmlwdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vYXR0cnVidXRlLWRlc2NyaXB0aW9uLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5NeSBGaXJzdCBBdHRyaWJ1dGUgRGlyZWN0aXZlPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+UGljayBhIGhpZ2hsaWdodCBjb2xvcjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY29sb3JzXCIgKGNsaWNrKT1cImNvbG9yPSdsaWdodGdyZWVuJ1wiPkdyZWVuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNvbG9yc1wiIChjbGljayk9XCJjb2xvcj0neWVsbG93J1wiPlllbGxvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjb2xvcnNcIiAoY2xpY2spPVwiY29sb3I9J2N5YW4nXCI+Q3lhblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxwIFtteUhpZ2hsaWdodF09XCJjb2xvclwiPkhpZ2hsaWdodCBtZSE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgW215SGlnaGxpZ2h0XT1cImNvbG9yXCIgW2RlZmF1bHRDb2xvcl09XCIndmlvbGV0J1wiPkhpZ2hsaWdodCBtZSB0b28hPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxteS1hdHRyaWJ1dGUtZGVzY3JpcHRpb24+PC9teS1hdHRyaWJ1dGUtZGVzY3JpcHRpb24+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW0hpZ2hsaWdodERpcmVjdGl2ZSwgQXR0cmlidXRlRGlyZWN0aXZlRGVzY3JpcHRpb25Db21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlRGlyZWN0aXZlQXBwQ29tcG9uZW50IHsgfVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
