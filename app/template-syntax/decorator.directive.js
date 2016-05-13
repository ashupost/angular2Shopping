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
// Useful for spying on an element
// for fun; not used (yet)
var core_1 = require('angular2/core');
// set the selector for the element type to spy on.
var DecoratorDirective = (function () {
    function DecoratorDirective(el) {
        console.log(el);
    }
    DecoratorDirective = __decorate([
        core_1.Directive({ selector: 'select' }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], DecoratorDirective);
    return DecoratorDirective;
}());
exports.DecoratorDirective = DecoratorDirective;
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLXN5bnRheC9kZWNvcmF0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxrQ0FBa0M7QUFDbEMsMEJBQTBCO0FBQzFCLHFCQUFvQyxlQUFlLENBQUMsQ0FBQTtBQUVwRCxtREFBbUQ7QUFFbkQ7SUFDSSw0QkFBWSxFQUFjO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDbkIsQ0FBQztJQUpMO1FBQUMsZ0JBQVMsQ0FBQyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQzs7MEJBQUE7SUFLaEMseUJBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQTtBQUpZLDBCQUFrQixxQkFJOUIsQ0FBQTtBQUVEOzs7O0dBSUciLCJmaWxlIjoidGVtcGxhdGUtc3ludGF4L2RlY29yYXRvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBVc2VmdWwgZm9yIHNweWluZyBvbiBhbiBlbGVtZW50XHJcbi8vIGZvciBmdW47IG5vdCB1c2VkICh5ZXQpXHJcbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbi8vIHNldCB0aGUgc2VsZWN0b3IgZm9yIHRoZSBlbGVtZW50IHR5cGUgdG8gc3B5IG9uLlxyXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ3NlbGVjdCd9KVxyXG5leHBvcnQgY2xhc3MgRGVjb3JhdG9yRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlbClcclxuICAgIH1cclxufVxyXG5cclxuLypcclxuIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0XHJcbiBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqLyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
