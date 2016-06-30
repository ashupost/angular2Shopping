import {Directive,  Output, ElementRef, EventEmitter} from '@angular/core';

@Directive({selector:'[myClick]'})
export class MyClickDirective {
    @Output('myClick') clicks = new EventEmitter<string>(); //  @Output(alias) propertyName = ...

    constructor(el: ElementRef){
        el.nativeElement
            .addEventListener('click', (event:Event) => {
                this._toggle = !this._toggle;
                this.clicks.emit(this._toggle ? 'Click!' : '');
            });
    }
    _toggle = false;
}

@Directive({
    selector:'[myClick2]',
    outputs:['clicks:myClick']  // propertyName:alias
})
export class MyClickDirective2 {
    clicks = new EventEmitter<string>();

    constructor(el: ElementRef){
        el.nativeElement
            .addEventListener('click', (event:Event) => {
                this._toggle = !this._toggle;
                this.clicks.emit(this._toggle ? 'Click2!' : '');
            });
    }
    _toggle = false;
}

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */