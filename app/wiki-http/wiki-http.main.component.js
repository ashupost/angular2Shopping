System.register(['angular2/core', "./toh.component", "./wiki.component", "./wiki-smart.component"], function(exports_1, context_1) {
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
    var core_1, toh_component_1, wiki_component_1, wiki_smart_component_1;
    var WikiHttpMainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (toh_component_1_1) {
                toh_component_1 = toh_component_1_1;
            },
            function (wiki_component_1_1) {
                wiki_component_1 = wiki_component_1_1;
            },
            function (wiki_smart_component_1_1) {
                wiki_smart_component_1 = wiki_smart_component_1_1;
            }],
        execute: function() {
            WikiHttpMainComponent = (function () {
                function WikiHttpMainComponent() {
                }
                WikiHttpMainComponent = __decorate([
                    core_1.Component({
                        template: "\n    <my-wiki-smart>WikiSmart Loading...</my-wiki-smart>\n    <my-toh>ToH Loading...</my-toh>\n    <my-wiki>Wiki Loading...</my-wiki>\n  \n    ",
                        directives: [toh_component_1.TohComponent, wiki_component_1.WikiComponent, wiki_smart_component_1.WikiSmartComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WikiHttpMainComponent);
                return WikiHttpMainComponent;
            }());
            exports_1("WikiHttpMainComponent", WikiHttpMainComponent);
        }
    }
});
//# sourceMappingURL=wiki-http.main.component.js.map