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
var common_1 = require("angular2/common");
var router_1 = require("angular2/router");
var contact_service_1 = require("./contact.service");
var NewContactComponent = (function () {
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
exports.NewContactComponent = NewContactComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QvbmV3LWNvbnRhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsdUJBQStELGlCQUFpQixDQUFDLENBQUE7QUFDakYsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFDcEQsZ0NBQWlDLG1CQUFtQixDQUFDLENBQUE7QUF5QnJEO0lBRUksNkJBQW9CLFlBQWdDLEVBQ2hDLE9BQWUsRUFDZixZQUF5QixFQUN6QixZQUF5QjtRQUh6QixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLGlCQUFZLEdBQVosWUFBWSxDQUFhO0lBRTdDLENBQUM7SUFDRCxzQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUNqQyxXQUFXLEVBQUcsQ0FBQyxFQUFFLEVBQUMsbUJBQVUsQ0FBQyxRQUFRLENBQUM7WUFDckMsVUFBVSxFQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7U0FDeEUsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELHNDQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUU1QyxDQUFDO0lBMUNMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxra0JBWVQ7WUFDRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBa0IsQ0FBQztZQUMvQixNQUFNLEVBQUUsQ0FBQyw4RkFLUixDQUFDO1NBRUwsQ0FBQzs7MkJBQUE7SUFxQkYsMEJBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBcEJZLDJCQUFtQixzQkFvQi9CLENBQUEiLCJmaWxlIjoiY29udGFjdC9uZXctY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3IsIFZhbGlkYXRvcnN9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcclxuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlUGFyYW1zfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcbmltcG9ydCB7Q29udGFjdERhdGFTZXJ2aWNlfSBmcm9tIFwiLi9jb250YWN0LnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJteUZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQobXlGb3JtLnZhbHVlKVwiID5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpcnN0TmFtZVwiID5GaXJzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZmlyc3ROYW1lXCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmNvbnRyb2xzWydmaXJzdE5hbWUnXVwiID5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibGFzdE5hbWVcIiA+TGFzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibGFzdE5hbWVcIiBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uY29udHJvbHNbJ2xhc3ROYW1lJ11cIiA+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIFtkaXNhYmxlZF09XCIhbXlGb3JtLnZhbGlkXCI+Q2xpY2sgbWUgdG8gU3VibWl0PC9idXR0b24+XHJcbiAgICAgICA8L2Zvcm0+XHJcbiAgICBgLFxyXG4gICAgcHJvdmlkZXJzOiBbQ29udGFjdERhdGFTZXJ2aWNlXSxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgbGFiZWx7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICB9XHJcbiAgICBgXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIE5ld0NvbnRhY3RDb21wb25lbnQgIGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgbXlGb3JtOiBDb250cm9sR3JvdXA7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhU2VydmljZTogQ29udGFjdERhdGFTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpe1xyXG5cclxuICAgIH1cclxuICAgIG5nT25Jbml0KCk6YW55e1xyXG4gICAgICAgIHRoaXMubXlGb3JtPXRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAnZmlyc3ROYW1lJyA6IFsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgJ2xhc3ROYW1lJyA6IFt0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2xhc3ROYW1lJyksIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvblN1Ym1pdCh2YWx1ZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ2YWx1ZVwiLHRoaXMubXlGb3JtKTtcclxuICAgICAgICB0aGlzLl9kYXRhU2VydmljZS5pbnNlcnRDb250YWN0KHZhbHVlKTtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydNYWluQ29udGFjdHMnXSk7XHJcbiAgICAgICBcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
