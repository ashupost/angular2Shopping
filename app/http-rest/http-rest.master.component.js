System.register(['angular2/core', "./http-rest.data.service", "../di/di-level2.compoment"], function(exports_1, context_1) {
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
    var core_1, http_rest_data_service_1, di_level2_compoment_1;
    var HTTPRestMasterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_rest_data_service_1_1) {
                http_rest_data_service_1 = http_rest_data_service_1_1;
            },
            function (di_level2_compoment_1_1) {
                di_level2_compoment_1 = di_level2_compoment_1_1;
            }],
        execute: function() {
            HTTPRestMasterComponent = (function () {
                function HTTPRestMasterComponent(_dataService) {
                    this._dataService = _dataService;
                }
                HTTPRestMasterComponent.prototype.getHTTPCall = function () {
                    var _this = this;
                    this._dataService.getCall()
                        .subscribe(function (data) { return _this.getData = JSON.stringify(data); }, function (error) { return _this.error = error; }, function () { return console.log("finished HTTP get Call"); });
                };
                HTTPRestMasterComponent = __decorate([
                    core_1.Component({
                        template: "\n      <button (click)=\"getHTTPCall()\">Get REST CALL SHOW TIME</button>\n      <h4>{{getData}}</h4>\n       <div class=\"alert alert-info\">\n          <h4>{{error}}</h4>\n      </div>\n       <section style=\"background-color: #0f7595;\">\n         <di-level2-component></di-level2-component>\n     </section>\n    ",
                        directives: [di_level2_compoment_1.DILevel2Component],
                        providers: [http_rest_data_service_1.HTTPRestDataService]
                    }), 
                    __metadata('design:paramtypes', [http_rest_data_service_1.HTTPRestDataService])
                ], HTTPRestMasterComponent);
                return HTTPRestMasterComponent;
            }());
            exports_1("HTTPRestMasterComponent", HTTPRestMasterComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAtcmVzdC9odHRwLXJlc3QubWFzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW9CQTtnQkFHSSxpQ0FBb0IsWUFBaUM7b0JBQWpDLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtnQkFDckQsQ0FBQztnQkFFRCw2Q0FBVyxHQUFYO29CQUFBLGlCQU9DO29CQU5HLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO3lCQUN0QixTQUFTLENBQ04sVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQW5DLENBQW1DLEVBQzNDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBUSxLQUFLLEVBQXZCLENBQXVCLEVBQ2hDLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLEVBQXJDLENBQXFDLENBQzlDLENBQUM7Z0JBQ1YsQ0FBQztnQkE1Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsaVVBU1Q7d0JBQ0QsVUFBVSxFQUFFLENBQUMsdUNBQWlCLENBQUM7d0JBQy9CLFNBQVMsRUFBRSxDQUFDLDRDQUFtQixDQUFDO3FCQUVuQyxDQUFDOzsyQ0FBQTtnQkFlRiw4QkFBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsNkRBY0MsQ0FBQSIsImZpbGUiOiJodHRwLXJlc3QvaHR0cC1yZXN0Lm1hc3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7SFRUUFJlc3REYXRhU2VydmljZX0gZnJvbSBcIi4vaHR0cC1yZXN0LmRhdGEuc2VydmljZVwiO1xyXG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tIFwiLi4vZGkvZGktZGF0YS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RElMZXZlbDJDb21wb25lbnR9IGZyb20gXCIuLi9kaS9kaS1sZXZlbDIuY29tcG9tZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxidXR0b24gKGNsaWNrKT1cImdldEhUVFBDYWxsKClcIj5HZXQgUkVTVCBDQUxMIFNIT1cgVElNRTwvYnV0dG9uPlxyXG4gICAgICA8aDQ+e3tnZXREYXRhfX08L2g0PlxyXG4gICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm9cIj5cclxuICAgICAgICAgIDxoND57e2Vycm9yfX08L2g0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgIDxzZWN0aW9uIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogIzBmNzU5NTtcIj5cclxuICAgICAgICAgPGRpLWxldmVsMi1jb21wb25lbnQ+PC9kaS1sZXZlbDItY29tcG9uZW50PlxyXG4gICAgIDwvc2VjdGlvbj5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbRElMZXZlbDJDb21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiBbSFRUUFJlc3REYXRhU2VydmljZV1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIVFRQUmVzdE1hc3RlckNvbXBvbmVudCB7XHJcbiAgICBnZXREYXRhOnN0cmluZztcclxuICAgIGVycm9yOmFueTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBIVFRQUmVzdERhdGFTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SFRUUENhbGwoKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YVNlcnZpY2UuZ2V0Q2FsbCgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHRoaXMuZ2V0RGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvciA9IDxhbnk+ZXJyb3IsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImZpbmlzaGVkIEhUVFAgZ2V0IENhbGxcIilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
