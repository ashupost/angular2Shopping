System.register(['angular2/core', "./contact.service", "./contact.component"], function(exports_1, context_1) {
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
    var core_1, contact_service_1, contact_component_1;
    var OldContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            }],
        execute: function() {
            OldContactComponent = (function () {
                function OldContactComponent(_dataService) {
                    this._dataService = _dataService;
                    this.selectedContact = {};
                }
                OldContactComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._dataService.getContacts().then(function (contacts) { return _this.contacts = contacts; });
                };
                OldContactComponent.prototype.onSelect = function (contact) {
                    this.selectedContact = contact;
                };
                OldContactComponent = __decorate([
                    core_1.Component({
                        template: "\n   <ul>\n       <li *ngFor=\"#contact of contacts\" (click)=\"onSelect(contact)\" [class.clicked]=\"selectedContact === contact\">\n                {{contact.firstName}} {{contact.lastName}}\n       </li>\n   </ul>\n   <contact  [contact]=\"selectedContact\"></contact>\n    ",
                        providers: [contact_service_1.ContactDataService],
                        directives: [contact_component_1.ContactComponent],
                        styleUrls: ['src/css/contact-list.css']
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactDataService])
                ], OldContactComponent);
                return OldContactComponent;
            }());
            exports_1("OldContactComponent", OldContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3Qvb2xkLWNvbnRhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0JBO2dCQUdJLDZCQUFvQixZQUFnQztvQkFBaEMsaUJBQVksR0FBWixZQUFZLENBQW9CO29CQUQ3QyxvQkFBZSxHQUFHLEVBQUUsQ0FBQztnQkFFNUIsQ0FBQztnQkFDRCxzQ0FBUSxHQUFSO29CQUFBLGlCQUVDO29CQURHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBa0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUF4QixDQUF3QixDQUFDLENBQUM7Z0JBQzNGLENBQUM7Z0JBQ0Qsc0NBQVEsR0FBUixVQUFTLE9BQU87b0JBQ1gsSUFBSSxDQUFDLGVBQWUsR0FBQyxPQUFPLENBQUM7Z0JBQ2xDLENBQUM7Z0JBdkJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHVSQU9UO3dCQUNELFNBQVMsRUFBRSxDQUFDLG9DQUFrQixDQUFDO3dCQUMvQixVQUFVLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQzt3QkFDOUIsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7cUJBQzFDLENBQUM7O3VDQUFBO2dCQVlGLDBCQUFDO1lBQUQsQ0FYQSxBQVdDLElBQUE7WUFYRCxxREFXQyxDQUFBIiwiZmlsZSI6ImNvbnRhY3Qvb2xkLWNvbnRhY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Q29udGFjdH0gZnJvbSBcIi4vY29udGFjdFwiO1xyXG5pbXBvcnQge0NvbnRhY3REYXRhU2VydmljZX0gZnJvbSBcIi4vY29udGFjdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29udGFjdENvbXBvbmVudH0gZnJvbSBcIi4vY29udGFjdC5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgPHVsPlxyXG4gICAgICAgPGxpICpuZ0Zvcj1cIiNjb250YWN0IG9mIGNvbnRhY3RzXCIgKGNsaWNrKT1cIm9uU2VsZWN0KGNvbnRhY3QpXCIgW2NsYXNzLmNsaWNrZWRdPVwic2VsZWN0ZWRDb250YWN0ID09PSBjb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICB7e2NvbnRhY3QuZmlyc3ROYW1lfX0ge3tjb250YWN0Lmxhc3ROYW1lfX1cclxuICAgICAgIDwvbGk+XHJcbiAgIDwvdWw+XHJcbiAgIDxjb250YWN0ICBbY29udGFjdF09XCJzZWxlY3RlZENvbnRhY3RcIj48L2NvbnRhY3Q+XHJcbiAgICBgLFxyXG4gICAgcHJvdmlkZXJzOiBbQ29udGFjdERhdGFTZXJ2aWNlXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtDb250YWN0Q29tcG9uZW50XSxcclxuICAgIHN0eWxlVXJsczogWydzcmMvY3NzL2NvbnRhY3QtbGlzdC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgT2xkQ29udGFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIHByaXZhdGUgY29udGFjdHM6IENvbnRhY3RbXTtcclxuICAgIHB1YmxpYyBzZWxlY3RlZENvbnRhY3QgPSB7fTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBDb250YWN0RGF0YVNlcnZpY2Upe1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKTphbnkge1xyXG4gICAgICAgIHRoaXMuX2RhdGFTZXJ2aWNlLmdldENvbnRhY3RzKCkudGhlbigoY29udGFjdHM6Q29udGFjdFtdKSA9PiB0aGlzLmNvbnRhY3RzID0gY29udGFjdHMpO1xyXG4gICAgfVxyXG4gICAgb25TZWxlY3QoY29udGFjdCl7XHJcbiAgICAgICAgIHRoaXMuc2VsZWN0ZWRDb250YWN0PWNvbnRhY3Q7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
