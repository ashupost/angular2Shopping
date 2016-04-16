System.register(['angular2/core', "./http-rest.data.service"], function(exports_1, context_1) {
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
    var core_1, http_rest_data_service_1;
    var HTTPRestMasterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_rest_data_service_1_1) {
                http_rest_data_service_1 = http_rest_data_service_1_1;
            }],
        execute: function() {
            HTTPRestMasterComponent = (function () {
                function HTTPRestMasterComponent(_dataService) {
                    this._dataService = _dataService;
                }
                HTTPRestMasterComponent.prototype.getHTTPCall = function () {
                    var _this = this;
                    this._dataService.getCall()
                        .subscribe(function (data) { return _this.getData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("finished HTTP get Call"); });
                };
                HTTPRestMasterComponent = __decorate([
                    core_1.Component({
                        template: "\n      <button (click)=\"getHTTPCall()\">Get REST CALL SHOW TIME</button>\n      <h4>{{getData}}</h4>\n    ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAtcmVzdC9odHRwLXJlc3QubWFzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQUVJLGlDQUFvQixZQUFpQztvQkFBakMsaUJBQVksR0FBWixZQUFZLENBQXFCO2dCQUNyRCxDQUFDO2dCQUVELDZDQUFXLEdBQVg7b0JBQUEsaUJBT0M7b0JBTkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7eUJBQ3RCLFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBbkMsQ0FBbUMsRUFDM0MsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQVosQ0FBWSxFQUNyQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFyQyxDQUFxQyxDQUM5QyxDQUFDO2dCQUNWLENBQUM7Z0JBcEJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLDhHQUdUO3dCQUNELFNBQVMsRUFBRSxDQUFDLDRDQUFtQixDQUFDO3FCQUVuQyxDQUFDOzsyQ0FBQTtnQkFjRiw4QkFBQztZQUFELENBYkEsQUFhQyxJQUFBO1lBYkQsNkRBYUMsQ0FBQSIsImZpbGUiOiJodHRwLXJlc3QvaHR0cC1yZXN0Lm1hc3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7SFRUUFJlc3REYXRhU2VydmljZX0gZnJvbSBcIi4vaHR0cC1yZXN0LmRhdGEuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8YnV0dG9uIChjbGljayk9XCJnZXRIVFRQQ2FsbCgpXCI+R2V0IFJFU1QgQ0FMTCBTSE9XIFRJTUU8L2J1dHRvbj5cclxuICAgICAgPGg0Pnt7Z2V0RGF0YX19PC9oND5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFtIVFRQUmVzdERhdGFTZXJ2aWNlXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIEhUVFBSZXN0TWFzdGVyQ29tcG9uZW50IHtcclxuICAgIGdldERhdGE6c3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YVNlcnZpY2U6IEhUVFBSZXN0RGF0YVNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXRIVFRQQ2FsbCgpIHtcclxuICAgICAgICB0aGlzLl9kYXRhU2VydmljZS5nZXRDYWxsKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5nZXREYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBhbGVydChlcnJvciksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImZpbmlzaGVkIEhUVFAgZ2V0IENhbGxcIilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
