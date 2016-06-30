import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'contact',
    template: `
        <div>
            <div>
                   <div>      
                              <label for="firstName">First Name </label>
                              <input type="text" [(ngModel)]="contact.firstName">
                   </div>
                   <div>
                              <label for="firstName">Last Name</label>
                              <input type="text" [(ngModel)]="contact.lastName">
                   </div>
            </div>
            <button> Edit </button>
        </div>
    `,
  inputs: ['contact'],
  styles: [`
      label{
            display: inline-block;
            width: 140px;
      }
    `]
})
export class ContactComponent  {
    public contact = {};
}
