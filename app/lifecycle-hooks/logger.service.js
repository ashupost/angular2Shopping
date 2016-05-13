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
var LoggerService = (function () {
    function LoggerService() {
        this.logs = [];
        this.prevMsg = '';
        this.prevMsgCount = 1;
    }
    LoggerService.prototype.log = function (msg) {
        if (msg === this.prevMsg) {
            // Repeat message; update last log entry with count.
            this.logs[this.logs.length - 1] = msg + (" (" + (this.prevMsgCount += 1) + "x)");
        }
        else {
            // New message; log it.
            this.prevMsg = msg;
            this.prevMsgCount = 1;
            this.logs.push(msg);
        }
    };
    LoggerService.prototype.clear = function () { this.logs.length = 0; };
    // schedules a view refresh to ensure display catches up
    LoggerService.prototype.tick = function () {
        setTimeout(function () {
            // console.log('tick')
        }, 0);
    };
    LoggerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LoggerService);
    return LoggerService;
}());
exports.LoggerService = LoggerService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpZmVjeWNsZS1ob29rcy9sb2dnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBR3pDO0lBQUE7UUFDSSxTQUFJLEdBQVksRUFBRSxDQUFDO1FBQ25CLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixpQkFBWSxHQUFHLENBQUMsQ0FBQztJQXNCckIsQ0FBQztJQXBCRywyQkFBRyxHQUFILFVBQUksR0FBVTtRQUNWLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN2QixvREFBb0Q7WUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsU0FBSyxJQUFJLENBQUMsWUFBWSxJQUFFLENBQUMsU0FBSSxDQUFDO1FBQ3hFLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLHVCQUF1QjtZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QixDQUFDO0lBQ0wsQ0FBQztJQUVELDZCQUFLLEdBQUwsY0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO0lBRWpDLHdEQUF3RDtJQUN4RCw0QkFBSSxHQUFKO1FBQ0ksVUFBVSxDQUFDO1lBQ1Asc0JBQXNCO1FBQzFCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUF6Qkw7UUFBQyxpQkFBVSxFQUFFOztxQkFBQTtJQTBCYixvQkFBQztBQUFELENBekJBLEFBeUJDLElBQUE7QUF6QlkscUJBQWEsZ0JBeUJ6QixDQUFBIiwiZmlsZSI6ImxpZmVjeWNsZS1ob29rcy9sb2dnZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2dnZXJTZXJ2aWNlIHtcclxuICAgIGxvZ3M6c3RyaW5nW10gPSBbXTtcclxuICAgIHByZXZNc2cgPSAnJztcclxuICAgIHByZXZNc2dDb3VudCA9IDE7XHJcblxyXG4gICAgbG9nKG1zZzpzdHJpbmcpICB7XHJcbiAgICAgICAgaWYgKG1zZyA9PT0gdGhpcy5wcmV2TXNnKSB7XHJcbiAgICAgICAgICAgIC8vIFJlcGVhdCBtZXNzYWdlOyB1cGRhdGUgbGFzdCBsb2cgZW50cnkgd2l0aCBjb3VudC5cclxuICAgICAgICAgICAgdGhpcy5sb2dzW3RoaXMubG9ncy5sZW5ndGgtMV0gPSBtc2cgKyBgICgke3RoaXMucHJldk1zZ0NvdW50Kz0xfXgpYDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBOZXcgbWVzc2FnZTsgbG9nIGl0LlxyXG4gICAgICAgICAgICB0aGlzLnByZXZNc2cgPSBtc2c7XHJcbiAgICAgICAgICAgIHRoaXMucHJldk1zZ0NvdW50ID0gMTtcclxuICAgICAgICAgICAgdGhpcy5sb2dzLnB1c2gobXNnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSAgIHt0aGlzLmxvZ3MubGVuZ3RoID0gMDt9XHJcblxyXG4gICAgLy8gc2NoZWR1bGVzIGEgdmlldyByZWZyZXNoIHRvIGVuc3VyZSBkaXNwbGF5IGNhdGNoZXMgdXBcclxuICAgIHRpY2soKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aWNrJylcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
