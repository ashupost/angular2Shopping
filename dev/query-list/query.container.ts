import {Component, Query, QueryList, ViewChildren, AfterViewInit} from 'angular2/core';


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
export class QueryContainer implements AfterViewInit{
    shown: boolean;
    @ViewChildren(Item) viewChildren: QueryList<Item>;

      ngAfterViewInit() {
          //this.viewChildren.changes.subscribe(() => console.log('Length1',viewChildren.length));
      }
    constructor(@Query(Item) items:QueryList<Item>) {

       // items.changes.subscribe(() => console.log('Length',items.length));
}
}