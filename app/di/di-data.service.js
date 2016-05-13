"use strict";
var DataService = (function () {
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
exports.DataService = DataService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpL2RpLWRhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFBQTtRQUNZLFVBQUssR0FBRyxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFPcEQsQ0FBQztJQU5HLG1DQUFhLEdBQWI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUNELGdDQUFVLEdBQVYsVUFBVyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDTCxrQkFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlksbUJBQVcsY0FRdkIsQ0FBQSIsImZpbGUiOiJkaS9kaS1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfZGF0YSA9IFtcIk1yaXR1bmpheVwiLCBcIlNhcG5hXCIsIFwiS3VtYXJcIl07XHJcbiAgICBnZXRSYW5kb21EYXRhKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5fZGF0YS5sZW5ndGgpXTtcclxuICAgIH1cclxuICAgIGluc2VydERhdGEodmFsdWU6IHN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5fZGF0YS5wdXNoKHZhbHVlKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
