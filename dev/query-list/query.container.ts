import {
    Component, Query, QueryList, ViewChildren, AfterViewInit, ViewChild, ContentChild,
    AfterContentInit, Directive, ContentChildren
} from 'angular2/core';

@Directive({
      selector: 'someDir'
     })
 class SomeDir {
    @ContentChild(Item) contentChild;
    @ContentChildren(Item) contentChildren: QueryList<Item>;

      ngAfterContentInit() {
          console.log("SomeDir ngAfterContentInit");
      }
}

@Component({
    selector: 'item',

    template: `<ng-content></ng-content>`
})
class Item {
}

@Component({
    selector: 'container',

    template: `
    <item> a </item>
    <item> b </item>
    <item> c </item>
   `,
    directives: [Item]

})
export class QueryContainer implements AfterViewInit, AfterContentInit {
    shown:boolean;
    private items:QueryList<Item>;
    @ViewChildren(Item) viewChildren:QueryList<Item>;
    @ViewChild(Item) viewChild:Item;
    @ContentChild(Item) contentChild;

    ngAfterContentInit() {
        console.log("ngAfterContentInit");
    }

    ngAfterViewInit() {
        console.log("ngAfterViewInit");
        // this.viewChild.changes.subscribe(() => console.log('Length1',viewChildren.length));
    }

    constructor(@Query(Item) items:QueryList<Item>) {
        console.log("constructor1");
        items.changes.subscribe(_ => console.log(items));
    }
}