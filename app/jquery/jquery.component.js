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
    var JqueryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            JqueryComponent = (function () {
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
            exports_1("JqueryComponent", JqueryComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS9qcXVlcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBQ0kseUJBQW9CLE1BQWtCO29CQUFsQixXQUFNLEdBQU4sTUFBTSxDQUFZO2dCQUV0QyxDQUFDO2dCQUNELGtDQUFRLEdBQVI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUM7d0JBQ3hELEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDckIsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUNwRixDQUFDO2dCQWxCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxzSEFLVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQywwREFBMEQsQ0FBQztxQkFDdkUsQ0FBQzs7bUNBQUE7Z0JBWUYsc0JBQUM7WUFBRCxDQVhBLEFBV0MsSUFBQTtZQVhELDZDQVdDLENBQUEiLCJmaWxlIjoianF1ZXJ5L2pxdWVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgIDxidXR0b24+Q2xpY2sgbWU8L2J1dHRvbj5cclxuICAgICAgIDxwPkhlbGxvPC9wPlxyXG4gICAgICAgPHAgaWQ9XCJpbmRpYVwiPmFuZDwvcD5cclxuICAgICAgIDxwPkdvb2RieWU8L3A+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbJy5oaWdobGlnaHQge2JhY2tncm91bmQ6IHllbGxvdzt9IC5zZWxlY3RlZCB7Y29sb3I6IHJlZDt9J11cclxufSlcclxuZXhwb3J0IGNsYXNzIEpxdWVyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmKXtcclxuXHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpOiBhbnl7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQpLmZpbmQoJ2J1dHRvbicpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCd3b3JraW5nJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQpLmZpbmQoJ3A6bGFzdCcpLmFkZENsYXNzKFwic2VsZWN0ZWQgaGlnaGxpZ2h0XCIpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
