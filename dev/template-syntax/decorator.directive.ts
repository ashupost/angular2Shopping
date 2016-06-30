// Useful for spying on an element
// for fun; not used (yet)
import {Directive, ElementRef} from '@angular/core';

// set the selector for the element type to spy on.
@Directive({selector: 'select'})
export class DecoratorDirective {
    constructor(el: ElementRef){
        console.log(el)
    }
}

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */