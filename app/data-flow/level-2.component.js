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
    var core_1, core_2;
    var Leve12Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            Leve12Component = (function () {
                function Leve12Component() {
                    this.changed = new core_1.EventEmitter();
                }
                Leve12Component.prototype.onChange = function (value) {
                    this.changed.emit(value);
                };
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', Object)
                ], Leve12Component.prototype, "changed", void 0);
                Leve12Component = __decorate([
                    core_1.Component({
                        selector: 'level-2-component',
                        template: "\n    <h4>Level 2 Component</h4>\n    <input type=\"text\" #textElement value=\"{{text}}\">\n    \n    <button (click)=\"onChange(textElement.value)\">Change</button>\n     ",
                        inputs: ['text']
                    }), 
                    __metadata('design:paramtypes', [])
                ], Leve12Component);
                return Leve12Component;
            }());
            exports_1("Leve12Component", Leve12Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEtZmxvdy9sZXZlbC0yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFHSTtvQkFEVSxZQUFPLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBQ3BCLENBQUM7Z0JBQ3BCLGtDQUFRLEdBQVIsVUFBUyxLQUFLO29CQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM3QixDQUFDO2dCQUpEO29CQUFDLGFBQU0sRUFBRTs7Z0VBQUE7Z0JBWmI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsbUJBQW1CO3dCQUM3QixRQUFRLEVBQUUsK0tBS1I7d0JBQ0YsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO3FCQUNuQixDQUFDOzttQ0FBQTtnQkFRRixzQkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBUEQsNkNBT0MsQ0FBQSIsImZpbGUiOiJkYXRhLWZsb3cvbGV2ZWwtMi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtPdXRwdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGV2ZWwtMi1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxoND5MZXZlbCAyIENvbXBvbmVudDwvaDQ+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjdGV4dEVsZW1lbnQgdmFsdWU9XCJ7e3RleHR9fVwiPlxyXG4gICAgXHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJvbkNoYW5nZSh0ZXh0RWxlbWVudC52YWx1ZSlcIj5DaGFuZ2U8L2J1dHRvbj5cclxuICAgICBgLFxyXG4gICAgaW5wdXRzOiBbJ3RleHQnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGV2ZTEyQ29tcG9uZW50IHtcclxuICAgIHRleHQ6c3RyaW5nO1xyXG4gICAgQE91dHB1dCgpIGNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgICAgfVxyXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZWQuZW1pdCh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
