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
var contact_service_1 = require("./contact.service");
var contact_component_1 = require("./contact.component");
var OldContactComponent = (function () {
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
            template: "\n   <ul>\n       <li *ngFor=\"let contact of contacts\" (click)=\"onSelect(contact)\" [class.clicked]=\"selectedContact === contact\">\n                {{contact.firstName}} {{contact.lastName}}\n       </li>\n   </ul>\n   <contact  [contact]=\"selectedContact\"></contact>\n    ",
            providers: [contact_service_1.ContactDataService],
            directives: [contact_component_1.ContactComponent],
            styleUrls: ['src/css/contact-list.css']
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactDataService])
    ], OldContactComponent);
    return OldContactComponent;
}());
exports.OldContactComponent = OldContactComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3Qvb2xkLWNvbnRhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFFaEQsZ0NBQWlDLG1CQUFtQixDQUFDLENBQUE7QUFDckQsa0NBQStCLHFCQUFxQixDQUFDLENBQUE7QUFlckQ7SUFHSSw2QkFBb0IsWUFBZ0M7UUFBaEMsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBRDdDLG9CQUFlLEdBQUcsRUFBRSxDQUFDO0lBRTVCLENBQUM7SUFDRCxzQ0FBUSxHQUFSO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQWtCLElBQUssT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFDRCxzQ0FBUSxHQUFSLFVBQVMsT0FBTztRQUNYLElBQUksQ0FBQyxlQUFlLEdBQUMsT0FBTyxDQUFDO0lBQ2xDLENBQUM7SUF2Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLDBSQU9UO1lBQ0QsU0FBUyxFQUFFLENBQUMsb0NBQWtCLENBQUM7WUFDL0IsVUFBVSxFQUFFLENBQUMsb0NBQWdCLENBQUM7WUFDOUIsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDMUMsQ0FBQzs7MkJBQUE7SUFZRiwwQkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFksMkJBQW1CLHNCQVcvQixDQUFBIiwiZmlsZSI6ImNvbnRhY3Qvb2xkLWNvbnRhY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Q29udGFjdH0gZnJvbSBcIi4vY29udGFjdFwiO1xyXG5pbXBvcnQge0NvbnRhY3REYXRhU2VydmljZX0gZnJvbSBcIi4vY29udGFjdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29udGFjdENvbXBvbmVudH0gZnJvbSBcIi4vY29udGFjdC5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgPHVsPlxyXG4gICAgICAgPGxpICpuZ0Zvcj1cImxldCBjb250YWN0IG9mIGNvbnRhY3RzXCIgKGNsaWNrKT1cIm9uU2VsZWN0KGNvbnRhY3QpXCIgW2NsYXNzLmNsaWNrZWRdPVwic2VsZWN0ZWRDb250YWN0ID09PSBjb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICB7e2NvbnRhY3QuZmlyc3ROYW1lfX0ge3tjb250YWN0Lmxhc3ROYW1lfX1cclxuICAgICAgIDwvbGk+XHJcbiAgIDwvdWw+XHJcbiAgIDxjb250YWN0ICBbY29udGFjdF09XCJzZWxlY3RlZENvbnRhY3RcIj48L2NvbnRhY3Q+XHJcbiAgICBgLFxyXG4gICAgcHJvdmlkZXJzOiBbQ29udGFjdERhdGFTZXJ2aWNlXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtDb250YWN0Q29tcG9uZW50XSxcclxuICAgIHN0eWxlVXJsczogWydzcmMvY3NzL2NvbnRhY3QtbGlzdC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgT2xkQ29udGFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIHByaXZhdGUgY29udGFjdHM6IENvbnRhY3RbXTtcclxuICAgIHB1YmxpYyBzZWxlY3RlZENvbnRhY3QgPSB7fTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBDb250YWN0RGF0YVNlcnZpY2Upe1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKTphbnkge1xyXG4gICAgICAgIHRoaXMuX2RhdGFTZXJ2aWNlLmdldENvbnRhY3RzKCkudGhlbigoY29udGFjdHM6Q29udGFjdFtdKSA9PiB0aGlzLmNvbnRhY3RzID0gY29udGFjdHMpO1xyXG4gICAgfVxyXG4gICAgb25TZWxlY3QoY29udGFjdCl7XHJcbiAgICAgICAgIHRoaXMuc2VsZWN0ZWRDb250YWN0PWNvbnRhY3Q7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
