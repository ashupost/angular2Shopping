System.register(['angular2/core', './edit-item', './heroes.service', './hero-card.component', './hero-editor.component'], function(exports_1, context_1) {
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
    var core_1, edit_item_1, heroes_service_1, hero_card_component_1, hero_editor_component_1;
    var HeroesListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (edit_item_1_1) {
                edit_item_1 = edit_item_1_1;
            },
            function (heroes_service_1_1) {
                heroes_service_1 = heroes_service_1_1;
            },
            function (hero_card_component_1_1) {
                hero_card_component_1 = hero_card_component_1_1;
            },
            function (hero_editor_component_1_1) {
                hero_editor_component_1 = hero_editor_component_1_1;
            }],
        execute: function() {
            HeroesListComponent = (function () {
                function HeroesListComponent(heroesService) {
                    this.heroes = heroesService.getHeroes().map(function (item) { return new edit_item_1.EditItem(item); });
                }
                HeroesListComponent.prototype.onSaved = function (editItem, updatedHero) {
                    editItem.item = updatedHero;
                    editItem.editing = false;
                };
                HeroesListComponent.prototype.onCanceled = function (editItem) {
                    editItem.editing = false;
                };
                HeroesListComponent = __decorate([
                    core_1.Component({
                        selector: 'heroes-list',
                        template: "\n    <div>\n      <ul>\n        <li *ngFor=\"let editItem of heroes\">\n              <hero-card [hidden]=\"editItem.editing\" [hero]=\"editItem.item\"></hero-card>\n              <button [hidden]=\"editItem.editing\" (click)=\"editItem.editing = true\">Edit</button>\n              <hr>\n              <hero-editor \n                     (saved)=\"onSaved(editItem, $event)\" \n                     (canceled)=\"onCanceled(editItem)\" \n                     [hidden]=\"!editItem.editing\" \n                     [hero]=\"editItem.item\">\n              </hero-editor>\n        </li>\n      </ul>\n    </div>",
                        directives: [hero_card_component_1.HeroCardComponent, hero_editor_component_1.HeroEditorComponent]
                    }), 
                    __metadata('design:paramtypes', [heroes_service_1.HeroesService])
                ], HeroesListComponent);
                return HeroesListComponent;
            }());
            exports_1("HeroesListComponent", HeroesListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZXJhcmNoaWNhbC1kZXBlbmRlbmN5LWluamVjdGlvbi9oZXJvZXMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEyQkE7Z0JBRUksNkJBQVksYUFBNEI7b0JBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksb0JBQVEsQ0FBQyxJQUFJLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO2dCQUM1RSxDQUFDO2dCQUVELHFDQUFPLEdBQVAsVUFBUyxRQUF3QixFQUFFLFdBQWlCO29CQUNoRCxRQUFRLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztvQkFDNUIsUUFBUSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQzdCLENBQUM7Z0JBRUQsd0NBQVUsR0FBVixVQUFZLFFBQXdCO29CQUNoQyxRQUFRLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDN0IsQ0FBQztnQkFqQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLG1tQkFlSDt3QkFDUCxVQUFVLEVBQUUsQ0FBQyx1Q0FBaUIsRUFBRSwyQ0FBbUIsQ0FBQztxQkFDdkQsQ0FBQzs7dUNBQUE7Z0JBZUYsMEJBQUM7WUFBRCxDQWRBLEFBY0MsSUFBQTtZQWRELHFEQWNDLENBQUEiLCJmaWxlIjoiaGllcmFyY2hpY2FsLWRlcGVuZGVuY3ktaW5qZWN0aW9uL2hlcm9lcy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtFZGl0SXRlbX0gZnJvbSAnLi9lZGl0LWl0ZW0nO1xyXG5pbXBvcnQge0hlcm9lc1NlcnZpY2V9IGZyb20gJy4vaGVyb2VzLnNlcnZpY2UnO1xyXG5pbXBvcnQge0hlcm9DYXJkQ29tcG9uZW50fSBmcm9tICcuL2hlcm8tY2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0hlcm9FZGl0b3JDb21wb25lbnR9IGZyb20gJy4vaGVyby1lZGl0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHtIZXJvfSBmcm9tICcuL2hlcm8nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hlcm9lcy1saXN0JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBlZGl0SXRlbSBvZiBoZXJvZXNcIj5cclxuICAgICAgICAgICAgICA8aGVyby1jYXJkIFtoaWRkZW5dPVwiZWRpdEl0ZW0uZWRpdGluZ1wiIFtoZXJvXT1cImVkaXRJdGVtLml0ZW1cIj48L2hlcm8tY2FyZD5cclxuICAgICAgICAgICAgICA8YnV0dG9uIFtoaWRkZW5dPVwiZWRpdEl0ZW0uZWRpdGluZ1wiIChjbGljayk9XCJlZGl0SXRlbS5lZGl0aW5nID0gdHJ1ZVwiPkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8aHI+XHJcbiAgICAgICAgICAgICAgPGhlcm8tZWRpdG9yIFxyXG4gICAgICAgICAgICAgICAgICAgICAoc2F2ZWQpPVwib25TYXZlZChlZGl0SXRlbSwgJGV2ZW50KVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAoY2FuY2VsZWQpPVwib25DYW5jZWxlZChlZGl0SXRlbSlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgW2hpZGRlbl09XCIhZWRpdEl0ZW0uZWRpdGluZ1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICBbaGVyb109XCJlZGl0SXRlbS5pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPC9oZXJvLWVkaXRvcj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+YCxcclxuICAgIGRpcmVjdGl2ZXM6IFtIZXJvQ2FyZENvbXBvbmVudCwgSGVyb0VkaXRvckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhlcm9lc0xpc3RDb21wb25lbnQge1xyXG4gICAgaGVyb2VzOiBBcnJheTxFZGl0SXRlbTxIZXJvPj47XHJcbiAgICBjb25zdHJ1Y3RvcihoZXJvZXNTZXJ2aWNlOiBIZXJvZXNTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5oZXJvZXMgPSBoZXJvZXNTZXJ2aWNlLmdldEhlcm9lcygpLm1hcChpdGVtID0+IG5ldyBFZGl0SXRlbShpdGVtKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TYXZlZCAoZWRpdEl0ZW06IEVkaXRJdGVtPEhlcm8+LCB1cGRhdGVkSGVybzogSGVybykge1xyXG4gICAgICAgIGVkaXRJdGVtLml0ZW0gPSB1cGRhdGVkSGVybztcclxuICAgICAgICBlZGl0SXRlbS5lZGl0aW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25DYW5jZWxlZCAoZWRpdEl0ZW06IEVkaXRJdGVtPEhlcm8+KSB7XHJcbiAgICAgICAgZWRpdEl0ZW0uZWRpdGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
