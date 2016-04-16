import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
    selector: '[myHighlight]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})

export class HighlightDirective {

    private _defaultColor = 'red';
    private _el:HTMLElement;
    /*
     @Input() myHighlight: string;
     */

    @Input() set defaultColor(colorName:string){
        this._defaultColor = colorName || this._defaultColor;
    }

    @Input('myHighlight') highlightColor: string;

    constructor(el: ElementRef) { this._el = el.nativeElement; }

    onMouseEnter() { this._highlight(this.highlightColor || this._defaultColor); }
    onMouseLeave() { this._highlight(null); }

    private _highlight(color:string) {
        this._el.style.backgroundColor = color;
    }
}
