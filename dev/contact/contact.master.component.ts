import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';

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

export class ContactMasterComponent {
}
