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
var highlight_directive_1 = require('./highlight.directive');
var attrubute_description_component_1 = require("./attrubute-description.component");
var AttributeDirectiveAppComponent = (function () {
    function AttributeDirectiveAppComponent() {
    }
    AttributeDirectiveAppComponent = __decorate([
        core_1.Component({
            template: "\n                    <h1>My First Attribute Directive</h1>\n                    <h4>Pick a highlight color</h4>\n                    <div>\n                      <input type=\"radio\" name=\"colors\" (click)=\"color='lightgreen'\">Green\n                      <input type=\"radio\" name=\"colors\" (click)=\"color='yellow'\">Yellow\n                      <input type=\"radio\" name=\"colors\" (click)=\"color='cyan'\">Cyan\n                    </div>\n                    <p [myHighlight]=\"color\">Highlight me!</p>\n                    <p [myHighlight]=\"color\" [defaultColor]=\"'violet'\">Highlight me too!</p>\n                    <button class=\"btn btn-info\" [myHighlight]=\"color\" [defaultColor]=\"'violet'\">Submit</button>\n                    <my-attribute-description></my-attribute-description>\n    ",
            directives: [highlight_directive_1.HighlightDirective, attrubute_description_component_1.AttributeDirectiveDescriptionComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AttributeDirectiveAppComponent);
    return AttributeDirectiveAppComponent;
}());
exports.AttributeDirectiveAppComponent = AttributeDirectiveAppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS1kaXJlY3RpdmUvYXR0cnVidXRlLWRpcmVjdGl2ZS5hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsb0NBQWlDLHVCQUF1QixDQUFDLENBQUE7QUFDekQsZ0RBQXFELG1DQUFtQyxDQUFDLENBQUE7QUFtQnpGO0lBQUE7SUFBOEMsQ0FBQztJQWpCL0M7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGt6QkFZVDtZQUNELFVBQVUsRUFBRSxDQUFDLHdDQUFrQixFQUFFLHdFQUFzQyxDQUFDO1NBQzNFLENBQUM7O3NDQUFBO0lBRTRDLHFDQUFDO0FBQUQsQ0FBOUMsQUFBK0MsSUFBQTtBQUFsQyxzQ0FBOEIsaUNBQUksQ0FBQSIsImZpbGUiOiJhdHRyaWJ1dGUtZGlyZWN0aXZlL2F0dHJ1YnV0ZS1kaXJlY3RpdmUuYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtIaWdobGlnaHREaXJlY3RpdmV9IGZyb20gJy4vaGlnaGxpZ2h0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7QXR0cmlidXRlRGlyZWN0aXZlRGVzY3JpcHRpb25Db21wb25lbnR9IGZyb20gXCIuL2F0dHJ1YnV0ZS1kZXNjcmlwdGlvbi5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgICAgICAgICA8aDE+TXkgRmlyc3QgQXR0cmlidXRlIERpcmVjdGl2ZTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PlBpY2sgYSBoaWdobGlnaHQgY29sb3I8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNvbG9yc1wiIChjbGljayk9XCJjb2xvcj0nbGlnaHRncmVlbidcIj5HcmVlblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjb2xvcnNcIiAoY2xpY2spPVwiY29sb3I9J3llbGxvdydcIj5ZZWxsb3dcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY29sb3JzXCIgKGNsaWNrKT1cImNvbG9yPSdjeWFuJ1wiPkN5YW5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBbbXlIaWdobGlnaHRdPVwiY29sb3JcIj5IaWdobGlnaHQgbWUhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIFtteUhpZ2hsaWdodF09XCJjb2xvclwiIFtkZWZhdWx0Q29sb3JdPVwiJ3Zpb2xldCdcIj5IaWdobGlnaHQgbWUgdG9vITwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCIgW215SGlnaGxpZ2h0XT1cImNvbG9yXCIgW2RlZmF1bHRDb2xvcl09XCIndmlvbGV0J1wiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxteS1hdHRyaWJ1dGUtZGVzY3JpcHRpb24+PC9teS1hdHRyaWJ1dGUtZGVzY3JpcHRpb24+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW0hpZ2hsaWdodERpcmVjdGl2ZSwgQXR0cmlidXRlRGlyZWN0aXZlRGVzY3JpcHRpb25Db21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlRGlyZWN0aXZlQXBwQ29tcG9uZW50IHsgfVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
