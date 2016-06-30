import {Component, Input, Output, EventEmitter} from '@angular/core';
import {RestoreService} from './restore.service';
import {Hero} from './hero';

@Component({
    selector: 'hero-editor',
    providers: [RestoreService],
    template: `
    <div>
      <span>Name:</span>
      <input [(ngModel)]="hero.name"/>
      <div>
        <button (click)="onSaved()">save</button>
        <button (click)="onCanceled()">cancel</button>
      </div>
    </div>`
})

export class HeroEditorComponent {
    @Output() canceled = new EventEmitter<Hero>();
    @Output() saved = new EventEmitter<Hero>();

    constructor(private restoreService: RestoreService<Hero>) {}

    @Input()
    set hero (hero: Hero) {
        console.log("hero=",JSON.stringify(hero));
        this.restoreService.setItem(hero);
    }

    get hero () {
        return this.restoreService.getItem();
    }

    onSaved () {
        this.saved.next(this.restoreService.getItem());
    }

    onCanceled () {
        this.hero = this.restoreService.restoreItem();
        this.canceled.next(this.hero);
    }
}
