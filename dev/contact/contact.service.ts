import {Injectable} from "angular2/core";
import {CONTACTS} from "./mock-contact";
import {Contact} from "./contact";

@Injectable()
export class ContactDataService {

    getContacts(){
       return Promise.resolve(CONTACTS);
    }
    insertContact(contact: Contact){
        CONTACTS.push(contact);
    }

}