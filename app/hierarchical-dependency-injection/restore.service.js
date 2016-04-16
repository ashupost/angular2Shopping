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
//# sourceMappingURL=restore.service.js.map