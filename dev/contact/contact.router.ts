import { RouterConfig }          from '@angular/router';
import {NewContactComponent} from "./new-contact.component";
import {OldContactComponent} from "./old-contact.component";
export const ContactRoutes: RouterConfig = [
    {path: '/con', name: 'MainContacts', component: OldContactComponent, useAsDefault: true},
    {path: '/new', name: 'Newcontacts', component: NewContactComponent}

];

