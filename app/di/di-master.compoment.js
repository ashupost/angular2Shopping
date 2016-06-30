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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpL2RpLW1hc3Rlci5jb21wb21lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4QyxvQ0FBZ0MsdUJBQXVCLENBQUMsQ0FBQTtBQUN4RCxvQ0FBZ0MsdUJBQXVCLENBQUMsQ0FBQTtBQWF4RDtJQUFBO0lBQ0EsQ0FBQztJQVpEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnUUFPVDtZQUNELFVBQVUsRUFBRSxDQUFDLHVDQUFpQixFQUFFLHVDQUFpQixDQUFDO1NBQ3JELENBQUM7O3lCQUFBO0lBRUYsd0JBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLHlCQUFpQixvQkFDN0IsQ0FBQSIsImZpbGUiOiJkaS9kaS1tYXN0ZXIuY29tcG9tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RJTGV2ZWwxQ29tcG9uZW50fSBmcm9tIFwiLi9kaS1sZXZlbDEuY29tcG9tZW50XCI7XHJcbmltcG9ydCB7RElMZXZlbDJDb21wb25lbnR9IGZyb20gXCIuL2RpLWxldmVsMi5jb21wb21lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICA8c2VjdGlvbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICMwZjc1OTU7XCI+XHJcbiAgICAgICAgIDxkaS1sZXZlbDEtY29tcG9uZW50PjwvZGktbGV2ZWwxLWNvbXBvbmVudD5cclxuICAgICA8L3NlY3Rpb24+XHJcbiAgICAgPHNlY3Rpb24gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjMGY3NTk1O1wiPlxyXG4gICAgICAgICA8ZGktbGV2ZWwyLWNvbXBvbmVudD48L2RpLWxldmVsMi1jb21wb25lbnQ+XHJcbiAgICAgPC9zZWN0aW9uPlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtESUxldmVsMUNvbXBvbmVudCwgRElMZXZlbDJDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBESU1hc3RlckNvbXBvbmVudCB7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
