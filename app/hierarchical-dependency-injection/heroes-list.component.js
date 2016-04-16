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
                        template: "\n    <div>\n      <ul>\n        <li *ngFor=\"#editItem of heroes\">\n              <hero-card [hidden]=\"editItem.editing\" [hero]=\"editItem.item\"></hero-card>\n              <button [hidden]=\"editItem.editing\" (click)=\"editItem.editing = true\">Edit</button>\n              <hero-editor \n                     (saved)=\"onSaved(editItem, $event)\" \n                     (canceled)=\"onCanceled(editItem)\" \n                     [hidden]=\"!editItem.editing\" \n                     [hero]=\"editItem.item\">\n              </hero-editor>\n        </li>\n      </ul>\n    </div>",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZXJhcmNoaWNhbC1kZXBlbmRlbmN5LWluamVjdGlvbi9oZXJvZXMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQkE7Z0JBRUksNkJBQVksYUFBNEI7b0JBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksb0JBQVEsQ0FBQyxJQUFJLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO2dCQUM1RSxDQUFDO2dCQUVELHFDQUFPLEdBQVAsVUFBUyxRQUF3QixFQUFFLFdBQWlCO29CQUNoRCxRQUFRLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztvQkFDNUIsUUFBUSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQzdCLENBQUM7Z0JBRUQsd0NBQVUsR0FBVixVQUFZLFFBQXdCO29CQUNoQyxRQUFRLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDN0IsQ0FBQztnQkFoQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLDRrQkFjSDt3QkFDUCxVQUFVLEVBQUUsQ0FBQyx1Q0FBaUIsRUFBRSwyQ0FBbUIsQ0FBQztxQkFDdkQsQ0FBQzs7dUNBQUE7Z0JBZUYsMEJBQUM7WUFBRCxDQWRBLEFBY0MsSUFBQTtZQWRELHFEQWNDLENBQUEiLCJmaWxlIjoiaGllcmFyY2hpY2FsLWRlcGVuZGVuY3ktaW5qZWN0aW9uL2hlcm9lcy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtFZGl0SXRlbX0gZnJvbSAnLi9lZGl0LWl0ZW0nO1xyXG5pbXBvcnQge0hlcm9lc1NlcnZpY2V9IGZyb20gJy4vaGVyb2VzLnNlcnZpY2UnO1xyXG5pbXBvcnQge0hlcm9DYXJkQ29tcG9uZW50fSBmcm9tICcuL2hlcm8tY2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0hlcm9FZGl0b3JDb21wb25lbnR9IGZyb20gJy4vaGVyby1lZGl0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHtIZXJvfSBmcm9tICcuL2hlcm8nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hlcm9lcy1saXN0JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpICpuZ0Zvcj1cIiNlZGl0SXRlbSBvZiBoZXJvZXNcIj5cclxuICAgICAgICAgICAgICA8aGVyby1jYXJkIFtoaWRkZW5dPVwiZWRpdEl0ZW0uZWRpdGluZ1wiIFtoZXJvXT1cImVkaXRJdGVtLml0ZW1cIj48L2hlcm8tY2FyZD5cclxuICAgICAgICAgICAgICA8YnV0dG9uIFtoaWRkZW5dPVwiZWRpdEl0ZW0uZWRpdGluZ1wiIChjbGljayk9XCJlZGl0SXRlbS5lZGl0aW5nID0gdHJ1ZVwiPkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8aGVyby1lZGl0b3IgXHJcbiAgICAgICAgICAgICAgICAgICAgIChzYXZlZCk9XCJvblNhdmVkKGVkaXRJdGVtLCAkZXZlbnQpXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgIChjYW5jZWxlZCk9XCJvbkNhbmNlbGVkKGVkaXRJdGVtKVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICBbaGlkZGVuXT1cIiFlZGl0SXRlbS5lZGl0aW5nXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgIFtoZXJvXT1cImVkaXRJdGVtLml0ZW1cIj5cclxuICAgICAgICAgICAgICA8L2hlcm8tZWRpdG9yPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5gLFxyXG4gICAgZGlyZWN0aXZlczogW0hlcm9DYXJkQ29tcG9uZW50LCBIZXJvRWRpdG9yQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVyb2VzTGlzdENvbXBvbmVudCB7XHJcbiAgICBoZXJvZXM6IEFycmF5PEVkaXRJdGVtPEhlcm8+PjtcclxuICAgIGNvbnN0cnVjdG9yKGhlcm9lc1NlcnZpY2U6IEhlcm9lc1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmhlcm9lcyA9IGhlcm9lc1NlcnZpY2UuZ2V0SGVyb2VzKCkubWFwKGl0ZW0gPT4gbmV3IEVkaXRJdGVtKGl0ZW0pKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNhdmVkIChlZGl0SXRlbTogRWRpdEl0ZW08SGVybz4sIHVwZGF0ZWRIZXJvOiBIZXJvKSB7XHJcbiAgICAgICAgZWRpdEl0ZW0uaXRlbSA9IHVwZGF0ZWRIZXJvO1xyXG4gICAgICAgIGVkaXRJdGVtLmVkaXRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNhbmNlbGVkIChlZGl0SXRlbTogRWRpdEl0ZW08SGVybz4pIHtcclxuICAgICAgICBlZGl0SXRlbS5lZGl0aW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
