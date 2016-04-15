import {Component, OnInit, ElementRef} from 'angular2/core';
declare var jQuery: any;
@Component({
    template: `
       <button>Click me</button>
       <p>Hello</p>
       <p id="india">and</p>
       <p>Goodbye</p>
    `,
    styles: ['.highlight {background: yellow;} .selected {color: red;}']
})
export class JqueryComponent implements OnInit{
    constructor(private _elRef: ElementRef){

    }
    ngOnInit(): any{
        jQuery(this._elRef.nativeElement).find('button').on("click",function () {
            alert('working');
        });
        jQuery(this._elRef.nativeElement).find('p:last').addClass("selected highlight");
    }

}
