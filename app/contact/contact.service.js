System.register(["angular2/core", "./mock-contact"], function(exports_1, context_1) {
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
    var core_1, mock_contact_1;
    var ContactDataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_contact_1_1) {
                mock_contact_1 = mock_contact_1_1;
            }],
        execute: function() {
            ContactDataService = (function () {
                function ContactDataService() {
                }
                ContactDataService.prototype.getContacts = function () {
                    return Promise.resolve(mock_contact_1.CONTACTS);
                };
                ContactDataService.prototype.insertContact = function (contact) {
                    mock_contact_1.CONTACTS.push(contact);
                };
                ContactDataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ContactDataService);
                return ContactDataService;
            }());
            exports_1("ContactDataService", ContactDataService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QvY29udGFjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQUE7Z0JBU0EsQ0FBQztnQkFQRyx3Q0FBVyxHQUFYO29CQUNHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLHVCQUFRLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFDRCwwQ0FBYSxHQUFiLFVBQWMsT0FBZ0I7b0JBQzFCLHVCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzQixDQUFDO2dCQVJMO29CQUFDLGlCQUFVLEVBQUU7O3NDQUFBO2dCQVViLHlCQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCxtREFTQyxDQUFBIiwiZmlsZSI6ImNvbnRhY3QvY29udGFjdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0NPTlRBQ1RTfSBmcm9tIFwiLi9tb2NrLWNvbnRhY3RcIjtcclxuaW1wb3J0IHtDb250YWN0fSBmcm9tIFwiLi9jb250YWN0XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0RGF0YVNlcnZpY2Uge1xyXG5cclxuICAgIGdldENvbnRhY3RzKCl7XHJcbiAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKENPTlRBQ1RTKTtcclxuICAgIH1cclxuICAgIGluc2VydENvbnRhY3QoY29udGFjdDogQ29udGFjdCl7XHJcbiAgICAgICAgQ09OVEFDVFMucHVzaChjb250YWN0KTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
