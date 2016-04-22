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
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], Level1Component.prototype, "text", void 0);
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', Object)
                ], Level1Component.prototype, "changed", void 0);
                Level1Component = __decorate([
                    core_1.Component({
                        selector: 'level-1-component',
                        template: "\n  \n    <h4>Level 1 Component</h4>\n    <input type=\"text\" #textElement value=\"{{text}}\">\n    \n    <button (click)=\"onChange(textElement.value)\">Change</button>\n    <br><br>\n    <div style=\"background-color: #0b97c4; margin: 50px;\" id=\"c3\">\n         <level-2-component [text]=\"text\" (changed) = \"onLevel2Changed($event)\"></level-2-component>\n    </div>\n \n",
                        directives: [level_2_component_1.Leve12Component]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Level1Component);
                return Level1Component;
            }());
            exports_1("Level1Component", Level1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEtZmxvdy9sZXZlbC0xLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBR0k7b0JBRFUsWUFBTyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO2dCQUN4QixDQUFDO2dCQUNoQixrQ0FBUSxHQUFSLFVBQVMsS0FBSztvQkFDVixJQUFJLENBQUMsSUFBSSxHQUFFLEtBQUssQ0FBQztvQkFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzdCLENBQUM7Z0JBQ0QseUNBQWUsR0FBZixVQUFnQixLQUFLO29CQUNqQixJQUFJLENBQUMsSUFBSSxHQUFDLEtBQUssQ0FBQztvQkFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRTdCLENBQUM7Z0JBWEQ7b0JBQUMsWUFBSyxFQUFFOzs2REFBQTtnQkFDUjtvQkFBQyxhQUFNLEVBQUU7O2dFQUFBO2dCQWxCYjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7d0JBQzdCLFFBQVEsRUFBRSw2WEFXYjt3QkFDRyxVQUFVLEVBQUUsQ0FBQyxtQ0FBZSxDQUFDO3FCQUNoQyxDQUFDOzttQ0FBQTtnQkFjRixzQkFBQztZQUFELENBYkEsQUFhQyxJQUFBO1lBYkQsNkNBYUMsQ0FBQSIsImZpbGUiOiJkYXRhLWZsb3cvbGV2ZWwtMS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtPdXRwdXQsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtMZXZlMTJDb21wb25lbnR9IGZyb20gJy4vbGV2ZWwtMi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xldmVsLTEtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgXHJcbiAgICA8aDQ+TGV2ZWwgMSBDb21wb25lbnQ8L2g0PlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3RleHRFbGVtZW50IHZhbHVlPVwie3t0ZXh0fX1cIj5cclxuICAgIFxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwib25DaGFuZ2UodGV4dEVsZW1lbnQudmFsdWUpXCI+Q2hhbmdlPC9idXR0b24+XHJcbiAgICA8YnI+PGJyPlxyXG4gICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICMwYjk3YzQ7IG1hcmdpbjogNTBweDtcIiBpZD1cImMzXCI+XHJcbiAgICAgICAgIDxsZXZlbC0yLWNvbXBvbmVudCBbdGV4dF09XCJ0ZXh0XCIgKGNoYW5nZWQpID0gXCJvbkxldmVsMkNoYW5nZWQoJGV2ZW50KVwiPjwvbGV2ZWwtMi1jb21wb25lbnQ+XHJcbiAgICA8L2Rpdj5cclxuIFxyXG5gLFxyXG4gICAgZGlyZWN0aXZlczogW0xldmUxMkNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExldmVsMUNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSB0ZXh0OnN0cmluZztcclxuICAgIEBPdXRwdXQoKSBjaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgY29uc3RydWN0b3IoKXsgfVxyXG4gICAgb25DaGFuZ2UodmFsdWUpe1xyXG4gICAgICAgIHRoaXMudGV4dD0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VkLmVtaXQodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgb25MZXZlbDJDaGFuZ2VkKHZhbHVlKXtcclxuICAgICAgICB0aGlzLnRleHQ9dmFsdWU7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VkLmVtaXQodmFsdWUpO1xyXG5cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
