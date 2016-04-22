System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var LoggerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoggerService = (function () {
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
            exports_1("LoggerService", LoggerService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpZmVjeWNsZS1ob29rcy9sb2dnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUFBO29CQUNJLFNBQUksR0FBWSxFQUFFLENBQUM7b0JBQ25CLFlBQU8sR0FBRyxFQUFFLENBQUM7b0JBQ2IsaUJBQVksR0FBRyxDQUFDLENBQUM7Z0JBc0JyQixDQUFDO2dCQXBCRywyQkFBRyxHQUFILFVBQUksR0FBVTtvQkFDVixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ3ZCLG9EQUFvRDt3QkFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsU0FBSyxJQUFJLENBQUMsWUFBWSxJQUFFLENBQUMsU0FBSSxDQUFDO29CQUN4RSxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLHVCQUF1Qjt3QkFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7d0JBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO3dCQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDeEIsQ0FBQztnQkFDTCxDQUFDO2dCQUVELDZCQUFLLEdBQUwsY0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUVqQyx3REFBd0Q7Z0JBQ3hELDRCQUFJLEdBQUo7b0JBQ0ksVUFBVSxDQUFDO3dCQUNQLHNCQUFzQjtvQkFDMUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNWLENBQUM7Z0JBekJMO29CQUFDLGlCQUFVLEVBQUU7O2lDQUFBO2dCQTBCYixvQkFBQztZQUFELENBekJBLEFBeUJDLElBQUE7WUF6QkQseUNBeUJDLENBQUEiLCJmaWxlIjoibGlmZWN5Y2xlLWhvb2tzL2xvZ2dlci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvZ2dlclNlcnZpY2Uge1xyXG4gICAgbG9nczpzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJldk1zZyA9ICcnO1xyXG4gICAgcHJldk1zZ0NvdW50ID0gMTtcclxuXHJcbiAgICBsb2cobXNnOnN0cmluZykgIHtcclxuICAgICAgICBpZiAobXNnID09PSB0aGlzLnByZXZNc2cpIHtcclxuICAgICAgICAgICAgLy8gUmVwZWF0IG1lc3NhZ2U7IHVwZGF0ZSBsYXN0IGxvZyBlbnRyeSB3aXRoIGNvdW50LlxyXG4gICAgICAgICAgICB0aGlzLmxvZ3NbdGhpcy5sb2dzLmxlbmd0aC0xXSA9IG1zZyArIGAgKCR7dGhpcy5wcmV2TXNnQ291bnQrPTF9eClgO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIE5ldyBtZXNzYWdlOyBsb2cgaXQuXHJcbiAgICAgICAgICAgIHRoaXMucHJldk1zZyA9IG1zZztcclxuICAgICAgICAgICAgdGhpcy5wcmV2TXNnQ291bnQgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ3MucHVzaChtc2cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpICAge3RoaXMubG9ncy5sZW5ndGggPSAwO31cclxuXHJcbiAgICAvLyBzY2hlZHVsZXMgYSB2aWV3IHJlZnJlc2ggdG8gZW5zdXJlIGRpc3BsYXkgY2F0Y2hlcyB1cFxyXG4gICAgdGljaygpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RpY2snKVxyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
