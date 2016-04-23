System.register(['angular2/core', './level-2.component'], function(exports_1, context_1) {
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
    var core_1, core_2, level_2_component_1;
    var Level1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (level_2_component_1_1) {
                level_2_component_1 = level_2_component_1_1;
            }],
        execute: function() {
            Level1Component = (function () {
                function Level1Component() {
                    this.changed = new core_1.EventEmitter();
                }
                Level1Component.prototype.onChange = function (value) {
                    this.text = value;
                    this.changed.emit(value);
                };
                Level1Component.prototype.onLevel2Changed = function (value) {
                    this.text = value;
                    this.changed.emit(value);
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], Level1Component.prototype, "text", void 0);
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', Object)
                ], Level1Component.prototype, "changed", void 0);
                Level1Component = __decorate([
                    core_1.Component({
                        selector: 'level-1-component',
                        template: "\n  \n    <h4>Level 1 Component</h4>\n    <input type=\"text\" #textElement value=\"{{text}}\">\n    \n    <button (click)=\"onChange(textElement.value)\">Change</button>\n    <br><br>\n    <div style=\"background-color: #0b97c4; margin: 50px;\">\n         <level-2-component [text]=\"text\" (changed) = \"onLevel2Changed($event)\"></level-2-component>\n    </div>\n \n",
                        directives: [level_2_component_1.Leve12Component]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Level1Component);
                return Level1Component;
            }());
            exports_1("Level1Component", Level1Component);
        }
    }
});
//# sourceMappingURL=level-1.component.js.map