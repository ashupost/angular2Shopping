System.register(['angular2/core', "angular2/common", "angular2/router", "./contact.service"], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, contact_service_1;
    var NewContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            }],
        execute: function() {
            NewContactComponent = (function () {
                function NewContactComponent(_dataService, _router, _routeParams, _formBuilder) {
                    this._dataService = _dataService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._formBuilder = _formBuilder;
                }
                NewContactComponent.prototype.ngOnInit = function () {
                    this.myForm = this._formBuilder.group({
                        'firstName': ['', common_1.Validators.required],
                        'lastName': [this._routeParams.get('lastName'), common_1.Validators.required]
                    });
                };
                NewContactComponent.prototype.onSubmit = function (value) {
                    console.log("value", this.myForm);
                    this._dataService.insertContact(value);
                    this._router.navigate(['MainContacts']);
                };
                NewContactComponent = __decorate([
                    core_1.Component({
                        template: "\n       <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit(myForm.value)\" >\n        <div>\n             <label for=\"firstName\" >First Name</label>\n             <input type=\"text\" id=\"firstName\" [ngFormControl]=\"myForm.controls['firstName']\" >\n         </div>\n         <div>\n             <label for=\"lastName\" >Last Name</label>\n             <input type=\"text\" id=\"lastName\" [ngFormControl]=\"myForm.controls['lastName']\" >\n        </div>\n         <button type=\"submit\" [disabled]=\"!myForm.valid\">Click me to Submit</button>\n       </form>\n    ",
                        providers: [contact_service_1.ContactDataService],
                        styles: ["\n      label{\n            display: inline-block;\n            width: 140px;\n      }\n    "]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactDataService, router_1.Router, router_1.RouteParams, common_1.FormBuilder])
                ], NewContactComponent);
                return NewContactComponent;
            }());
            exports_1("NewContactComponent", NewContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QvbmV3LWNvbnRhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNEJBO2dCQUVJLDZCQUFvQixZQUFnQyxFQUNoQyxPQUFlLEVBQ2YsWUFBeUIsRUFDekIsWUFBeUI7b0JBSHpCLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtvQkFDaEMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFDZixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFDekIsaUJBQVksR0FBWixZQUFZLENBQWE7Z0JBRTdDLENBQUM7Z0JBQ0Qsc0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO3dCQUNqQyxXQUFXLEVBQUcsQ0FBQyxFQUFFLEVBQUMsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ3JDLFVBQVUsRUFBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3FCQUN4RSxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFDRCxzQ0FBUSxHQUFSLFVBQVMsS0FBSztvQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBRTVDLENBQUM7Z0JBMUNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGtrQkFZVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBa0IsQ0FBQzt3QkFDL0IsTUFBTSxFQUFFLENBQUMsOEZBS1IsQ0FBQztxQkFFTCxDQUFDOzt1Q0FBQTtnQkFxQkYsMEJBQUM7WUFBRCxDQXBCQSxBQW9CQyxJQUFBO1lBcEJELHFEQW9CQyxDQUFBIiwiZmlsZSI6ImNvbnRhY3QvbmV3LWNvbnRhY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbEdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9yLCBWYWxpZGF0b3JzfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XHJcbmltcG9ydCB7Um91dGVyLCBSb3V0ZVBhcmFtc30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xyXG5pbXBvcnQge0NvbnRhY3REYXRhU2VydmljZX0gZnJvbSBcIi4vY29udGFjdC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwibXlGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KG15Rm9ybS52YWx1ZSlcIiA+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaXJzdE5hbWVcIiA+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImZpcnN0TmFtZVwiIFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5jb250cm9sc1snZmlyc3ROYW1lJ11cIiA+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxhc3ROYW1lXCIgPkxhc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImxhc3ROYW1lXCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmNvbnRyb2xzWydsYXN0TmFtZSddXCIgPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPVwiIW15Rm9ybS52YWxpZFwiPkNsaWNrIG1lIHRvIFN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgPC9mb3JtPlxyXG4gICAgYCxcclxuICAgIHByb3ZpZGVyczogW0NvbnRhY3REYXRhU2VydmljZV0sXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgICAgfVxyXG4gICAgYF1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZXdDb250YWN0Q29tcG9uZW50ICBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIG15Rm9ybTogQ29udHJvbEdyb3VwO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YVNlcnZpY2U6IENvbnRhY3REYXRhU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKXtcclxuXHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpOmFueXtcclxuICAgICAgICB0aGlzLm15Rm9ybT10aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgJ2ZpcnN0TmFtZScgOiBbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgICdsYXN0TmFtZScgOiBbdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdsYXN0TmFtZScpLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25TdWJtaXQodmFsdWUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidmFsdWVcIix0aGlzLm15Rm9ybSk7XHJcbiAgICAgICAgdGhpcy5fZGF0YVNlcnZpY2UuaW5zZXJ0Q29udGFjdCh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnTWFpbkNvbnRhY3RzJ10pO1xyXG4gICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
