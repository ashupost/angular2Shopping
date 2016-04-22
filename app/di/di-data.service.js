System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DataService;
    return {
        setters:[],
        execute: function() {
            DataService = (function () {
                function DataService() {
                    this._data = ["Mritunjay", "Sapna", "Kumar"];
                }
                DataService.prototype.getRandomData = function () {
                    return this._data[Math.floor(Math.random() * this._data.length)];
                };
                DataService.prototype.insertData = function (value) {
                    this._data.push(value);
                };
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpL2RpLWRhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBQUE7Z0JBQUE7b0JBQ1ksVUFBSyxHQUFHLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFPcEQsQ0FBQztnQkFORyxtQ0FBYSxHQUFiO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDckUsQ0FBQztnQkFDRCxnQ0FBVSxHQUFWLFVBQVcsS0FBYTtvQkFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNCLENBQUM7Z0JBQ0wsa0JBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELHFDQVFDLENBQUEiLCJmaWxlIjoiZGkvZGktZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX2RhdGEgPSBbXCJNcml0dW5qYXlcIiwgXCJTYXBuYVwiLCBcIkt1bWFyXCJdO1xyXG4gICAgZ2V0UmFuZG9tRGF0YSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuX2RhdGEubGVuZ3RoKV07XHJcbiAgICB9XHJcbiAgICBpbnNlcnREYXRhKHZhbHVlOiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuX2RhdGEucHVzaCh2YWx1ZSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
