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
var JqueryComponent = (function () {
    function JqueryComponent(_elRef) {
        this._elRef = _elRef;
    }
    JqueryComponent.prototype.ngOnInit = function () {
        jQuery(this._elRef.nativeElement).find('button').on("click", function () {
            alert('working');
        });
        jQuery(this._elRef.nativeElement).find('p:last').addClass("selected highlight");
    };
    JqueryComponent = __decorate([
        core_1.Component({
            template: "\n       <button>Click me</button>\n       <p>Hello</p>\n       <p id=\"india\">and</p>\n       <p>Goodbye</p>\n    ",
            styles: ['.highlight {background: yellow;} .selected {color: red;}']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], JqueryComponent);
    return JqueryComponent;
}());
exports.JqueryComponent = JqueryComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS9qcXVlcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNEMsZUFBZSxDQUFDLENBQUE7QUFXNUQ7SUFDSSx5QkFBb0IsTUFBa0I7UUFBbEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtJQUV0QyxDQUFDO0lBQ0Qsa0NBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDO1lBQ3hELEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBbEJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxzSEFLVDtZQUNELE1BQU0sRUFBRSxDQUFDLDBEQUEwRCxDQUFDO1NBQ3ZFLENBQUM7O3VCQUFBO0lBWUYsc0JBQUM7QUFBRCxDQVhBLEFBV0MsSUFBQTtBQVhZLHVCQUFlLGtCQVczQixDQUFBIiwiZmlsZSI6ImpxdWVyeS9qcXVlcnkuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICA8YnV0dG9uPkNsaWNrIG1lPC9idXR0b24+XHJcbiAgICAgICA8cD5IZWxsbzwvcD5cclxuICAgICAgIDxwIGlkPVwiaW5kaWFcIj5hbmQ8L3A+XHJcbiAgICAgICA8cD5Hb29kYnllPC9wPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogWycuaGlnaGxpZ2h0IHtiYWNrZ3JvdW5kOiB5ZWxsb3c7fSAuc2VsZWN0ZWQge2NvbG9yOiByZWQ7fSddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKcXVlcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbFJlZjogRWxlbWVudFJlZil7XHJcblxyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKTogYW55e1xyXG4gICAgICAgIGpRdWVyeSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50KS5maW5kKCdidXR0b24nKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBhbGVydCgnd29ya2luZycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50KS5maW5kKCdwOmxhc3QnKS5hZGRDbGFzcyhcInNlbGVjdGVkIGhpZ2hsaWdodFwiKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
