System.register(['angular2/core', './level-2.component'], function(exports_1, context_1) {
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
    var core_1, core_2, level_2_component_1;
    var Level1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (level_2_component_1_1) {
                level_2_component_1 = level_2_component_1_1;
            }],
        execute: function() {
            Level1Component = (function () {
                function Level1Component() {
                    this.changed = new core_1.EventEmitter();
                }
                Level1Component.prototype.onChange = function (value) {
                    this.text = value;
                    this.changed.emit(value);
                };
                Level1Component.prototype.onLevel2Changed = function (value) {
                    this.text = value;
                    this.changed.emit(value);
                };
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', Object)
                ], Level1Component.prototype, "changed", void 0);
                Level1Component = __decorate([
                    core_1.Component({
                        selector: 'level-1-component',
                        template: "\n  \n    <h4>Level 1 Component</h4>\n    <input type=\"text\" #textElement value=\"{{text}}\">\n    \n    <button (click)=\"onChange(textElement.value)\">Change</button>\n    <br><br>\n    <div style=\"background-color: #0b97c4; margin: 50px;\" id=\"c3\">\n         <level-2-component [text]=\"text\" (changed) = \"onLevel2Changed($event)\"></level-2-component>\n    </div>\n \n",
                        directives: [level_2_component_1.Leve12Component],
                        inputs: ['text']
                    }), 
                    __metadata('design:paramtypes', [])
                ], Level1Component);
                return Level1Component;
            }());
            exports_1("Level1Component", Level1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEtZmxvdy9sZXZlbC0xLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQkE7Z0JBR0k7b0JBRFUsWUFBTyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO2dCQUd2QyxDQUFDO2dCQUNELGtDQUFRLEdBQVIsVUFBUyxLQUFLO29CQUNWLElBQUksQ0FBQyxJQUFJLEdBQUUsS0FBSyxDQUFDO29CQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztnQkFDRCx5Q0FBZSxHQUFmLFVBQWdCLEtBQUs7b0JBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUMsS0FBSyxDQUFDO29CQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFN0IsQ0FBQztnQkFaRDtvQkFBQyxhQUFNLEVBQUU7O2dFQUFBO2dCQXBCYjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7d0JBQzdCLFFBQVEsRUFBRSw2WEFXYjt3QkFDRyxVQUFVLEVBQUUsQ0FBQyxtQ0FBZSxDQUFDO3dCQUM3QixNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7cUJBRW5CLENBQUM7O21DQUFBO2dCQWlCRixzQkFBQztZQUFELENBaEJBLEFBZ0JDLElBQUE7WUFoQkQsNkNBZ0JDLENBQUEiLCJmaWxlIjoiZGF0YS1mbG93L2xldmVsLTEuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7T3V0cHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtMZXZlMTJDb21wb25lbnR9IGZyb20gJy4vbGV2ZWwtMi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xldmVsLTEtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgXHJcbiAgICA8aDQ+TGV2ZWwgMSBDb21wb25lbnQ8L2g0PlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3RleHRFbGVtZW50IHZhbHVlPVwie3t0ZXh0fX1cIj5cclxuICAgIFxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwib25DaGFuZ2UodGV4dEVsZW1lbnQudmFsdWUpXCI+Q2hhbmdlPC9idXR0b24+XHJcbiAgICA8YnI+PGJyPlxyXG4gICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICMwYjk3YzQ7IG1hcmdpbjogNTBweDtcIiBpZD1cImMzXCI+XHJcbiAgICAgICAgIDxsZXZlbC0yLWNvbXBvbmVudCBbdGV4dF09XCJ0ZXh0XCIgKGNoYW5nZWQpID0gXCJvbkxldmVsMkNoYW5nZWQoJGV2ZW50KVwiPjwvbGV2ZWwtMi1jb21wb25lbnQ+XHJcbiAgICA8L2Rpdj5cclxuIFxyXG5gLFxyXG4gICAgZGlyZWN0aXZlczogW0xldmUxMkNvbXBvbmVudF0sXHJcbiAgICBpbnB1dHM6IFsndGV4dCddXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGV2ZWwxQ29tcG9uZW50IHtcclxuICAgIHRleHQ6c3RyaW5nO1xyXG4gICAgQE91dHB1dCgpIGNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgIH1cclxuICAgIG9uQ2hhbmdlKHZhbHVlKXtcclxuICAgICAgICB0aGlzLnRleHQ9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlZC5lbWl0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIG9uTGV2ZWwyQ2hhbmdlZCh2YWx1ZSl7XHJcbiAgICAgICAgdGhpcy50ZXh0PXZhbHVlO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlZC5lbWl0KHZhbHVlKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
