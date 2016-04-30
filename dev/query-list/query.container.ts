import {
    Component, Query, QueryList, ViewChildren, AfterViewInit, ViewChild, ContentChild,
    AfterContentInit, Directive, ContentChildren
} from 'angular2/core';
import {ViewChildrenComponent} from "./view-children.component";

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
    <view-children-component></view-children-component>
   `,
    directives: [Item, ViewChildrenComponent]

})
export class QueryContainer implements AfterViewInit, AfterContentInit {
    shown:boolean;
    items:QueryList<Item>;
    @ViewChildren(Item) viewChildren:QueryList<Item>;
    @ViewChild(Item) viewChild:Item;
    @ContentChild(Item) contentChild;

    ngAfterContentInit() {
        console.log("ngAfterContentInit");
    }

    ngAfterViewInit() {
        console.log("ngAfterViewInit");
      //  this.viewChild.changes.subscribe(() => console.log('Length1',viewChildren.length));
    }

    constructor(@Query(Item) _items:QueryList<Item>) {
        this.items = _items;
        console.log("constructor1 items", _items);
        _items.changes.subscribe(_ => console.log('ggg',_items.length));

    }
}