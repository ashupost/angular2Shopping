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
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], Leve12Component.prototype, "text", void 0);
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', Object)
                ], Leve12Component.prototype, "changed", void 0);
                Leve12Component = __decorate([
                    core_1.Component({
                        selector: 'level-2-component',
                        template: "\n    <h4>Level 2 Component</h4>\n    <input type=\"text\" #textElement value=\"{{text}}\">\n    \n    <button (click)=\"onChange(textElement.value)\" class=\"btn btn-primary btn-sm\">Change</button>\n     "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Leve12Component);
                return Leve12Component;
            }());
            exports_1("Leve12Component", Leve12Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEtZmxvdy9sZXZlbC0yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFHSTtvQkFEVSxZQUFPLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBQ3BCLENBQUM7Z0JBQ3BCLGtDQUFRLEdBQVIsVUFBUyxLQUFLO29CQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM3QixDQUFDO2dCQUxEO29CQUFDLFlBQUssRUFBRTs7NkRBQUE7Z0JBQ1I7b0JBQUMsYUFBTSxFQUFFOztnRUFBQTtnQkFYYjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7d0JBQzdCLFFBQVEsRUFBRSxnTkFLUjtxQkFDTCxDQUFDOzttQ0FBQTtnQkFRRixzQkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBUEQsNkNBT0MsQ0FBQSIsImZpbGUiOiJkYXRhLWZsb3cvbGV2ZWwtMi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtPdXRwdXQsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xldmVsLTItY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8aDQ+TGV2ZWwgMiBDb21wb25lbnQ8L2g0PlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3RleHRFbGVtZW50IHZhbHVlPVwie3t0ZXh0fX1cIj5cclxuICAgIFxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwib25DaGFuZ2UodGV4dEVsZW1lbnQudmFsdWUpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCI+Q2hhbmdlPC9idXR0b24+XHJcbiAgICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGV2ZTEyQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIHRleHQ6c3RyaW5nO1xyXG4gICAgQE91dHB1dCgpIGNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgICAgfVxyXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZWQuZW1pdCh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
