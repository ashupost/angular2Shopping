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
var core_1 = require('@angular/core');
var toh_component_1 = require("./toh.component");
var wiki_component_1 = require("./wiki.component");
var wiki_smart_component_1 = require("./wiki-smart.component");
var WikiHttpMainComponent = (function () {
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
exports.WikiHttpMainComponent = WikiHttpMainComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpa2ktaHR0cC93aWtpLWh0dHAubWFpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyw4QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3QywrQkFBNEIsa0JBQWtCLENBQUMsQ0FBQTtBQUMvQyxxQ0FBaUMsd0JBQXdCLENBQUMsQ0FBQTtBQVkxRDtJQUFBO0lBQ0EsQ0FBQztJQVhEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxrSkFLVDtZQUNELFVBQVUsRUFBRSxDQUFDLDRCQUFZLEVBQUMsOEJBQWEsRUFBRSx5Q0FBa0IsQ0FBQztTQUUvRCxDQUFDOzs2QkFBQTtJQUVGLDRCQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSw2QkFBcUIsd0JBQ2pDLENBQUEiLCJmaWxlIjoid2lraS1odHRwL3dpa2ktaHR0cC5tYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7VG9oQ29tcG9uZW50fSBmcm9tIFwiLi90b2guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7V2lraUNvbXBvbmVudH0gZnJvbSBcIi4vd2lraS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtXaWtpU21hcnRDb21wb25lbnR9IGZyb20gXCIuL3dpa2ktc21hcnQuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8bXktd2lraS1zbWFydD5XaWtpU21hcnQgTG9hZGluZy4uLjwvbXktd2lraS1zbWFydD5cclxuICAgIDxteS10b2g+VG9IIExvYWRpbmcuLi48L215LXRvaD5cclxuICAgIDxteS13aWtpPldpa2kgTG9hZGluZy4uLjwvbXktd2lraT5cclxuICBcclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbVG9oQ29tcG9uZW50LFdpa2lDb21wb25lbnQsIFdpa2lTbWFydENvbXBvbmVudF1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaWtpSHR0cE1haW5Db21wb25lbnQge1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
