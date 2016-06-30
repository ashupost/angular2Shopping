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
var core_1 = require('@angular/core');
var hero_1 = require('./hero');
var hero_detail_component_1 = require('./hero-detail.component');
var my_click_directive_1 = require('./my-click.directive');
// Alerter fn: monkey patch during test
function alerter(msg) {
    window.alert(msg);
}
exports.alerter = alerter;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(exports.Color || (exports.Color = {}));
var Color = exports.Color;
;
/**
 * Giant grab bag of stuff to drive the chapter
 */
var TemplateAppComponent = (function () {
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
exports.TemplateAppComponent = TemplateAppComponent;
// helper to convert viewChildren to an array of HTMLElements
function toArray(viewChildren) {
    var result = [];
    var children = viewChildren.toArray()[0].nativeElement.children;
    for (var i = 0; i < children.length; i++) {
        result.push(children[i]);
    }
    return result;
}
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLXN5bnRheC90ZW1wbGF0ZS5hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxxQkFBb0YsZUFBZSxDQUFDLENBQUE7QUFHcEcscUJBQW1CLFFBQVEsQ0FBQyxDQUFBO0FBQzVCLHNDQUEwRCx5QkFBeUIsQ0FBQyxDQUFBO0FBQ3BGLG1DQUFrRCxzQkFBc0IsQ0FBQyxDQUFBO0FBRXpFLHVDQUF1QztBQUN2QyxpQkFBd0IsR0FBVztJQUMvQixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFGZSxlQUFPLFVBRXRCLENBQUE7QUFFRCxXQUFZLEtBQUs7SUFBRSwrQkFBRyxDQUFBO0lBQUUsbUNBQUssQ0FBQTtJQUFFLGlDQUFJLENBQUE7QUFBQSxDQUFDLEVBQXhCLGFBQUssS0FBTCxhQUFLLFFBQW1CO0FBQXBDLElBQVksS0FBSyxHQUFMLGFBQXdCLENBQUE7QUFBQSxDQUFDO0FBRXJDOztHQUVHO0FBU0g7SUFBQTtRQVVJLGVBQVUsR0FBRyxXQUFXLENBQUM7UUFDekIsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUNoQixhQUFRLEdBQUcsV0FBVyxDQUFDO1FBQ3ZCLFlBQU8sR0FBRyxTQUFTLENBQUM7UUFJcEIsWUFBTyxHQUFJLElBQUksQ0FBQztRQUVoQixVQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsVUFBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFHbEIsZ0JBQVcsR0FBRyxXQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBd0JqQyxzRkFBc0Y7UUFDdEYsa0VBQWtFO1FBQ2xFLGlCQUFZLEdBQUcscUJBQXFCLENBQUM7UUFFckMsa0ZBQWtGO1FBQ2xGLFlBQU8sR0FBRyxzQkFBc0IsQ0FBQztRQUNqQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxJQUFJLENB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QyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUFDLENBQUM7SUFDdkUsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBRUQ7Ozs7R0FJRyIsImZpbGUiOiJ0ZW1wbGF0ZS1zeW50YXgvdGVtcGxhdGUuYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQge0NvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgT25Jbml0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TmdGb3JtfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xyXG5cclxuaW1wb3J0IHtIZXJvfSBmcm9tICcuL2hlcm8nO1xyXG5pbXBvcnQge0hlcm9EZXRhaWxDb21wb25lbnQsIEJpZ0hlcm9EZXRhaWxDb21wb25lbnR9IGZyb20gJy4vaGVyby1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtNeUNsaWNrRGlyZWN0aXZlLCBNeUNsaWNrRGlyZWN0aXZlMn0gZnJvbSAnLi9teS1jbGljay5kaXJlY3RpdmUnO1xyXG5cclxuLy8gQWxlcnRlciBmbjogbW9ua2V5IHBhdGNoIGR1cmluZyB0ZXN0XHJcbmV4cG9ydCBmdW5jdGlvbiBhbGVydGVyKG1zZz86c3RyaW5nKSB7XHJcbiAgICB3aW5kb3cuYWxlcnQobXNnKTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ29sb3Ige1JlZCwgR3JlZW4sIEJsdWV9O1xyXG5cclxuLyoqXHJcbiAqIEdpYW50IGdyYWIgYmFnIG9mIHN0dWZmIHRvIGRyaXZlIHRoZSBjaGFwdGVyXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3RlbXBsYXRlLXN5bnRheC90ZW1wbGF0ZS1hcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1xyXG4gICAgICAgIEhlcm9EZXRhaWxDb21wb25lbnQsIEJpZ0hlcm9EZXRhaWxDb21wb25lbnQsXHJcbiAgICAgICAgTXlDbGlja0RpcmVjdGl2ZSwgTXlDbGlja0RpcmVjdGl2ZTJcclxuICAgIF0sXHJcbiAgICBzdHlsZVVybHM6IFsndGVtcGxhdGVzL3RlbXBsYXRlLXN5bnRheC90ZW1wbGF0ZS1zeW50YXguY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlQXBwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMucmVmcmVzaEhlcm9lcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9kZXRlY3ROZ0ZvclRyYWNrQnlFZmZlY3RzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aW9uTmFtZSA9ICdHbyBmb3IgaXQnO1xyXG4gICAgYWxlcnQgPSBhbGVydGVyO1xyXG4gICAgYmFkQ3VybHkgPSAnYmFkIGN1cmx5JztcclxuICAgIGNsYXNzZXMgPSAnc3BlY2lhbCc7XHJcblxyXG4gICAgY2FsbEZheCh2YWx1ZTpzdHJpbmcpICAge3RoaXMuYWxlcnQoYEZheGluZyAke3ZhbHVlfSAuLi5gKX1cclxuICAgIGNhbGxQaG9uZSh2YWx1ZTpzdHJpbmcpIHt0aGlzLmFsZXJ0KGBDYWxsaW5nICR7dmFsdWV9IC4uLmApfVxyXG4gICAgY2FuU2F2ZSA9ICB0cnVlO1xyXG5cclxuICAgIENvbG9yID0gQ29sb3I7XHJcbiAgICBjb2xvciA9IENvbG9yLlJlZDtcclxuICAgIGNvbG9yVG9nZ2xlKCkge3RoaXMuY29sb3IgPSAodGhpcy5jb2xvciA9PT0gQ29sb3IuUmVkKT8gQ29sb3IuQmx1ZSA6IENvbG9yLlJlZH1cclxuXHJcbiAgICBjdXJyZW50SGVybyA9IEhlcm8uTW9ja0hlcm9lc1swXTtcclxuXHJcbiAgICBkZWxldGVIZXJvKGhlcm86SGVybyl7XHJcbiAgICAgICAgdGhpcy5hbGVydCgnRGVsZXRlZCBoZXJvOiAnKyAoaGVybyAmJiBoZXJvLmZpcnN0TmFtZSkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGV2TW9kZSBtZW1vaXphdGlvbiBmaWVsZHNcclxuICAgIHByaXZhdGUgX3ByaW9yQ2xhc3Nlczp7fTtcclxuICAgIHByaXZhdGUgX3ByaW9yU3R5bGVzOnt9O1xyXG4gICAgcHJpdmF0ZSBfcHJpb3JTdHlsZXMyOnt9O1xyXG5cclxuICAgIGdldFN0eWxlcyhlbDpFbGVtZW50KXtcclxuICAgICAgICBsZXQgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xyXG4gICAgICAgIGxldCBzaG93U3R5bGVzID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiB0aGlzLnNldFN0eWxlcygpKXtcclxuICAgICAgICAgICAgc2hvd1N0eWxlc1twXSA9IHN0eWxlc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHNob3dTdHlsZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZhbCgpIHtyZXR1cm4gdGhpcy52YWx9O1xyXG5cclxuICAgIGhlcm9lczpIZXJvW107XHJcblxyXG4gICAgLy8gaGVyb0ltYWdlVXJsID0gJ2h0dHA6Ly93d3cud3BjbGlwYXJ0LmNvbS9jYXJ0b29uL3Blb3BsZS9oZXJvL2hlcm9fc2lsaG91dHRlX1QucG5nJztcclxuICAgIC8vIFB1YmxpYyBEb21haW4gdGVybXMgb2YgdXNlOiBodHRwOi8vd3d3LndwY2xpcGFydC5jb20vdGVybXMuaHRtbFxyXG4gICAgaGVyb0ltYWdlVXJsID0gJ2Rpc3QvaW1nL2F2YXRhci5wbmcnO1xyXG5cclxuICAgIC8vaWNvblVybCA9ICdodHRwczovL2FuZ3VsYXIuaW8vcmVzb3VyY2VzL2ltYWdlcy9sb2dvcy9zdGFuZGFyZC9zaGllbGQtbGFyZ2UucG5nJztcclxuICAgIGljb25VcmwgPSAnZGlzdC9pbWcvYXZhdGFyMi5wbmcnO1xyXG4gICAgaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgIGlzU3BlY2lhbCA9IHRydWU7XHJcbiAgICBpc1VuY2hhbmdlZCA9IHRydWU7XHJcblxyXG4gICAgbnVsbEhlcm86SGVybyA9IG51bGw7IC8vIG9yIHVuZGVmaW5lZFxyXG5cclxuICAgIG9uQ2FuY2VsKGV2ZW50OktleWJvYXJkRXZlbnQpe1xyXG4gICAgICAgIGxldCBldnRNc2cgPSBldmVudCA/ICcgRXZlbnQgdGFyZ2V0IGlzICcrICg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5pbm5lckhUTUwgOiAnJztcclxuICAgICAgICB0aGlzLmFsZXJ0KCdDYW5jZWxlZC4nK2V2dE1zZylcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrTWUoZXZlbnQ6S2V5Ym9hcmRFdmVudCl7XHJcbiAgICAgICAgbGV0IGV2dE1zZyA9IGV2ZW50ID8gJyBFdmVudCB0YXJnZXQgY2xhc3MgaXMgJysgKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpLmNsYXNzTmFtZSAgOiAnJztcclxuICAgICAgICB0aGlzLmFsZXJ0KCdDbGljayBtZS4nK2V2dE1zZylcclxuICAgIH1cclxuXHJcbiAgICBvblNhdmUoZXZlbnQ6S2V5Ym9hcmRFdmVudCl7XHJcbiAgICAgICAgbGV0IGV2dE1zZyA9IGV2ZW50ID8gJyBFdmVudCB0YXJnZXQgaXMgJysgKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpLmlubmVyVGV4dCA6ICcnO1xyXG4gICAgICAgIHRoaXMuYWxlcnQoJ1NhdmVkLicrZXZ0TXNnKVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KGZvcm06TmdGb3JtKXtcclxuICAgICAgICBsZXQgZXZ0TXNnID0gZm9ybS52YWxpZCA/XHJcbiAgICAgICAgJyBGb3JtIHZhbHVlIGlzICcrIEpTT04uc3RyaW5naWZ5KGZvcm0udmFsdWUpIDpcclxuICAgICAgICAgICAgJyBGb3JtIGlzIGludmFsaWQnO1xyXG4gICAgICAgIHRoaXMuYWxlcnQoJ0Zvcm0gc3VibWl0dGVkLicrZXZ0TXNnKVxyXG4gICAgfVxyXG5cclxuICAgIHByb2R1Y3QgPSB7XHJcbiAgICAgICAgbmFtZTogJ2ZyaW1mcmFtJyxcclxuICAgICAgICBwcmljZTogNDJcclxuICAgIH07XHJcblxyXG4gICAgLy8gdXBkYXRlIHRoaXMuaGVyb2VzIHdpdGggZnJlc2ggc2V0IG9mIGNsb25lZCBoZXJvZXNcclxuICAgIHJlZnJlc2hIZXJvZXMoKSB7XHJcbiAgICAgICAgdGhpcy5oZXJvZXMgPSBIZXJvLk1vY2tIZXJvZXMubWFwKGhlcm8gPT4gSGVyby5jbG9uZShoZXJvKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2FtZW5lc3NDb3VudCA9IDU7XHJcbiAgICBtb3JlT2ZUaGVTYW1lKCkge3RoaXMuX3NhbWVuZXNzQ291bnQrKzt9O1xyXG4gICAgZ2V0IHNhbWVBc0l0RXZlcldhcygpIHtcclxuICAgICAgICB2YXIgcmVzdWx0OnN0cmluZ1tdID0gQXJyYXkodGhpcy5fc2FtZW5lc3NDb3VudCk7XHJcbiAgICAgICAgZm9yICh2YXIgaT1yZXN1bHQubGVuZ3RoOyBpLS0gPiAwOyl7cmVzdWx0W2ldPSdzYW1lIGFzIGl0IGV2ZXIgd2FzIC4uLid9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAvLyByZXR1cm4gWzEsMiwzLDQsNV0ubWFwKGlkID0+IHtcclxuICAgICAgICAvLyAgIHJldHVybiB7aWQ6aWQsIHRleHQ6ICdzYW1lIGFzIGl0IGV2ZXIgd2FzIC4uLid9O1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFVwcGVyQ2FzZUZpcnN0TmFtZShmaXJzdE5hbWU6c3RyaW5nKXtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGZpcnN0TmFtZSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SGVyby5maXJzdE5hbWUgPSBmaXJzdE5hbWUudG9VcHBlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDbGFzc2VzKCkge1xyXG4gICAgICAgIGxldCBjbGFzc2VzID0gIHtcclxuICAgICAgICAgICAgc2F2ZWFibGU6IHRoaXMuY2FuU2F2ZSwgICAgICAvLyB0cnVlXHJcbiAgICAgICAgICAgIG1vZGlmaWVkOiAhdGhpcy5pc1VuY2hhbmdlZCwgLy8gZmFsc2VcclxuICAgICAgICAgICAgc3BlY2lhbDogdGhpcy5pc1NwZWNpYWwsICAgICAvLyB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbXBlbnNhdGUgZm9yIERldk1vZGUgKHNpZ2gpXHJcbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KGNsYXNzZXMpID09PSBKU09OLnN0cmluZ2lmeSh0aGlzLl9wcmlvckNsYXNzZXMpKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ByaW9yQ2xhc3NlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcHJpb3JDbGFzc2VzID0gY2xhc3NlcztcclxuICAgICAgICByZXR1cm4gY2xhc3NlcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0U3R5bGVzKCkge1xyXG4gICAgICAgIGxldCBzdHlsZXMgPSB7XHJcbiAgICAgICAgICAgIC8vIENTUyBwcm9wZXJ0eSBuYW1lc1xyXG4gICAgICAgICAgICAnZm9udC1zdHlsZSc6ICB0aGlzLmNhblNhdmUgICAgICA/ICdpdGFsaWMnIDogJ25vcm1hbCcsICAvLyBpdGFsaWNcclxuICAgICAgICAgICAgJ2ZvbnQtd2VpZ2h0JzogIXRoaXMuaXNVbmNoYW5nZWQgPyAnYm9sZCcgICA6ICdub3JtYWwnLCAgLy8gbm9ybWFsXHJcbiAgICAgICAgICAgICdmb250LXNpemUnOiAgIHRoaXMuaXNTcGVjaWFsICAgID8gJzI0cHgnICAgOiAnOHB4JywgICAgIC8vIDI0cHhcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29tcGVuc2F0ZSBmb3IgRGV2TW9kZSAoc2lnaClcclxuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoc3R5bGVzKSA9PT0gSlNPTi5zdHJpbmdpZnkodGhpcy5fcHJpb3JTdHlsZXMpKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ByaW9yU3R5bGVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9wcmlvclN0eWxlcyA9IHN0eWxlcztcclxuICAgICAgICByZXR1cm4gc3R5bGVzO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZUNob2ljZSA9ICcnO1xyXG4gICAgdG9lQ2hvb3NlcihwaWNrZXI6SFRNTEZpZWxkU2V0RWxlbWVudCl7XHJcbiAgICAgICAgbGV0IGNob2ljZXMgPSBwaWNrZXIuY2hpbGRyZW47XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPGNob2ljZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB2YXIgY2hvaWNlID0gPEhUTUxJbnB1dEVsZW1lbnQ+Y2hvaWNlc1tpXTtcclxuICAgICAgICAgICAgaWYgKGNob2ljZS5jaGVja2VkKSB7cmV0dXJuIHRoaXMudG9lQ2hvaWNlID0gY2hvaWNlLnZhbHVlfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aXRsZSA9ICdUZW1wbGF0ZSBTeW50YXgnO1xyXG5cclxuICAgIHRyYWNrQnlIZXJvZXMoaW5kZXg6IG51bWJlciwgaGVybzogSGVybykgeyByZXR1cm4gaGVyby5pZDsgfVxyXG5cclxuICAgIHRyYWNrQnlJZChpbmRleDogbnVtYmVyLCBpdGVtOiBhbnkpOiBzdHJpbmcgeyByZXR1cm4gaXRlbVsnaWQnXTsgfVxyXG5cclxuICAgIHZhbD0yO1xyXG4gICAgLy8gIHZpbGxhaW5JbWFnZVVybCA9ICdodHRwOi8vd3d3LmNsa2VyLmNvbS9jbGlwYXJ0cy91L3MveS9ML3gvOS92aWxsYWluLW1hbi1oaS5wbmcnXHJcbiAgICAvLyBQdWJsaWMgRG9tYWluIHRlcm1zIG9mIHVzZSBodHRwOi8vd3d3LmNsa2VyLmNvbS9kaXNjbGFpbWVyLmh0bWxcclxuICAgIHZpbGxhaW5JbWFnZVVybCA9ICdkaXN0L2ltZy9hdmF0YXIzLnBuZydcclxuXHJcblxyXG4gICAgLy8vLy8vLy8gRGV0ZWN0IGVmZmVjdHMgb2YgTmdGb3JUcmFja0J5IC8vLy8vLy8vLy8vLy8vL1xyXG4gICAgQFZpZXdDaGlsZHJlbignbm9UcmFja0J5JykgY2hpbGRyZW5Ob1RyYWNrQnk6UXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xyXG4gICAgQFZpZXdDaGlsZHJlbignd2l0aFRyYWNrQnknKSBjaGlsZHJlbldpdGhUcmFja0J5OlF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcclxuXHJcbiAgICBwcml2YXRlIF9vbGROb1RyYWNrQnk6SFRNTEVsZW1lbnRbXTtcclxuICAgIHByaXZhdGUgX29sZFdpdGhUcmFja0J5OkhUTUxFbGVtZW50W107XHJcblxyXG4gICAgaGVyb2VzTm9UcmFja0J5Q2hhbmdlQ291bnQgPSAwO1xyXG4gICAgaGVyb2VzV2l0aFRyYWNrQnlDaGFuZ2VDb3VudCA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBfZGV0ZWN0TmdGb3JUcmFja0J5RWZmZWN0cygpIHtcclxuICAgICAgICB0aGlzLl9vbGROb1RyYWNrQnkgICA9IHRvQXJyYXkodGhpcy5jaGlsZHJlbk5vVHJhY2tCeSk7XHJcbiAgICAgICAgdGhpcy5fb2xkV2l0aFRyYWNrQnkgPSB0b0FycmF5KHRoaXMuY2hpbGRyZW5XaXRoVHJhY2tCeSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5Ob1RyYWNrQnkuY2hhbmdlcy5zdWJzY3JpYmUoKGNoYW5nZXM6YW55KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuZXdOb1RyYWNrQnkgPSB0b0FycmF5KGNoYW5nZXMpO1xyXG4gICAgICAgICAgICBsZXQgaXNTYW1lID0gdGhpcy5fb2xkTm9UcmFja0J5LmV2ZXJ5KCh2OmFueSwgaTpudW1iZXIpID0+IHYgPT09IG5ld05vVHJhY2tCeVtpXSk7XHJcbiAgICAgICAgICAgIGlmICghaXNTYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vbGROb1RyYWNrQnkgPSBuZXdOb1RyYWNrQnk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlcm9lc05vVHJhY2tCeUNoYW5nZUNvdW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmNoaWxkcmVuV2l0aFRyYWNrQnkuY2hhbmdlcy5zdWJzY3JpYmUoKGNoYW5nZXM6YW55KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuZXdXaXRoVHJhY2tCeSA9IHRvQXJyYXkoY2hhbmdlcyk7XHJcbiAgICAgICAgICAgIGxldCBpc1NhbWUgPSB0aGlzLl9vbGRXaXRoVHJhY2tCeS5ldmVyeSgodjphbnksIGk6bnVtYmVyKSA9PiB2ID09PSBuZXdXaXRoVHJhY2tCeVtpXSk7XHJcbiAgICAgICAgICAgIGlmICghaXNTYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vbGRXaXRoVHJhY2tCeSA9IG5ld1dpdGhUcmFja0J5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZXJvZXNXaXRoVHJhY2tCeUNoYW5nZUNvdW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxufVxyXG5cclxuLy8gaGVscGVyIHRvIGNvbnZlcnQgdmlld0NoaWxkcmVuIHRvIGFuIGFycmF5IG9mIEhUTUxFbGVtZW50c1xyXG5mdW5jdGlvbiB0b0FycmF5KHZpZXdDaGlsZHJlbjpRdWVyeUxpc3Q8RWxlbWVudFJlZj4pIHtcclxuICAgIGxldCByZXN1bHQ6IEhUTUxFbGVtZW50W10gPSBbXTtcclxuICAgIGxldCBjaGlsZHJlbiA9IHZpZXdDaGlsZHJlbi50b0FycmF5KClbMF0ubmF0aXZlRWxlbWVudC5jaGlsZHJlbjtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHsgcmVzdWx0LnB1c2goY2hpbGRyZW5baV0pOyB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKlxyXG4gQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcclxuIGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHA6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuICovIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
