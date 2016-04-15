System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var RestoreService;
    return {
        setters:[],
        execute: function() {
            RestoreService = (function () {
                function RestoreService() {
                }
                RestoreService.prototype.setItem = function (item) {
                    this.originalItem = item;
                    this.currentItem = this.clone(item);
                };
                RestoreService.prototype.getItem = function () {
                    return this.currentItem;
                };
                RestoreService.prototype.restoreItem = function () {
                    this.currentItem = this.originalItem;
                    return this.getItem();
                };
                RestoreService.prototype.clone = function (item) {
                    // super poor clone implementation
                    return JSON.parse(JSON.stringify(item));
                };
                return RestoreService;
            }());
            exports_1("RestoreService", RestoreService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZXJhcmNoaWNhbC1kZXBlbmRlbmN5LWluamVjdGlvbi9yZXN0b3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBO2dCQUFBO2dCQXNCQSxDQUFDO2dCQWxCRyxnQ0FBTyxHQUFQLFVBQVMsSUFBTztvQkFDWixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztvQkFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO2dCQUVELGdDQUFPLEdBQVA7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsb0NBQVcsR0FBWDtvQkFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQsOEJBQUssR0FBTCxVQUFPLElBQU87b0JBQ1Ysa0NBQWtDO29CQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBQ0wscUJBQUM7WUFBRCxDQXRCQSxBQXNCQyxJQUFBO1lBdEJELDJDQXNCQyxDQUFBIiwiZmlsZSI6ImhpZXJhcmNoaWNhbC1kZXBlbmRlbmN5LWluamVjdGlvbi9yZXN0b3JlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUmVzdG9yZVNlcnZpY2U8VD4ge1xyXG4gICAgb3JpZ2luYWxJdGVtOiBUO1xyXG4gICAgY3VycmVudEl0ZW06IFQ7XHJcblxyXG4gICAgc2V0SXRlbSAoaXRlbTogVCkge1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxJdGVtID0gaXRlbTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJdGVtID0gdGhpcy5jbG9uZShpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtICgpIDpUIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50SXRlbTtcclxuICAgIH1cclxuXHJcbiAgICByZXN0b3JlSXRlbSAoKSA6VCB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SXRlbSA9IHRoaXMub3JpZ2luYWxJdGVtO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW0oKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9uZSAoaXRlbTogVCkgOlQge1xyXG4gICAgICAgIC8vIHN1cGVyIHBvb3IgY2xvbmUgaW1wbGVtZW50YXRpb25cclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpdGVtKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
