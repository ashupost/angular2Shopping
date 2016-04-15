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
                        template: "\n     <section style=\"padding: 10px 0; color: #FFFFFF; background-color: #0f7595; margin: 10px 20px;\">\n         <di-level1-component></di-level1-component>\n     </section>\n     <section style=\"padding: 10px 0; color: #FFFFFF; background-color: #0f7595; margin: 10px 20px;\">\n         <di-level2-component></di-level2-component>\n     </section>\n    ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpL2RpLW1hc3Rlci5jb21wb21lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBQUE7Z0JBQ0EsQ0FBQztnQkFiRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSx3V0FPVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyx1Q0FBaUIsRUFBRSx1Q0FBaUIsQ0FBQztxQkFFckQsQ0FBQzs7cUNBQUE7Z0JBRUYsd0JBQUM7WUFBRCxDQURBLEFBQ0MsSUFBQTtZQURELGlEQUNDLENBQUEiLCJmaWxlIjoiZGkvZGktbWFzdGVyLmNvbXBvbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtESUxldmVsMUNvbXBvbmVudH0gZnJvbSBcIi4vZGktbGV2ZWwxLmNvbXBvbWVudFwiO1xyXG5pbXBvcnQge0RJTGV2ZWwyQ29tcG9uZW50fSBmcm9tIFwiLi9kaS1sZXZlbDIuY29tcG9tZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgPHNlY3Rpb24gc3R5bGU9XCJwYWRkaW5nOiAxMHB4IDA7IGNvbG9yOiAjRkZGRkZGOyBiYWNrZ3JvdW5kLWNvbG9yOiAjMGY3NTk1OyBtYXJnaW46IDEwcHggMjBweDtcIj5cclxuICAgICAgICAgPGRpLWxldmVsMS1jb21wb25lbnQ+PC9kaS1sZXZlbDEtY29tcG9uZW50PlxyXG4gICAgIDwvc2VjdGlvbj5cclxuICAgICA8c2VjdGlvbiBzdHlsZT1cInBhZGRpbmc6IDEwcHggMDsgY29sb3I6ICNGRkZGRkY7IGJhY2tncm91bmQtY29sb3I6ICMwZjc1OTU7IG1hcmdpbjogMTBweCAyMHB4O1wiPlxyXG4gICAgICAgICA8ZGktbGV2ZWwyLWNvbXBvbmVudD48L2RpLWxldmVsMi1jb21wb25lbnQ+XHJcbiAgICAgPC9zZWN0aW9uPlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtESUxldmVsMUNvbXBvbmVudCwgRElMZXZlbDJDb21wb25lbnRdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgRElNYXN0ZXJDb21wb25lbnQge1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
