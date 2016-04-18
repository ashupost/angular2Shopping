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
    var DecoratorDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // set the selector for the element type to spy on.
            DecoratorDirective = (function () {
                function DecoratorDirective(el) {
                    console.log(el);
                }
                DecoratorDirective = __decorate([
                    core_1.Directive({ selector: 'select' }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], DecoratorDirective);
                return DecoratorDirective;
            }());
            exports_1("DecoratorDirective", DecoratorDirective);
        }
    }
});
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLXN5bnRheC9kZWNvcmF0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUEsbURBQW1EO1lBRW5EO2dCQUNJLDRCQUFZLEVBQWM7b0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUE7Z0JBQ25CLENBQUM7Z0JBSkw7b0JBQUMsZ0JBQVMsQ0FBQyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQzs7c0NBQUE7Z0JBS2hDLHlCQUFDO1lBQUQsQ0FKQSxBQUlDLElBQUE7WUFKRCxtREFJQyxDQUFBOzs7O0FBRUQ7Ozs7R0FJRyIsImZpbGUiOiJ0ZW1wbGF0ZS1zeW50YXgvZGVjb3JhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFVzZWZ1bCBmb3Igc3B5aW5nIG9uIGFuIGVsZW1lbnRcclxuLy8gZm9yIGZ1bjsgbm90IHVzZWQgKHlldClcclxuaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWZ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuLy8gc2V0IHRoZSBzZWxlY3RvciBmb3IgdGhlIGVsZW1lbnQgdHlwZSB0byBzcHkgb24uXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnc2VsZWN0J30pXHJcbmV4cG9ydCBjbGFzcyBEZWNvcmF0b3JEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVsKVxyXG4gICAgfVxyXG59XHJcblxyXG4vKlxyXG4gQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcclxuIGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHA6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuICovIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
