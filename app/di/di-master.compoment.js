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
var di_level1_compoment_1 = require("./di-level1.compoment");
var di_level2_compoment_1 = require("./di-level2.compoment");
var DIMasterComponent = (function () {
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
exports.DIMasterComponent = DIMasterComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpL2RpLW1hc3Rlci5jb21wb21lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4QyxvQ0FBZ0MsdUJBQXVCLENBQUMsQ0FBQTtBQUN4RCxvQ0FBZ0MsdUJBQXVCLENBQUMsQ0FBQTtBQWN4RDtJQUFBO0lBQ0EsQ0FBQztJQVpEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnUUFPVDtZQUNELFVBQVUsRUFBRSxDQUFDLHVDQUFpQixFQUFFLHVDQUFpQixDQUFDO1NBQ3JELENBQUM7O3lCQUFBO0lBRUYsd0JBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLHlCQUFpQixvQkFDN0IsQ0FBQSIsImZpbGUiOiJkaS9kaS1tYXN0ZXIuY29tcG9tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0RJTGV2ZWwxQ29tcG9uZW50fSBmcm9tIFwiLi9kaS1sZXZlbDEuY29tcG9tZW50XCI7XHJcbmltcG9ydCB7RElMZXZlbDJDb21wb25lbnR9IGZyb20gXCIuL2RpLWxldmVsMi5jb21wb21lbnRcIjtcclxuaW1wb3J0IHtEYXRhU2VydmljZX0gZnJvbSBcIi4vZGktZGF0YS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgPHNlY3Rpb24gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjMGY3NTk1O1wiPlxyXG4gICAgICAgICA8ZGktbGV2ZWwxLWNvbXBvbmVudD48L2RpLWxldmVsMS1jb21wb25lbnQ+XHJcbiAgICAgPC9zZWN0aW9uPlxyXG4gICAgIDxzZWN0aW9uIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogIzBmNzU5NTtcIj5cclxuICAgICAgICAgPGRpLWxldmVsMi1jb21wb25lbnQ+PC9kaS1sZXZlbDItY29tcG9uZW50PlxyXG4gICAgIDwvc2VjdGlvbj5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbRElMZXZlbDFDb21wb25lbnQsIERJTGV2ZWwyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRElNYXN0ZXJDb21wb25lbnQge1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
