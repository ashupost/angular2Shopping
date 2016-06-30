import { provideRouter, RouterConfig }  from '@angular/router';
import {ContactRoutes} from "./contact/contact.router";



export const routes: RouterConfig = [
    ...ContactRoutes

];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)

    
];