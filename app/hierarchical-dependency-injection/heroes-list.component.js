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
//# sourceMappingURL=heroes-list.component.js.map