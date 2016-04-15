import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {Employee} from "../mock/employee";

@Component({ // NO SELECTOR BECAUSE IT IS A ROUTE
  	templateUrl: 'templates/my-form/my-form.html',
	styleUrls: ['src/css/my-form.css']


})
export class MyFormComponent {
	powers = ['Really Smart', 'Super Flexible',
		'Super Hot', 'Weather Changer'];

	model = new Employee(20, 'Drssssssssssss IQ', this.powers[0], 'Chuck Overstreet');

	submitted = false;

	onSubmit() { this.submitted = true; }

	// TODO: Remove this when we're done
	get diagnostic() { return JSON.stringify(this.model); }

	// Reset the form with a new hero AND restore 'pristine' class state
	// by toggling 'active' flag which causes the form
	// to be removed/re-added in a tick via NgIf
	// TODO: Workaround until NgForm has a reset method (#6822)
	active = true;

	newHero() {
		this.model = new Employee(42, '', '');
		this.active = false;
		setTimeout(()=> this.active=true, 0);
	}
	//////// NOT SHOWN IN DOCS ////////

	// Reveal in html:
	//   Name via form.controls = {{showFormControls(heroForm)}}
	showFormControls(form:NgForm){

		return form && form.controls['name'] &&
			form.controls['name'].value; // Dr. IQ
	}


}