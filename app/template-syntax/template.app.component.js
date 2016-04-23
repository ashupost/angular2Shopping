System.register(['angular2/core', './hero', './hero-detail.component', './my-click.directive'], function(exports_1, context_1) {
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
    var core_1, hero_1, hero_detail_component_1, my_click_directive_1;
    var Color, TemplateAppComponent;
    // Alerter fn: monkey patch during test
    function alerter(msg) {
        window.alert(msg);
    }
    exports_1("alerter", alerter);
    // helper to convert viewChildren to an array of HTMLElements
    function toArray(viewChildren) {
        var result = [];
        var children = viewChildren.toArray()[0].nativeElement.children;
        for (var i = 0; i < children.length; i++) {
            result.push(children[i]);
        }
        return result;
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (my_click_directive_1_1) {
                my_click_directive_1 = my_click_directive_1_1;
            }],
        execute: function() {
            (function (Color) {
                Color[Color["Red"] = 0] = "Red";
                Color[Color["Green"] = 1] = "Green";
                Color[Color["Blue"] = 2] = "Blue";
            })(Color || (Color = {}));
            exports_1("Color", Color);
            ;
            /**
             * Giant grab bag of stuff to drive the chapter
             */
            TemplateAppComponent = (function () {
                function TemplateAppComponent() {
                    this.actionName = 'Go for it';
                    this.alert = alerter;
                    this.badCurly = 'bad curly';
                    this.classes = 'special';
                    this.canSave = true;
                    this.Color = Color;
                    this.color = Color.Red;
                    this.currentHero = hero_1.Hero.MockHeroes[0];
                    // heroImageUrl = 'http://www.wpclipart.com/cartoon/people/hero/hero_silhoutte_T.png';
                    // Public Domain terms of use: http://www.wpclipart.com/terms.html
                    this.heroImageUrl = 'dist/img/avatar.png';
                    //iconUrl = 'https://angular.io/resources/images/logos/standard/shield-large.png';
                    this.iconUrl = 'dist/img/avatar2.png';
                    this.isActive = false;
                    this.isSpecial = true;
                    this.isUnchanged = true;
                    this.nullHero = null; // or undefined
                    this.product = {
                        name: 'frimfram',
                        price: 42
                    };
                    this._samenessCount = 5;
                    this.toeChoice = '';
                    this.title = 'Template Syntax';
                    this.val = 2;
                    //  villainImageUrl = 'http://www.clker.com/cliparts/u/s/y/L/x/9/villain-man-hi.png'
                    // Public Domain terms of use http://www.clker.com/disclaimer.html
                    this.villainImageUrl = 'dist/img/avatar3.png';
                    this.heroesNoTrackByChangeCount = 0;
                    this.heroesWithTrackByChangeCount = 0;
                }
                TemplateAppComponent.prototype.ngOnInit = function () {
                    this.refreshHeroes();
                };
                TemplateAppComponent.prototype.ngAfterViewInit = function () {
                    this._detectNgForTrackByEffects();
                };
                TemplateAppComponent.prototype.callFax = function (value) { this.alert("Faxing " + value + " ..."); };
                TemplateAppComponent.prototype.callPhone = function (value) { this.alert("Calling " + value + " ..."); };
                TemplateAppComponent.prototype.colorToggle = function () { this.color = (this.color === Color.Red) ? Color.Blue : Color.Red; };
                TemplateAppComponent.prototype.deleteHero = function (hero) {
                    this.alert('Deleted hero: ' + (hero && hero.firstName));
                };
                TemplateAppComponent.prototype.getStyles = function (el) {
                    var styles = window.getComputedStyle(el);
                    var showStyles = {};
                    for (var p in this.setStyles()) {
                        showStyles[p] = styles[p];
                    }
                    return JSON.stringify(showStyles);
                };
                TemplateAppComponent.prototype.getVal = function () { return this.val; };
                ;
                TemplateAppComponent.prototype.onCancel = function (event) {
                    var evtMsg = event ? ' Event target is ' + event.target.innerHTML : '';
                    this.alert('Canceled.' + evtMsg);
                };
                TemplateAppComponent.prototype.onClickMe = function (event) {
                    var evtMsg = event ? ' Event target class is ' + event.target.className : '';
                    this.alert('Click me.' + evtMsg);
                };
                TemplateAppComponent.prototype.onSave = function (event) {
                    var evtMsg = event ? ' Event target is ' + event.target.innerText : '';
                    this.alert('Saved.' + evtMsg);
                };
                TemplateAppComponent.prototype.onSubmit = function (form) {
                    var evtMsg = form.valid ?
                        ' Form value is ' + JSON.stringify(form.value) :
                        ' Form is invalid';
                    this.alert('Form submitted.' + evtMsg);
                };
                // update this.heroes with fresh set of cloned heroes
                TemplateAppComponent.prototype.refreshHeroes = function () {
                    this.heroes = hero_1.Hero.MockHeroes.map(function (hero) { return hero_1.Hero.clone(hero); });
                };
                TemplateAppComponent.prototype.moreOfTheSame = function () { this._samenessCount++; };
                ;
                Object.defineProperty(TemplateAppComponent.prototype, "sameAsItEverWas", {
                    get: function () {
                        var result = Array(this._samenessCount);
                        for (var i = result.length; i-- > 0;) {
                            result[i] = 'same as it ever was ...';
                        }
                        return result;
                        // return [1,2,3,4,5].map(id => {
                        //   return {id:id, text: 'same as it ever was ...'};
                        // });
                    },
                    enumerable: true,
                    configurable: true
                });
                TemplateAppComponent.prototype.setUpperCaseFirstName = function (firstName) {
                    //console.log(firstName);
                    this.currentHero.firstName = firstName.toUpperCase();
                };
                TemplateAppComponent.prototype.setClasses = function () {
                    var classes = {
                        saveable: this.canSave,
                        modified: !this.isUnchanged,
                        special: this.isSpecial,
                    };
                    // compensate for DevMode (sigh)
                    if (JSON.stringify(classes) === JSON.stringify(this._priorClasses)) {
                        return this._priorClasses;
                    }
                    this._priorClasses = classes;
                    return classes;
                };
                TemplateAppComponent.prototype.setStyles = function () {
                    var styles = {
                        // CSS property names
                        'font-style': this.canSave ? 'italic' : 'normal',
                        'font-weight': !this.isUnchanged ? 'bold' : 'normal',
                        'font-size': this.isSpecial ? '24px' : '8px',
                    };
                    // compensate for DevMode (sigh)
                    if (JSON.stringify(styles) === JSON.stringify(this._priorStyles)) {
                        return this._priorStyles;
                    }
                    this._priorStyles = styles;
                    return styles;
                };
                TemplateAppComponent.prototype.toeChooser = function (picker) {
                    var choices = picker.children;
                    for (var i = 0; i < choices.length; i++) {
                        var choice = choices[i];
                        if (choice.checked) {
                            return this.toeChoice = choice.value;
                        }
                    }
                };
                TemplateAppComponent.prototype.trackByHeroes = function (index, hero) { return hero.id; };
                TemplateAppComponent.prototype.trackById = function (index, item) { return item['id']; };
                TemplateAppComponent.prototype._detectNgForTrackByEffects = function () {
                    var _this = this;
                    this._oldNoTrackBy = toArray(this.childrenNoTrackBy);
                    this._oldWithTrackBy = toArray(this.childrenWithTrackBy);
                    this.childrenNoTrackBy.changes.subscribe(function (changes) {
                        var newNoTrackBy = toArray(changes);
                        var isSame = _this._oldNoTrackBy.every(function (v, i) { return v === newNoTrackBy[i]; });
                        if (!isSame) {
                            _this._oldNoTrackBy = newNoTrackBy;
                            _this.heroesNoTrackByChangeCount++;
                        }
                    });
                    this.childrenWithTrackBy.changes.subscribe(function (changes) {
                        var newWithTrackBy = toArray(changes);
                        var isSame = _this._oldWithTrackBy.every(function (v, i) { return v === newWithTrackBy[i]; });
                        if (!isSame) {
                            _this._oldWithTrackBy = newWithTrackBy;
                            _this.heroesWithTrackByChangeCount++;
                        }
                    });
                };
                __decorate([
                    core_1.ViewChildren('noTrackBy'), 
                    __metadata('design:type', core_1.QueryList)
                ], TemplateAppComponent.prototype, "childrenNoTrackBy", void 0);
                __decorate([
                    core_1.ViewChildren('withTrackBy'), 
                    __metadata('design:type', core_1.QueryList)
                ], TemplateAppComponent.prototype, "childrenWithTrackBy", void 0);
                TemplateAppComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'templates/template-syntax/template-app.component.html',
                        directives: [
                            hero_detail_component_1.HeroDetailComponent, hero_detail_component_1.BigHeroDetailComponent,
                            my_click_directive_1.MyClickDirective, my_click_directive_1.MyClickDirective2
                        ],
                        styleUrls: ['templates/template-syntax/template-syntax.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], TemplateAppComponent);
                return TemplateAppComponent;
            }());
            exports_1("TemplateAppComponent", TemplateAppComponent);
        }
    }
});
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLXN5bnRheC90ZW1wbGF0ZS5hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBUUEsdUNBQXVDO0lBQ3ZDLGlCQUF3QixHQUFXO1FBQy9CLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUZELDZCQUVDLENBQUE7SUFpTkQsNkRBQTZEO0lBQzdELGlCQUFpQixZQUFrQztRQUMvQyxJQUFJLE1BQU0sR0FBa0IsRUFBRSxDQUFDO1FBQy9CLElBQUksUUFBUSxHQUFHLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ2hFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDdkUsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O1lBck5ELFdBQVksS0FBSztnQkFBRSwrQkFBRyxDQUFBO2dCQUFFLG1DQUFLLENBQUE7Z0JBQUUsaUNBQUksQ0FBQTtZQUFBLENBQUMsRUFBeEIsS0FBSyxLQUFMLEtBQUssUUFBbUI7c0NBQUE7WUFBQSxDQUFDO1lBRXJDOztlQUVHO1lBU0g7Z0JBQUE7b0JBVUksZUFBVSxHQUFHLFdBQVcsQ0FBQztvQkFDekIsVUFBSyxHQUFHLE9BQU8sQ0FBQztvQkFDaEIsYUFBUSxHQUFHLFdBQVcsQ0FBQztvQkFDdkIsWUFBTyxHQUFHLFNBQVMsQ0FBQztvQkFJcEIsWUFBTyxHQUFJLElBQUksQ0FBQztvQkFFaEIsVUFBSyxHQUFHLEtBQUssQ0FBQztvQkFDZCxVQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztvQkFHbEIsZ0JBQVcsR0FBRyxXQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQXdCakMsc0ZBQXNGO29CQUN0RixrRUFBa0U7b0JBQ2xFLGlCQUFZLEdBQUcscUJBQXFCLENBQUM7b0JBRXJDLGtGQUFrRjtvQkFDbEYsWUFBTyxHQUFHLHNCQUFzQixDQUFDO29CQUNqQyxhQUFRLEdBQUcsS0FBSyxDQUFDO29CQUNqQixjQUFTLEdBQUcsSUFBSSxDQUFDO29CQUNqQixnQkFBVyxHQUFHLElBQUksQ0FBQztvQkFFbkIsYUFBUSxHQUFRLElBQUksQ0FBQyxDQUFDLGVBQWU7b0JBd0JyQyxZQUFPLEdBQUc7d0JBQ04sSUFBSSxFQUFFLFVBQVU7d0JBQ2hCLEtBQUssRUFBRSxFQUFFO3FCQUNaLENBQUM7b0JBT00sbUJBQWMsR0FBRyxDQUFDLENBQUM7b0JBOEMzQixjQUFTLEdBQUcsRUFBRSxDQUFDO29CQVNmLFVBQUssR0FBRyxpQkFBaUIsQ0FBQztvQkFNMUIsUUFBRyxHQUFDLENBQUMsQ0FBQztvQkFDTixvRkFBb0Y7b0JBQ3BGLGtFQUFrRTtvQkFDbEUsb0JBQWUsR0FBRyxzQkFBc0IsQ0FBQTtvQkFVeEMsK0JBQTBCLEdBQUcsQ0FBQyxDQUFDO29CQUMvQixpQ0FBNEIsR0FBRyxDQUFDLENBQUM7Z0JBMEJyQyxDQUFDO2dCQTlMRyx1Q0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDekIsQ0FBQztnQkFFRCw4Q0FBZSxHQUFmO29CQUNJLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO2dCQUN0QyxDQUFDO2dCQU9ELHNDQUFPLEdBQVAsVUFBUSxLQUFZLElBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFVLEtBQUssU0FBTSxDQUFDLENBQUEsQ0FBQSxDQUFDO2dCQUMzRCx3Q0FBUyxHQUFULFVBQVUsS0FBWSxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBVyxLQUFLLFNBQU0sQ0FBQyxDQUFBLENBQUEsQ0FBQztnQkFLNUQsMENBQVcsR0FBWCxjQUFlLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRSxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUEsQ0FBQSxDQUFDO2dCQUkvRSx5Q0FBVSxHQUFWLFVBQVcsSUFBUztvQkFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtnQkFDMUQsQ0FBQztnQkFPRCx3Q0FBUyxHQUFULFVBQVUsRUFBVTtvQkFDaEIsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUN6QyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ3BCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFBLENBQUM7d0JBQzVCLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzlCLENBQUM7b0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBRUQscUNBQU0sR0FBTixjQUFVLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFBLENBQUEsQ0FBQzs7Z0JBZ0IxQix1Q0FBUSxHQUFSLFVBQVMsS0FBbUI7b0JBQ3hCLElBQUksTUFBTSxHQUFHLEtBQUssR0FBRyxtQkFBbUIsR0FBZ0IsS0FBSyxDQUFDLE1BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO29CQUNyRixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDbEMsQ0FBQztnQkFFRCx3Q0FBUyxHQUFULFVBQVUsS0FBbUI7b0JBQ3pCLElBQUksTUFBTSxHQUFHLEtBQUssR0FBRyx5QkFBeUIsR0FBZ0IsS0FBSyxDQUFDLE1BQU8sQ0FBQyxTQUFTLEdBQUksRUFBRSxDQUFDO29CQUM1RixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDbEMsQ0FBQztnQkFFRCxxQ0FBTSxHQUFOLFVBQU8sS0FBbUI7b0JBQ3RCLElBQUksTUFBTSxHQUFHLEtBQUssR0FBRyxtQkFBbUIsR0FBZ0IsS0FBSyxDQUFDLE1BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO29CQUNyRixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDL0IsQ0FBQztnQkFFRCx1Q0FBUSxHQUFSLFVBQVMsSUFBVztvQkFDaEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUs7d0JBQ3ZCLGlCQUFpQixHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzt3QkFDekMsa0JBQWtCLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEdBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQ3hDLENBQUM7Z0JBT0QscURBQXFEO2dCQUNyRCw0Q0FBYSxHQUFiO29CQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxXQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUM7Z0JBQ2hFLENBQUM7Z0JBR0QsNENBQWEsR0FBYixjQUFpQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQSxDQUFDOztnQkFDeEMsc0JBQUksaURBQWU7eUJBQW5CO3dCQUNJLElBQUksTUFBTSxHQUFZLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7d0JBQ2pELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFFLENBQUM7NEJBQUEsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFDLHlCQUF5QixDQUFBO3dCQUFBLENBQUM7d0JBQ3hFLE1BQU0sQ0FBQyxNQUFNLENBQUM7d0JBQ2QsaUNBQWlDO3dCQUNqQyxxREFBcUQ7d0JBQ3JELE1BQU07b0JBQ1YsQ0FBQzs7O21CQUFBO2dCQUVELG9EQUFxQixHQUFyQixVQUFzQixTQUFnQjtvQkFDbEMseUJBQXlCO29CQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3pELENBQUM7Z0JBRUQseUNBQVUsR0FBVjtvQkFDSSxJQUFJLE9BQU8sR0FBSTt3QkFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU87d0JBQ3RCLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXO3dCQUMzQixPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVM7cUJBQzFCLENBQUE7b0JBQ0QsZ0NBQWdDO29CQUNoQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDaEUsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7b0JBQzlCLENBQUM7b0JBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7b0JBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ25CLENBQUM7Z0JBR0Qsd0NBQVMsR0FBVDtvQkFDSSxJQUFJLE1BQU0sR0FBRzt3QkFDVCxxQkFBcUI7d0JBQ3JCLFlBQVksRUFBRyxJQUFJLENBQUMsT0FBTyxHQUFRLFFBQVEsR0FBRyxRQUFRO3dCQUN0RCxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sR0FBSyxRQUFRO3dCQUN0RCxXQUFXLEVBQUksSUFBSSxDQUFDLFNBQVMsR0FBTSxNQUFNLEdBQUssS0FBSztxQkFDdEQsQ0FBQTtvQkFDRCxnQ0FBZ0M7b0JBQ2hDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUM5RCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDN0IsQ0FBQztvQkFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztvQkFDM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDbEIsQ0FBQztnQkFHRCx5Q0FBVSxHQUFWLFVBQVcsTUFBMEI7b0JBQ2pDLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7b0JBQzlCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO3dCQUNqQyxJQUFJLE1BQU0sR0FBcUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMxQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFBO3dCQUFBLENBQUM7b0JBQzlELENBQUM7Z0JBQ0wsQ0FBQztnQkFJRCw0Q0FBYSxHQUFiLFVBQWMsS0FBYSxFQUFFLElBQVUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRTVELHdDQUFTLEdBQVQsVUFBVSxLQUFhLEVBQUUsSUFBUyxJQUFZLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQWtCMUQseURBQTBCLEdBQWxDO29CQUFBLGlCQXFCQztvQkFwQkcsSUFBSSxDQUFDLGFBQWEsR0FBSyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQ3ZELElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO29CQUV6RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE9BQVc7d0JBQ2pELElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxNQUFNLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBQyxDQUFLLEVBQUUsQ0FBUSxJQUFLLE9BQUEsQ0FBQyxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO3dCQUNsRixFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQ1YsS0FBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7NEJBQ2xDLEtBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO3dCQUN0QyxDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFBO29CQUVGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQUMsT0FBVzt3QkFDbkQsSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUN0QyxJQUFJLE1BQU0sR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxVQUFDLENBQUssRUFBRSxDQUFRLElBQUssT0FBQSxDQUFDLEtBQUssY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7d0JBQ3RGLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDVixLQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQzs0QkFDdEMsS0FBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7d0JBQ3hDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQztnQkE5QkQ7b0JBQUMsbUJBQVksQ0FBQyxXQUFXLENBQUM7OytFQUFBO2dCQUMxQjtvQkFBQyxtQkFBWSxDQUFDLGFBQWEsQ0FBQzs7aUZBQUE7Z0JBeEtoQztvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFdBQVcsRUFBRSx1REFBdUQ7d0JBQ3BFLFVBQVUsRUFBRTs0QkFDUiwyQ0FBbUIsRUFBRSw4Q0FBc0I7NEJBQzNDLHFDQUFnQixFQUFFLHNDQUFpQjt5QkFDdEM7d0JBQ0QsU0FBUyxFQUFFLENBQUMsK0NBQStDLENBQUM7cUJBQy9ELENBQUM7O3dDQUFBO2dCQWlNRiwyQkFBQztZQUFELENBaE1BLEFBZ01DLElBQUE7WUFoTUQsdURBZ01DLENBQUE7Ozs7QUFVRDs7OztHQUlHIiwiZmlsZSI6InRlbXBsYXRlLXN5bnRheC90ZW1wbGF0ZS5hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7Q29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBPbkluaXQsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVufSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtOZ0Zvcm19IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge0hlcm99IGZyb20gJy4vaGVybyc7XHJcbmltcG9ydCB7SGVyb0RldGFpbENvbXBvbmVudCwgQmlnSGVyb0RldGFpbENvbXBvbmVudH0gZnJvbSAnLi9oZXJvLWRldGFpbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge015Q2xpY2tEaXJlY3RpdmUsIE15Q2xpY2tEaXJlY3RpdmUyfSBmcm9tICcuL215LWNsaWNrLmRpcmVjdGl2ZSc7XHJcblxyXG4vLyBBbGVydGVyIGZuOiBtb25rZXkgcGF0Y2ggZHVyaW5nIHRlc3RcclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0ZXIobXNnPzpzdHJpbmcpIHtcclxuICAgIHdpbmRvdy5hbGVydChtc2cpO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBDb2xvciB7UmVkLCBHcmVlbiwgQmx1ZX07XHJcblxyXG4vKipcclxuICogR2lhbnQgZ3JhYiBiYWcgb2Ygc3R1ZmYgdG8gZHJpdmUgdGhlIGNoYXB0ZXJcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvdGVtcGxhdGUtc3ludGF4L3RlbXBsYXRlLWFwcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbXHJcbiAgICAgICAgSGVyb0RldGFpbENvbXBvbmVudCwgQmlnSGVyb0RldGFpbENvbXBvbmVudCxcclxuICAgICAgICBNeUNsaWNrRGlyZWN0aXZlLCBNeUNsaWNrRGlyZWN0aXZlMlxyXG4gICAgXSxcclxuICAgIHN0eWxlVXJsczogWyd0ZW1wbGF0ZXMvdGVtcGxhdGUtc3ludGF4L3RlbXBsYXRlLXN5bnRheC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVBcHBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQge1xyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoSGVyb2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMuX2RldGVjdE5nRm9yVHJhY2tCeUVmZmVjdHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBhY3Rpb25OYW1lID0gJ0dvIGZvciBpdCc7XHJcbiAgICBhbGVydCA9IGFsZXJ0ZXI7XHJcbiAgICBiYWRDdXJseSA9ICdiYWQgY3VybHknO1xyXG4gICAgY2xhc3NlcyA9ICdzcGVjaWFsJztcclxuXHJcbiAgICBjYWxsRmF4KHZhbHVlOnN0cmluZykgICB7dGhpcy5hbGVydChgRmF4aW5nICR7dmFsdWV9IC4uLmApfVxyXG4gICAgY2FsbFBob25lKHZhbHVlOnN0cmluZykge3RoaXMuYWxlcnQoYENhbGxpbmcgJHt2YWx1ZX0gLi4uYCl9XHJcbiAgICBjYW5TYXZlID0gIHRydWU7XHJcblxyXG4gICAgQ29sb3IgPSBDb2xvcjtcclxuICAgIGNvbG9yID0gQ29sb3IuUmVkO1xyXG4gICAgY29sb3JUb2dnbGUoKSB7dGhpcy5jb2xvciA9ICh0aGlzLmNvbG9yID09PSBDb2xvci5SZWQpPyBDb2xvci5CbHVlIDogQ29sb3IuUmVkfVxyXG5cclxuICAgIGN1cnJlbnRIZXJvID0gSGVyby5Nb2NrSGVyb2VzWzBdO1xyXG5cclxuICAgIGRlbGV0ZUhlcm8oaGVybzpIZXJvKXtcclxuICAgICAgICB0aGlzLmFsZXJ0KCdEZWxldGVkIGhlcm86ICcrIChoZXJvICYmIGhlcm8uZmlyc3ROYW1lKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZXZNb2RlIG1lbW9pemF0aW9uIGZpZWxkc1xyXG4gICAgcHJpdmF0ZSBfcHJpb3JDbGFzc2VzOnt9O1xyXG4gICAgcHJpdmF0ZSBfcHJpb3JTdHlsZXM6e307XHJcbiAgICBwcml2YXRlIF9wcmlvclN0eWxlczI6e307XHJcblxyXG4gICAgZ2V0U3R5bGVzKGVsOkVsZW1lbnQpe1xyXG4gICAgICAgIGxldCBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XHJcbiAgICAgICAgbGV0IHNob3dTdHlsZXMgPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHRoaXMuc2V0U3R5bGVzKCkpe1xyXG4gICAgICAgICAgICBzaG93U3R5bGVzW3BdID0gc3R5bGVzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc2hvd1N0eWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmFsKCkge3JldHVybiB0aGlzLnZhbH07XHJcblxyXG4gICAgaGVyb2VzOkhlcm9bXTtcclxuXHJcbiAgICAvLyBoZXJvSW1hZ2VVcmwgPSAnaHR0cDovL3d3dy53cGNsaXBhcnQuY29tL2NhcnRvb24vcGVvcGxlL2hlcm8vaGVyb19zaWxob3V0dGVfVC5wbmcnO1xyXG4gICAgLy8gUHVibGljIERvbWFpbiB0ZXJtcyBvZiB1c2U6IGh0dHA6Ly93d3cud3BjbGlwYXJ0LmNvbS90ZXJtcy5odG1sXHJcbiAgICBoZXJvSW1hZ2VVcmwgPSAnZGlzdC9pbWcvYXZhdGFyLnBuZyc7XHJcblxyXG4gICAgLy9pY29uVXJsID0gJ2h0dHBzOi8vYW5ndWxhci5pby9yZXNvdXJjZXMvaW1hZ2VzL2xvZ29zL3N0YW5kYXJkL3NoaWVsZC1sYXJnZS5wbmcnO1xyXG4gICAgaWNvblVybCA9ICdkaXN0L2ltZy9hdmF0YXIyLnBuZyc7XHJcbiAgICBpc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgaXNTcGVjaWFsID0gdHJ1ZTtcclxuICAgIGlzVW5jaGFuZ2VkID0gdHJ1ZTtcclxuXHJcbiAgICBudWxsSGVybzpIZXJvID0gbnVsbDsgLy8gb3IgdW5kZWZpbmVkXHJcblxyXG4gICAgb25DYW5jZWwoZXZlbnQ6S2V5Ym9hcmRFdmVudCl7XHJcbiAgICAgICAgbGV0IGV2dE1zZyA9IGV2ZW50ID8gJyBFdmVudCB0YXJnZXQgaXMgJysgKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpLmlubmVySFRNTCA6ICcnO1xyXG4gICAgICAgIHRoaXMuYWxlcnQoJ0NhbmNlbGVkLicrZXZ0TXNnKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2tNZShldmVudDpLZXlib2FyZEV2ZW50KXtcclxuICAgICAgICBsZXQgZXZ0TXNnID0gZXZlbnQgPyAnIEV2ZW50IHRhcmdldCBjbGFzcyBpcyAnKyAoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkuY2xhc3NOYW1lICA6ICcnO1xyXG4gICAgICAgIHRoaXMuYWxlcnQoJ0NsaWNrIG1lLicrZXZ0TXNnKVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2F2ZShldmVudDpLZXlib2FyZEV2ZW50KXtcclxuICAgICAgICBsZXQgZXZ0TXNnID0gZXZlbnQgPyAnIEV2ZW50IHRhcmdldCBpcyAnKyAoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkuaW5uZXJUZXh0IDogJyc7XHJcbiAgICAgICAgdGhpcy5hbGVydCgnU2F2ZWQuJytldnRNc2cpXHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoZm9ybTpOZ0Zvcm0pe1xyXG4gICAgICAgIGxldCBldnRNc2cgPSBmb3JtLnZhbGlkID9cclxuICAgICAgICAnIEZvcm0gdmFsdWUgaXMgJysgSlNPTi5zdHJpbmdpZnkoZm9ybS52YWx1ZSkgOlxyXG4gICAgICAgICAgICAnIEZvcm0gaXMgaW52YWxpZCc7XHJcbiAgICAgICAgdGhpcy5hbGVydCgnRm9ybSBzdWJtaXR0ZWQuJytldnRNc2cpXHJcbiAgICB9XHJcblxyXG4gICAgcHJvZHVjdCA9IHtcclxuICAgICAgICBuYW1lOiAnZnJpbWZyYW0nLFxyXG4gICAgICAgIHByaWNlOiA0MlxyXG4gICAgfTtcclxuXHJcbiAgICAvLyB1cGRhdGUgdGhpcy5oZXJvZXMgd2l0aCBmcmVzaCBzZXQgb2YgY2xvbmVkIGhlcm9lc1xyXG4gICAgcmVmcmVzaEhlcm9lcygpIHtcclxuICAgICAgICB0aGlzLmhlcm9lcyA9IEhlcm8uTW9ja0hlcm9lcy5tYXAoaGVybyA9PiBIZXJvLmNsb25lKGhlcm8pKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zYW1lbmVzc0NvdW50ID0gNTtcclxuICAgIG1vcmVPZlRoZVNhbWUoKSB7dGhpcy5fc2FtZW5lc3NDb3VudCsrO307XHJcbiAgICBnZXQgc2FtZUFzSXRFdmVyV2FzKCkge1xyXG4gICAgICAgIHZhciByZXN1bHQ6c3RyaW5nW10gPSBBcnJheSh0aGlzLl9zYW1lbmVzc0NvdW50KTtcclxuICAgICAgICBmb3IgKHZhciBpPXJlc3VsdC5sZW5ndGg7IGktLSA+IDA7KXtyZXN1bHRbaV09J3NhbWUgYXMgaXQgZXZlciB3YXMgLi4uJ31cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIC8vIHJldHVybiBbMSwyLDMsNCw1XS5tYXAoaWQgPT4ge1xyXG4gICAgICAgIC8vICAgcmV0dXJuIHtpZDppZCwgdGV4dDogJ3NhbWUgYXMgaXQgZXZlciB3YXMgLi4uJ307XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXBwZXJDYXNlRmlyc3ROYW1lKGZpcnN0TmFtZTpzdHJpbmcpe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZmlyc3ROYW1lKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRIZXJvLmZpcnN0TmFtZSA9IGZpcnN0TmFtZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENsYXNzZXMoKSB7XHJcbiAgICAgICAgbGV0IGNsYXNzZXMgPSAge1xyXG4gICAgICAgICAgICBzYXZlYWJsZTogdGhpcy5jYW5TYXZlLCAgICAgIC8vIHRydWVcclxuICAgICAgICAgICAgbW9kaWZpZWQ6ICF0aGlzLmlzVW5jaGFuZ2VkLCAvLyBmYWxzZVxyXG4gICAgICAgICAgICBzcGVjaWFsOiB0aGlzLmlzU3BlY2lhbCwgICAgIC8vIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29tcGVuc2F0ZSBmb3IgRGV2TW9kZSAoc2lnaClcclxuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoY2xhc3NlcykgPT09IEpTT04uc3RyaW5naWZ5KHRoaXMuX3ByaW9yQ2xhc3Nlcykpe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcHJpb3JDbGFzc2VzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9wcmlvckNsYXNzZXMgPSBjbGFzc2VzO1xyXG4gICAgICAgIHJldHVybiBjbGFzc2VzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXRTdHlsZXMoKSB7XHJcbiAgICAgICAgbGV0IHN0eWxlcyA9IHtcclxuICAgICAgICAgICAgLy8gQ1NTIHByb3BlcnR5IG5hbWVzXHJcbiAgICAgICAgICAgICdmb250LXN0eWxlJzogIHRoaXMuY2FuU2F2ZSAgICAgID8gJ2l0YWxpYycgOiAnbm9ybWFsJywgIC8vIGl0YWxpY1xyXG4gICAgICAgICAgICAnZm9udC13ZWlnaHQnOiAhdGhpcy5pc1VuY2hhbmdlZCA/ICdib2xkJyAgIDogJ25vcm1hbCcsICAvLyBub3JtYWxcclxuICAgICAgICAgICAgJ2ZvbnQtc2l6ZSc6ICAgdGhpcy5pc1NwZWNpYWwgICAgPyAnMjRweCcgICA6ICc4cHgnLCAgICAgLy8gMjRweFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb21wZW5zYXRlIGZvciBEZXZNb2RlIChzaWdoKVxyXG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShzdHlsZXMpID09PSBKU09OLnN0cmluZ2lmeSh0aGlzLl9wcmlvclN0eWxlcykpe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcHJpb3JTdHlsZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3ByaW9yU3R5bGVzID0gc3R5bGVzO1xyXG4gICAgICAgIHJldHVybiBzdHlsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgdG9lQ2hvaWNlID0gJyc7XHJcbiAgICB0b2VDaG9vc2VyKHBpY2tlcjpIVE1MRmllbGRTZXRFbGVtZW50KXtcclxuICAgICAgICBsZXQgY2hvaWNlcyA9IHBpY2tlci5jaGlsZHJlbjtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8Y2hvaWNlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHZhciBjaG9pY2UgPSA8SFRNTElucHV0RWxlbWVudD5jaG9pY2VzW2ldO1xyXG4gICAgICAgICAgICBpZiAoY2hvaWNlLmNoZWNrZWQpIHtyZXR1cm4gdGhpcy50b2VDaG9pY2UgPSBjaG9pY2UudmFsdWV9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRpdGxlID0gJ1RlbXBsYXRlIFN5bnRheCc7XHJcblxyXG4gICAgdHJhY2tCeUhlcm9lcyhpbmRleDogbnVtYmVyLCBoZXJvOiBIZXJvKSB7IHJldHVybiBoZXJvLmlkOyB9XHJcblxyXG4gICAgdHJhY2tCeUlkKGluZGV4OiBudW1iZXIsIGl0ZW06IGFueSk6IHN0cmluZyB7IHJldHVybiBpdGVtWydpZCddOyB9XHJcblxyXG4gICAgdmFsPTI7XHJcbiAgICAvLyAgdmlsbGFpbkltYWdlVXJsID0gJ2h0dHA6Ly93d3cuY2xrZXIuY29tL2NsaXBhcnRzL3Uvcy95L0wveC85L3ZpbGxhaW4tbWFuLWhpLnBuZydcclxuICAgIC8vIFB1YmxpYyBEb21haW4gdGVybXMgb2YgdXNlIGh0dHA6Ly93d3cuY2xrZXIuY29tL2Rpc2NsYWltZXIuaHRtbFxyXG4gICAgdmlsbGFpbkltYWdlVXJsID0gJ2Rpc3QvaW1nL2F2YXRhcjMucG5nJ1xyXG5cclxuXHJcbiAgICAvLy8vLy8vLyBEZXRlY3QgZWZmZWN0cyBvZiBOZ0ZvclRyYWNrQnkgLy8vLy8vLy8vLy8vLy8vXHJcbiAgICBAVmlld0NoaWxkcmVuKCdub1RyYWNrQnknKSBjaGlsZHJlbk5vVHJhY2tCeTpRdWVyeUxpc3Q8RWxlbWVudFJlZj47XHJcbiAgICBAVmlld0NoaWxkcmVuKCd3aXRoVHJhY2tCeScpIGNoaWxkcmVuV2l0aFRyYWNrQnk6UXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xyXG5cclxuICAgIHByaXZhdGUgX29sZE5vVHJhY2tCeTpIVE1MRWxlbWVudFtdO1xyXG4gICAgcHJpdmF0ZSBfb2xkV2l0aFRyYWNrQnk6SFRNTEVsZW1lbnRbXTtcclxuXHJcbiAgICBoZXJvZXNOb1RyYWNrQnlDaGFuZ2VDb3VudCA9IDA7XHJcbiAgICBoZXJvZXNXaXRoVHJhY2tCeUNoYW5nZUNvdW50ID0gMDtcclxuXHJcbiAgICBwcml2YXRlIF9kZXRlY3ROZ0ZvclRyYWNrQnlFZmZlY3RzKCkge1xyXG4gICAgICAgIHRoaXMuX29sZE5vVHJhY2tCeSAgID0gdG9BcnJheSh0aGlzLmNoaWxkcmVuTm9UcmFja0J5KTtcclxuICAgICAgICB0aGlzLl9vbGRXaXRoVHJhY2tCeSA9IHRvQXJyYXkodGhpcy5jaGlsZHJlbldpdGhUcmFja0J5KTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbk5vVHJhY2tCeS5jaGFuZ2VzLnN1YnNjcmliZSgoY2hhbmdlczphbnkpID0+IHtcclxuICAgICAgICAgICAgbGV0IG5ld05vVHJhY2tCeSA9IHRvQXJyYXkoY2hhbmdlcyk7XHJcbiAgICAgICAgICAgIGxldCBpc1NhbWUgPSB0aGlzLl9vbGROb1RyYWNrQnkuZXZlcnkoKHY6YW55LCBpOm51bWJlcikgPT4gdiA9PT0gbmV3Tm9UcmFja0J5W2ldKTtcclxuICAgICAgICAgICAgaWYgKCFpc1NhbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29sZE5vVHJhY2tCeSA9IG5ld05vVHJhY2tCeTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVyb2VzTm9UcmFja0J5Q2hhbmdlQ291bnQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5XaXRoVHJhY2tCeS5jaGFuZ2VzLnN1YnNjcmliZSgoY2hhbmdlczphbnkpID0+IHtcclxuICAgICAgICAgICAgbGV0IG5ld1dpdGhUcmFja0J5ID0gdG9BcnJheShjaGFuZ2VzKTtcclxuICAgICAgICAgICAgbGV0IGlzU2FtZSA9IHRoaXMuX29sZFdpdGhUcmFja0J5LmV2ZXJ5KCh2OmFueSwgaTpudW1iZXIpID0+IHYgPT09IG5ld1dpdGhUcmFja0J5W2ldKTtcclxuICAgICAgICAgICAgaWYgKCFpc1NhbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29sZFdpdGhUcmFja0J5ID0gbmV3V2l0aFRyYWNrQnk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlcm9lc1dpdGhUcmFja0J5Q2hhbmdlQ291bnQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG59XHJcblxyXG4vLyBoZWxwZXIgdG8gY29udmVydCB2aWV3Q2hpbGRyZW4gdG8gYW4gYXJyYXkgb2YgSFRNTEVsZW1lbnRzXHJcbmZ1bmN0aW9uIHRvQXJyYXkodmlld0NoaWxkcmVuOlF1ZXJ5TGlzdDxFbGVtZW50UmVmPikge1xyXG4gICAgbGV0IHJlc3VsdDogSFRNTEVsZW1lbnRbXSA9IFtdO1xyXG4gICAgbGV0IGNoaWxkcmVuID0gdmlld0NoaWxkcmVuLnRvQXJyYXkoKVswXS5uYXRpdmVFbGVtZW50LmNoaWxkcmVuO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykgeyByZXN1bHQucHVzaChjaGlsZHJlbltpXSk7IH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qXHJcbiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxyXG4gY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cDovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4gKi8iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
