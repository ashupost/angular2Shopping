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
var core_1 = require('angular2/core');
var edit_item_1 = require('./edit-item');
var heroes_service_1 = require('./heroes.service');
var hero_card_component_1 = require('./hero-card.component');
var hero_editor_component_1 = require('./hero-editor.component');
var HeroesListComponent = (function () {
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
exports.HeroesListComponent = HeroesListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZXJhcmNoaWNhbC1kZXBlbmRlbmN5LWluamVjdGlvbi9oZXJvZXMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4QywwQkFBdUIsYUFBYSxDQUFDLENBQUE7QUFDckMsK0JBQTRCLGtCQUFrQixDQUFDLENBQUE7QUFDL0Msb0NBQWdDLHVCQUF1QixDQUFDLENBQUE7QUFDeEQsc0NBQWtDLHlCQUF5QixDQUFDLENBQUE7QUF1QjVEO0lBRUksNkJBQVksYUFBNEI7UUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxvQkFBUSxDQUFDLElBQUksQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELHFDQUFPLEdBQVAsVUFBUyxRQUF3QixFQUFFLFdBQWlCO1FBQ2hELFFBQVEsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBQzVCLFFBQVEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCx3Q0FBVSxHQUFWLFVBQVksUUFBd0I7UUFDaEMsUUFBUSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQWpDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsbW1CQWVIO1lBQ1AsVUFBVSxFQUFFLENBQUMsdUNBQWlCLEVBQUUsMkNBQW1CLENBQUM7U0FDdkQsQ0FBQzs7MkJBQUE7SUFlRiwwQkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFksMkJBQW1CLHNCQWMvQixDQUFBIiwiZmlsZSI6ImhpZXJhcmNoaWNhbC1kZXBlbmRlbmN5LWluamVjdGlvbi9oZXJvZXMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7RWRpdEl0ZW19IGZyb20gJy4vZWRpdC1pdGVtJztcclxuaW1wb3J0IHtIZXJvZXNTZXJ2aWNlfSBmcm9tICcuL2hlcm9lcy5zZXJ2aWNlJztcclxuaW1wb3J0IHtIZXJvQ2FyZENvbXBvbmVudH0gZnJvbSAnLi9oZXJvLWNhcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHtIZXJvRWRpdG9yQ29tcG9uZW50fSBmcm9tICcuL2hlcm8tZWRpdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SGVyb30gZnJvbSAnLi9oZXJvJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdoZXJvZXMtbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgZWRpdEl0ZW0gb2YgaGVyb2VzXCI+XHJcbiAgICAgICAgICAgICAgPGhlcm8tY2FyZCBbaGlkZGVuXT1cImVkaXRJdGVtLmVkaXRpbmdcIiBbaGVyb109XCJlZGl0SXRlbS5pdGVtXCI+PC9oZXJvLWNhcmQ+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBbaGlkZGVuXT1cImVkaXRJdGVtLmVkaXRpbmdcIiAoY2xpY2spPVwiZWRpdEl0ZW0uZWRpdGluZyA9IHRydWVcIj5FZGl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGhyPlxyXG4gICAgICAgICAgICAgIDxoZXJvLWVkaXRvciBcclxuICAgICAgICAgICAgICAgICAgICAgKHNhdmVkKT1cIm9uU2F2ZWQoZWRpdEl0ZW0sICRldmVudClcIiBcclxuICAgICAgICAgICAgICAgICAgICAgKGNhbmNlbGVkKT1cIm9uQ2FuY2VsZWQoZWRpdEl0ZW0pXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgIFtoaWRkZW5dPVwiIWVkaXRJdGVtLmVkaXRpbmdcIiBcclxuICAgICAgICAgICAgICAgICAgICAgW2hlcm9dPVwiZWRpdEl0ZW0uaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDwvaGVyby1lZGl0b3I+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PmAsXHJcbiAgICBkaXJlY3RpdmVzOiBbSGVyb0NhcmRDb21wb25lbnQsIEhlcm9FZGl0b3JDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZXJvZXNMaXN0Q29tcG9uZW50IHtcclxuICAgIGhlcm9lczogQXJyYXk8RWRpdEl0ZW08SGVybz4+O1xyXG4gICAgY29uc3RydWN0b3IoaGVyb2VzU2VydmljZTogSGVyb2VzU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuaGVyb2VzID0gaGVyb2VzU2VydmljZS5nZXRIZXJvZXMoKS5tYXAoaXRlbSA9PiBuZXcgRWRpdEl0ZW0oaXRlbSkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2F2ZWQgKGVkaXRJdGVtOiBFZGl0SXRlbTxIZXJvPiwgdXBkYXRlZEhlcm86IEhlcm8pIHtcclxuICAgICAgICBlZGl0SXRlbS5pdGVtID0gdXBkYXRlZEhlcm87XHJcbiAgICAgICAgZWRpdEl0ZW0uZWRpdGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2FuY2VsZWQgKGVkaXRJdGVtOiBFZGl0SXRlbTxIZXJvPikge1xyXG4gICAgICAgIGVkaXRJdGVtLmVkaXRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
