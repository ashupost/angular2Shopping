import {Component} from 'angular2/core';
import {HighlightDirective} from './highlight.directive';

@Component({
    template: `
                    <h1>My First Attribute Directive</h1>
                    <h4>Pick a highlight color</h4>
                    <div>
                      <input type="radio" name="colors" (click)="color='lightgreen'">Green
                      <input type="radio" name="colors" (click)="color='yellow'">Yellow
                      <input type="radio" name="colors" (click)="color='cyan'">Cyan
                    </div>
                    
                    <p [myHighlight]="color">Highlight me!</p>
                    
                    <p [myHighlight]="color" [defaultColor]="'violet'">
                      Highlight me too!
                    </p>
    `,

    directives: [HighlightDirective]
})

export class AttributeDirectiveAppComponent { }

