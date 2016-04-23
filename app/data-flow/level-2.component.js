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
    var core_1, core_2;
    var Leve12Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            Leve12Component = (function () {
                function Leve12Component() {
                    this.changed = new core_1.EventEmitter();
                }
                Leve12Component.prototype.onChange = function (value) {
                    this.changed.emit(value);
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], Leve12Component.prototype, "text", void 0);
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', Object)
                ], Leve12Component.prototype, "changed", void 0);
                Leve12Component = __decorate([
                    core_1.Component({
                        selector: 'level-2-component',
                        template: "\n    <h4>Level 2 Component</h4>\n    <input type=\"text\" #textElement value=\"{{text}}\">\n    \n    <button (click)=\"onChange(textElement.value)\" class=\"btn btn-primary btn-sm\">Change</button>\n     "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Leve12Component);
                return Leve12Component;
            }());
            exports_1("Leve12Component", Leve12Component);
        }
    }
});
//# sourceMappingURL=level-2.component.js.map