import {Component, ViewChildren, QueryList} from "@angular/core";
@Component({
     selector: 'child-cmp',
    template: '<p>child</p>'
})
 class ChildCmp {
    doSomething() { console.log("clicked");}
 }

 @Component({
      selector: 'view-children-component',
      template: `
                  <child-cmp #child1></child-cmp>
                  <child-cmp #child2></child-cmp>
                  <child-cmp #child3></child-cmp>
                `,
   directives: [ChildCmp]
 })
 export class ViewChildrenComponent {
   @ViewChildren('child1,child2') children:QueryList<ChildCmp>;

       ngAfterViewInit() {
         // children are set
         this.children.toArray().forEach((child)=>child.doSomething());
       }
 }