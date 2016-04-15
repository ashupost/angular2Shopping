import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {NewContactComponent} from "./new-contact.component";
import {OldContactComponent} from "./old-contact.component";

@Component({
    template: `
    	<header>
    		<nav>
    			<ul>
    				<li><a [routerLink]="['MainContacts']">OLD CONTACT | </a></li>
    				<li><a [routerLink]="['Newcontacts']">| NEW CONTACT</a></li>
    			</ul>
    		</nav>
    	</header>
    	<div class="main">
			<router-outlet></router-outlet>
    	</div>
    `,
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ['src/css/app.css']
})
@RouteConfig([
	{path: '/con', name: 'MainContacts', component: OldContactComponent, useAsDefault: true},
	{path: '/new', name: 'Newcontacts', component: NewContactComponent}

])
export class ContactMasterComponent {
}
