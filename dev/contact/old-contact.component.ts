import {Component, OnInit} from '@angular/core';
import {Contact} from "./contact";
import {ContactDataService} from "./contact.service";
import {ContactComponent} from "./contact.component";

@Component({
    template: `
   <ul>
       <li *ngFor="let contact of contacts" (click)="onSelect(contact)" [class.clicked]="selectedContact === contact">
                {{contact.firstName}} {{contact.lastName}}
       </li>
   </ul>
   <contact  [contact]="selectedContact"></contact>
    `,
    providers: [ContactDataService],
    directives: [ContactComponent],
    styleUrls: ['src/css/contact-list.css']
})
export class OldContactComponent implements OnInit{
    private contacts: Contact[];
    public selectedContact = {};
    constructor(private _dataService: ContactDataService){
    }
    ngOnInit():any {
        this._dataService.getContacts().then((contacts:Contact[]) => this.contacts = contacts);
    }
    onSelect(contact){
         this.selectedContact=contact;
    }
}
