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
//# sourceMappingURL=template.app.component.js.map