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
                        template: "\n    <my-toh>ToH Loading...</my-toh>\n    <my-wiki>Wiki Loading...</my-wiki>\n    <my-wiki-smart>WikiSmart Loading...</my-wiki-smart>\n    ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpa2ktaHR0cC93aWtpLWh0dHAubWFpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFBQTtnQkFDQSxDQUFDO2dCQVZEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLDhJQUlUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDRCQUFZLEVBQUMsOEJBQWEsRUFBRSx5Q0FBa0IsQ0FBQztxQkFFL0QsQ0FBQzs7eUNBQUE7Z0JBRUYsNEJBQUM7WUFBRCxDQURBLEFBQ0MsSUFBQTtZQURELHlEQUNDLENBQUEiLCJmaWxlIjoid2lraS1odHRwL3dpa2ktaHR0cC5tYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSAgICAgICAgZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7VG9oQ29tcG9uZW50fSBmcm9tIFwiLi90b2guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7V2lraUNvbXBvbmVudH0gZnJvbSBcIi4vd2lraS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtXaWtpU21hcnRDb21wb25lbnR9IGZyb20gXCIuL3dpa2ktc21hcnQuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8bXktdG9oPlRvSCBMb2FkaW5nLi4uPC9teS10b2g+XHJcbiAgICA8bXktd2lraT5XaWtpIExvYWRpbmcuLi48L215LXdpa2k+XHJcbiAgICA8bXktd2lraS1zbWFydD5XaWtpU21hcnQgTG9hZGluZy4uLjwvbXktd2lraS1zbWFydD5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbVG9oQ29tcG9uZW50LFdpa2lDb21wb25lbnQsIFdpa2lTbWFydENvbXBvbmVudF1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaWtpSHR0cE1haW5Db21wb25lbnQge1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
