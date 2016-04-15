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
//# sourceMappingURL=new-contact.component.js.map