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
//# sourceMappingURL=master.component.js.map