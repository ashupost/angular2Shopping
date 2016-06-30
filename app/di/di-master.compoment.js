System.register(['angular2/core', "./di-level1.compoment", "./di-level2.compoment"], function(exports_1, context_1) {
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
    var core_1, di_level1_compoment_1, di_level2_compoment_1;
    var DIMasterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (di_level1_compoment_1_1) {
                di_level1_compoment_1 = di_level1_compoment_1_1;
            },
            function (di_level2_compoment_1_1) {
                di_level2_compoment_1 = di_level2_compoment_1_1;
            }],
        execute: function() {
            DIMasterComponent = (function () {
                function DIMasterComponent() {
                }
                DIMasterComponent = __decorate([
                    core_1.Component({
                        template: "\n     <section style=\"background-color: #0f7595;\">\n         <di-level1-component></di-level1-component>\n     </section>\n     <section style=\"background-color: #0f7595;\">\n         <di-level2-component></di-level2-component>\n     </section>\n    ",
                        directives: [di_level1_compoment_1.DILevel1Component, di_level2_compoment_1.DILevel2Component]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DIMasterComponent);
                return DIMasterComponent;
            }());
            exports_1("DIMasterComponent", DIMasterComponent);
        }
    }
});
//# sourceMappingURL=di-master.compoment.js.map