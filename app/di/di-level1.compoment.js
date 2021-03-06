System.register(['angular2/core', "./di-data.service"], function(exports_1, context_1) {
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
    var core_1, di_data_service_1;
    var DILevel1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (di_data_service_1_1) {
                di_data_service_1 = di_data_service_1_1;
            }],
        execute: function() {
            DILevel1Component = (function () {
                function DILevel1Component(_dataService) {
                    this._dataService = _dataService;
                }
                DILevel1Component.prototype.getRandomData = function () {
                    this.data = this._dataService.getRandomData();
                };
                DILevel1Component.prototype.pushData = function (inputData) {
                    this._dataService.insertData(inputData);
                };
                DILevel1Component = __decorate([
                    core_1.Component({
                        selector: 'di-level1-component',
                        template: "\n        <div>\n                <h1>Component 1</h1>\n                <button (click)=\"getRandomData()\">Get Randaom Data</button>\n                <p>Data selected is: {{data}}</p>\n                <input type=\"text\" #inputData> \n                <button (click)=\"pushData(inputData.value)\" >Add</button>\n\t\t</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [di_data_service_1.DataService])
                ], DILevel1Component);
                return DILevel1Component;
            }());
            exports_1("DILevel1Component", DILevel1Component);
        }
    }
});
//# sourceMappingURL=di-level1.compoment.js.map