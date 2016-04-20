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
    var HighlightDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HighlightDirective = (function () {
                function HighlightDirective(el) {
                    this._defaultColor = 'red';
                    this._el = el.nativeElement;
                }
                Object.defineProperty(HighlightDirective.prototype, "defaultColor", {
                    set: function (colorName) {
                        this._defaultColor = colorName || this._defaultColor;
                    },
                    enumerable: true,
                    configurable: true
                });
                HighlightDirective.prototype.onMouseEnter = function () { this._highlight(this.highlightColor || this._defaultColor); };
                HighlightDirective.prototype.onMouseLeave = function () { this._highlight(null); };
                HighlightDirective.prototype._highlight = function (color) {
                    this._el.style.backgroundColor = color;
                };
                __decorate([
                    core_1.Input('myHighlight'), 
                    __metadata('design:type', String)
                ], HighlightDirective.prototype, "highlightColor", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], HighlightDirective.prototype, "defaultColor", null);
                HighlightDirective = __decorate([
                    core_1.Directive({
                        selector: '[myHighlight]',
                        host: {
                            '(mouseenter)': 'onMouseEnter()',
                            '(mouseleave)': 'onMouseLeave()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], HighlightDirective);
                return HighlightDirective;
            }());
            exports_1("HighlightDirective", HighlightDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS1kaXJlY3RpdmUvaGlnaGxpZ2h0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQU9JLDRCQUFZLEVBQWM7b0JBTmxCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO29CQU1BLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFBQyxDQUFDO2dCQUhuRCxzQkFBSSw0Q0FBWTt5QkFBaEIsVUFBaUIsU0FBZ0I7d0JBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUM7b0JBQ3pELENBQUM7OzttQkFBQTtnQkFHRCx5Q0FBWSxHQUFaLGNBQWlCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5RSx5Q0FBWSxHQUFaLGNBQWlCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVqQyx1Q0FBVSxHQUFsQixVQUFtQixLQUFZO29CQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO2dCQUMzQyxDQUFDO2dCQVhEO29CQUFDLFlBQUssQ0FBQyxhQUFhLENBQUM7OzBFQUFBO2dCQUNyQjtvQkFBQyxZQUFLLEVBQUU7OztzRUFBQTtnQkFYWjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixJQUFJLEVBQUU7NEJBQ0YsY0FBYyxFQUFFLGdCQUFnQjs0QkFDaEMsY0FBYyxFQUFFLGdCQUFnQjt5QkFDbkM7cUJBQ0osQ0FBQzs7c0NBQUE7Z0JBZ0JGLHlCQUFDO1lBQUQsQ0FmQSxBQWVDLElBQUE7WUFmRCxtREFlQyxDQUFBIiwiZmlsZSI6ImF0dHJpYnV0ZS1kaXJlY3RpdmUvaGlnaGxpZ2h0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW215SGlnaGxpZ2h0XScsXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJyhtb3VzZWVudGVyKSc6ICdvbk1vdXNlRW50ZXIoKScsXHJcbiAgICAgICAgJyhtb3VzZWxlYXZlKSc6ICdvbk1vdXNlTGVhdmUoKSdcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodERpcmVjdGl2ZSB7XHJcbiAgICBwcml2YXRlIF9kZWZhdWx0Q29sb3IgPSAncmVkJztcclxuICAgIHByaXZhdGUgX2VsOkhUTUxFbGVtZW50O1xyXG4gICAgQElucHV0KCdteUhpZ2hsaWdodCcpIGhpZ2hsaWdodENvbG9yOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBzZXQgZGVmYXVsdENvbG9yKGNvbG9yTmFtZTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuX2RlZmF1bHRDb2xvciA9IGNvbG9yTmFtZSB8fCB0aGlzLl9kZWZhdWx0Q29sb3I7XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZikgeyB0aGlzLl9lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7IH1cclxuXHJcbiAgICBvbk1vdXNlRW50ZXIoKSB7IHRoaXMuX2hpZ2hsaWdodCh0aGlzLmhpZ2hsaWdodENvbG9yIHx8IHRoaXMuX2RlZmF1bHRDb2xvcik7IH1cclxuICAgIG9uTW91c2VMZWF2ZSgpIHsgdGhpcy5faGlnaGxpZ2h0KG51bGwpOyB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGlnaGxpZ2h0KGNvbG9yOnN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
