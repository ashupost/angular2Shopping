
import {Component, AfterViewInit, ElementRef, OnInit, QueryList, ViewChildren} from 'angular2/core';
import {NgForm} from 'angular2/common';

import {Hero} from './hero';
import {HeroDetailComponent, BigHeroDetailComponent} from './hero-detail.component';
import {MyClickDirective, MyClickDirective2} from './my-click.directive';

// Alerter fn: monkey patch during test
export function alerter(msg?:string) {
    window.alert(msg);
}

export enum Color {Red, Green, Blue};

/**
 * Giant grab bag of stuff to drive the chapter
 */
@Component({
    templateUrl: 'templates/template-syntax/template-app.component.html',
    directives: [
        HeroDetailComponent, BigHeroDetailComponent,
        MyClickDirective, MyClickDirective2
    ],
    styleUrls: ['templates/template-syntax/template-syntax.css']
})
export class TemplateAppComponent implements AfterViewInit, OnInit {

    ngOnInit(){
        this.refreshHeroes();
    }

    ngAfterViewInit() {
        this._detectNgForTrackByEffects();
    }

    actionName = 'Go for it';
    alert = alerter;
    badCurly = 'bad curly';
    classes = 'special';

    callFax(value:string)   {this.alert(`Faxing ${value} ...`)}
    callPhone(value:string) {this.alert(`Calling ${value} ...`)}
    canSave =  true;

    Color = Color;
    color = Color.Red;
    colorToggle() {this.color = (this.color === Color.Red)? Color.Blue : Color.Red}

    currentHero = Hero.MockHeroes[0];

    deleteHero(hero:Hero){
        this.alert('Deleted hero: '+ (hero && hero.firstName))
    }

    // DevMode memoization fields
    private _priorClasses:{};
    private _priorStyles:{};
    private _priorStyles2:{};

    getStyles(el:Element){
        let styles = window.getComputedStyle(el);
        let showStyles = {};
        for (var p in this.setStyles()){
            showStyles[p] = styles[p];
        }
        return JSON.stringify(showStyles);
    }

    getVal() {return this.val};

    heroes:Hero[];

    // heroImageUrl = 'http://www.wpclipart.com/cartoon/people/hero/hero_silhoutte_T.png';
    // Public Domain terms of use: http://www.wpclipart.com/terms.html
    heroImageUrl = 'dist/img/avatar.png';

    //iconUrl = 'https://angular.io/resources/images/logos/standard/shield-large.png';
    iconUrl = 'dist/img/avatar2.png';
    isActive = false;
    isSpecial = true;
    isUnchanged = true;

    nullHero:Hero = null; // or undefined

    onCancel(event:KeyboardEvent){
        let evtMsg = event ? ' Event target is '+ (<HTMLElement>event.target).innerHTML : '';
        this.alert('Canceled.'+evtMsg)
    }

    onClickMe(event:KeyboardEvent){
        let evtMsg = event ? ' Event target class is '+ (<HTMLElement>event.target).className  : '';
        this.alert('Click me.'+evtMsg)
    }

    onSave(event:KeyboardEvent){
        let evtMsg = event ? ' Event target is '+ (<HTMLElement>event.target).innerText : '';
        this.alert('Saved.'+evtMsg)
    }

    onSubmit(form:NgForm){
        let evtMsg = form.valid ?
        ' Form value is '+ JSON.stringify(form.value) :
            ' Form is invalid';
        this.alert('Form submitted.'+evtMsg)
    }

    product = {
        name: 'frimfram',
        price: 42
    };

    // update this.heroes with fresh set of cloned heroes
    refreshHeroes() {
        this.heroes = Hero.MockHeroes.map(hero => Hero.clone(hero));
    }

    private _samenessCount = 5;
    moreOfTheSame() {this._samenessCount++;};
    get sameAsItEverWas() {
        var result:string[] = Array(this._samenessCount);
        for (var i=result.length; i-- > 0;){result[i]='same as it ever was ...'}
        return result;
        // return [1,2,3,4,5].map(id => {
        //   return {id:id, text: 'same as it ever was ...'};
        // });
    }

    setUpperCaseFirstName(firstName:string){
        //console.log(firstName);
        this.currentHero.firstName = firstName.toUpperCase();
    }

    setClasses() {
        let classes =  {
            saveable: this.canSave,      // true
            modified: !this.isUnchanged, // false
            special: this.isSpecial,     // true
        }
        // compensate for DevMode (sigh)
        if (JSON.stringify(classes) === JSON.stringify(this._priorClasses)){
            return this._priorClasses;
        }
        this._priorClasses = classes;
        return classes;
    }


    setStyles() {
        let styles = {
            // CSS property names
            'font-style':  this.canSave      ? 'italic' : 'normal',  // italic
            'font-weight': !this.isUnchanged ? 'bold'   : 'normal',  // normal
            'font-size':   this.isSpecial    ? '24px'   : '8px',     // 24px
        }
        // compensate for DevMode (sigh)
        if (JSON.stringify(styles) === JSON.stringify(this._priorStyles)){
            return this._priorStyles;
        }
        this._priorStyles = styles;
        return styles;
    }

    toeChoice = '';
    toeChooser(picker:HTMLFieldSetElement){
        let choices = picker.children;
        for (let i=0; i<choices.length; i++){
            var choice = <HTMLInputElement>choices[i];
            if (choice.checked) {return this.toeChoice = choice.value}
        }
    }

    title = 'Template Syntax';

    trackByHeroes(index: number, hero: Hero) { return hero.id; }

    trackById(index: number, item: any): string { return item['id']; }

    val=2;
    //  villainImageUrl = 'http://www.clker.com/cliparts/u/s/y/L/x/9/villain-man-hi.png'
    // Public Domain terms of use http://www.clker.com/disclaimer.html
    villainImageUrl = 'dist/img/avatar3.png'


    //////// Detect effects of NgForTrackBy ///////////////
    @ViewChildren('noTrackBy') childrenNoTrackBy:QueryList<ElementRef>;
    @ViewChildren('withTrackBy') childrenWithTrackBy:QueryList<ElementRef>;

    private _oldNoTrackBy:HTMLElement[];
    private _oldWithTrackBy:HTMLElement[];

    heroesNoTrackByChangeCount = 0;
    heroesWithTrackByChangeCount = 0;

    private _detectNgForTrackByEffects() {
        this._oldNoTrackBy   = toArray(this.childrenNoTrackBy);
        this._oldWithTrackBy = toArray(this.childrenWithTrackBy);

        this.childrenNoTrackBy.changes.subscribe((changes:any) => {
            let newNoTrackBy = toArray(changes);
            let isSame = this._oldNoTrackBy.every((v:any, i:number) => v === newNoTrackBy[i]);
            if (!isSame) {
                this._oldNoTrackBy = newNoTrackBy;
                this.heroesNoTrackByChangeCount++;
            }
        })

        this.childrenWithTrackBy.changes.subscribe((changes:any) => {
            let newWithTrackBy = toArray(changes);
            let isSame = this._oldWithTrackBy.every((v:any, i:number) => v === newWithTrackBy[i]);
            if (!isSame) {
                this._oldWithTrackBy = newWithTrackBy;
                this.heroesWithTrackByChangeCount++;
            }
        })
    }
    ///////////////////

}

// helper to convert viewChildren to an array of HTMLElements
function toArray(viewChildren:QueryList<ElementRef>) {
    let result: HTMLElement[] = [];
    let children = viewChildren.toArray()[0].nativeElement.children;
    for (var i = 0; i < children.length; i++) { result.push(children[i]); }
    return result;
}

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */