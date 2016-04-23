System.register(['angular2/core', "./level-1.component"], function(exports_1, context_1) {
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
    var core_1, level_1_component_1;
    var DataFlowMasterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (level_1_component_1_1) {
                level_1_component_1 = level_1_component_1_1;
            }],
        execute: function() {
            DataFlowMasterComponent = (function () {
                function DataFlowMasterComponent() {
                }
                DataFlowMasterComponent.prototype.onChange = function (value) {
                    this.text = value;
                };
                DataFlowMasterComponent = __decorate([
                    core_1.Component({
                        template: "\n<div style=\"background-color: #Bb97c4;\">\n    <h4>Master Component</h4>\n    <input type=\"text\" #textInput value=\"{{text}}\">\n    <button (click)=\"onChange(textInput.value)\" class=\"btn btn-primary btn-sm\">Change</button>\n    <br><br>\n    <div style=\"background-color: #Fb97c4; margin: 50px;\">\n         <level-1-component [text]=\"text\" (changed) = \"onChange($event)\"></level-1-component>\n    </div>\n    <div style=\"background-color: #Fb97c4; margin: 50px;\">\n        <level-1-component [text]=\"text\" (changed) = \"onChange($event)\"></level-1-component>\n    </div>\n    ",
                        directives: [level_1_component_1.Level1Component]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DataFlowMasterComponent);
                return DataFlowMasterComponent;
            }());
            exports_1("DataFlowMasterComponent", DataFlowMasterComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEtZmxvdy9tYXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBO2dCQUVJO2dCQUVBLENBQUM7Z0JBQ0QsMENBQVEsR0FBUixVQUFTLEtBQUs7b0JBQ1YsSUFBSSxDQUFDLElBQUksR0FBRSxLQUFLLENBQUM7Z0JBQ3JCLENBQUM7Z0JBdkJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHVsQkFZVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxtQ0FBZSxDQUFDO3FCQUNoQyxDQUFDOzsyQ0FBQTtnQkFTRiw4QkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQsNkRBUUMsQ0FBQSIsImZpbGUiOiJkYXRhLWZsb3cvbWFzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtMZXZlbDFDb21wb25lbnR9IGZyb20gXCIuL2xldmVsLTEuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlOiBgXHJcbjxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjQmI5N2M0O1wiPlxyXG4gICAgPGg0Pk1hc3RlciBDb21wb25lbnQ8L2g0PlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3RleHRJbnB1dCB2YWx1ZT1cInt7dGV4dH19XCI+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJvbkNoYW5nZSh0ZXh0SW5wdXQudmFsdWUpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCI+Q2hhbmdlPC9idXR0b24+XHJcbiAgICA8YnI+PGJyPlxyXG4gICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNGYjk3YzQ7IG1hcmdpbjogNTBweDtcIj5cclxuICAgICAgICAgPGxldmVsLTEtY29tcG9uZW50IFt0ZXh0XT1cInRleHRcIiAoY2hhbmdlZCkgPSBcIm9uQ2hhbmdlKCRldmVudClcIj48L2xldmVsLTEtY29tcG9uZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI0ZiOTdjNDsgbWFyZ2luOiA1MHB4O1wiPlxyXG4gICAgICAgIDxsZXZlbC0xLWNvbXBvbmVudCBbdGV4dF09XCJ0ZXh0XCIgKGNoYW5nZWQpID0gXCJvbkNoYW5nZSgkZXZlbnQpXCI+PC9sZXZlbC0xLWNvbXBvbmVudD5cclxuICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtMZXZlbDFDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRhRmxvd01hc3RlckNvbXBvbmVudCB7XHJcbiAgICB0ZXh0OnN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgfVxyXG4gICAgb25DaGFuZ2UodmFsdWUpe1xyXG4gICAgICAgIHRoaXMudGV4dD0gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
