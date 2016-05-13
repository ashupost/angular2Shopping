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
var HighlightDirective = (function () {
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
    HighlightDirective.prototype.onMouseLeave = function () { this._highlight(''); /* this._highlight(null); */ };
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
exports.HighlightDirective = HighlightDirective;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS1kaXJlY3RpdmUvaGlnaGxpZ2h0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBVTNEO0lBY0ksNEJBQVksRUFBYztRQVpsQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQVlBLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUFDLENBQUM7SUFObkQsc0JBQUksNENBQVk7UUFKekI7O1dBRUc7YUFFTSxVQUFpQixTQUFnQjtZQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3pELENBQUM7OztPQUFBO0lBTUQseUNBQVksR0FBWixjQUFpQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RSx5Q0FBWSxHQUFaLGNBQWlCLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBRTVELHVDQUFVLEdBQWxCLFVBQW1CLEtBQVk7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMzQyxDQUFDO0lBYkQ7UUFBQyxZQUFLLEVBQUU7OzswREFBQTtJQUlSO1FBQUMsWUFBSyxDQUFDLGFBQWEsQ0FBQzs7OERBQUE7SUFwQnpCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLElBQUksRUFBRTtnQkFDRixjQUFjLEVBQUUsZ0JBQWdCO2dCQUNoQyxjQUFjLEVBQUUsZ0JBQWdCO2FBQ25DO1NBQ0osQ0FBQzs7MEJBQUE7SUF3QkYseUJBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBdEJZLDBCQUFrQixxQkFzQjlCLENBQUEiLCJmaWxlIjoiYXR0cmlidXRlLWRpcmVjdGl2ZS9oaWdobGlnaHQuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbbXlIaWdobGlnaHRdJyxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnKG1vdXNlZW50ZXIpJzogJ29uTW91c2VFbnRlcigpJyxcclxuICAgICAgICAnKG1vdXNlbGVhdmUpJzogJ29uTW91c2VMZWF2ZSgpJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodERpcmVjdGl2ZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfZGVmYXVsdENvbG9yID0gJ3JlZCc7XHJcbiAgICBwcml2YXRlIF9lbDpIVE1MRWxlbWVudDtcclxuICAgIC8qXHJcbiAgICAgQElucHV0KCkgbXlIaWdobGlnaHQ6IHN0cmluZztcclxuICAgICAqL1xyXG5cclxuICAgIEBJbnB1dCgpIHNldCBkZWZhdWx0Q29sb3IoY29sb3JOYW1lOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5fZGVmYXVsdENvbG9yID0gY29sb3JOYW1lIHx8IHRoaXMuX2RlZmF1bHRDb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoJ215SGlnaGxpZ2h0JykgaGlnaGxpZ2h0Q29sb3I6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZikgeyB0aGlzLl9lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7IH1cclxuXHJcbiAgICBvbk1vdXNlRW50ZXIoKSB7IHRoaXMuX2hpZ2hsaWdodCh0aGlzLmhpZ2hsaWdodENvbG9yIHx8IHRoaXMuX2RlZmF1bHRDb2xvcik7IH1cclxuICAgIG9uTW91c2VMZWF2ZSgpIHsgdGhpcy5faGlnaGxpZ2h0KCcnKTsgLyogdGhpcy5faGlnaGxpZ2h0KG51bGwpOyAqLyB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGlnaGxpZ2h0KGNvbG9yOnN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
