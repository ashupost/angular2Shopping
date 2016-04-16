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
                    /*
                     @Input() myHighlight: string;
                     */
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
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], HighlightDirective.prototype, "defaultColor", null);
                __decorate([
                    core_1.Input('myHighlight'), 
                    __metadata('design:type', String)
                ], HighlightDirective.prototype, "highlightColor", void 0);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS1kaXJlY3RpdmUvaGlnaGxpZ2h0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQWNJLDRCQUFZLEVBQWM7b0JBWmxCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO29CQVlBLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFBQyxDQUFDO2dCQU5uRCxzQkFBSSw0Q0FBWTtvQkFKekI7O3VCQUVHO3lCQUVNLFVBQWlCLFNBQWdCO3dCQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDO29CQUN6RCxDQUFDOzs7bUJBQUE7Z0JBTUQseUNBQVksR0FBWixjQUFpQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUUseUNBQVksR0FBWixjQUFpQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFakMsdUNBQVUsR0FBbEIsVUFBbUIsS0FBWTtvQkFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztnQkFDM0MsQ0FBQztnQkFiRDtvQkFBQyxZQUFLLEVBQUU7OztzRUFBQTtnQkFJUjtvQkFBQyxZQUFLLENBQUMsYUFBYSxDQUFDOzswRUFBQTtnQkFwQnpCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLElBQUksRUFBRTs0QkFDRixjQUFjLEVBQUUsZ0JBQWdCOzRCQUNoQyxjQUFjLEVBQUUsZ0JBQWdCO3lCQUNuQztxQkFDSixDQUFDOztzQ0FBQTtnQkF3QkYseUJBQUM7WUFBRCxDQXRCQSxBQXNCQyxJQUFBO1lBdEJELG1EQXNCQyxDQUFBIiwiZmlsZSI6ImF0dHJpYnV0ZS1kaXJlY3RpdmUvaGlnaGxpZ2h0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW215SGlnaGxpZ2h0XScsXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJyhtb3VzZWVudGVyKSc6ICdvbk1vdXNlRW50ZXIoKScsXHJcbiAgICAgICAgJyhtb3VzZWxlYXZlKSc6ICdvbk1vdXNlTGVhdmUoKSdcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIaWdobGlnaHREaXJlY3RpdmUge1xyXG5cclxuICAgIHByaXZhdGUgX2RlZmF1bHRDb2xvciA9ICdyZWQnO1xyXG4gICAgcHJpdmF0ZSBfZWw6SFRNTEVsZW1lbnQ7XHJcbiAgICAvKlxyXG4gICAgIEBJbnB1dCgpIG15SGlnaGxpZ2h0OiBzdHJpbmc7XHJcbiAgICAgKi9cclxuXHJcbiAgICBASW5wdXQoKSBzZXQgZGVmYXVsdENvbG9yKGNvbG9yTmFtZTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuX2RlZmF1bHRDb2xvciA9IGNvbG9yTmFtZSB8fCB0aGlzLl9kZWZhdWx0Q29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCdteUhpZ2hsaWdodCcpIGhpZ2hsaWdodENvbG9yOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYpIHsgdGhpcy5fZWwgPSBlbC5uYXRpdmVFbGVtZW50OyB9XHJcblxyXG4gICAgb25Nb3VzZUVudGVyKCkgeyB0aGlzLl9oaWdobGlnaHQodGhpcy5oaWdobGlnaHRDb2xvciB8fCB0aGlzLl9kZWZhdWx0Q29sb3IpOyB9XHJcbiAgICBvbk1vdXNlTGVhdmUoKSB7IHRoaXMuX2hpZ2hsaWdodChudWxsKTsgfVxyXG5cclxuICAgIHByaXZhdGUgX2hpZ2hsaWdodChjb2xvcjpzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
