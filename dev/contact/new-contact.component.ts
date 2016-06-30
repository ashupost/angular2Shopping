import {Component, OnInit} from '@angular/core';
import {ControlGroup, FormBuilder, Validator, Validators} from "@angular/common";
import {Router, RouteParams} from "@angular/router";
import {ContactDataService} from "./contact.service";

@Component({
    template: `
       <form [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)" >
        <div>
             <label for="firstName" >First Name</label>
             <input type="text" id="firstName" [ngFormControl]="myForm.controls['firstName']" >
         </div>
         <div>
             <label for="lastName" >Last Name</label>
             <input type="text" id="lastName" [ngFormControl]="myForm.controls['lastName']" >
        </div>
         <button type="submit" [disabled]="!myForm.valid">Click me to Submit</button>
       </form>
    `,
    providers: [ContactDataService],
    styles: [`
      label{
            display: inline-block;
            width: 140px;
      }
    `]

})
export class NewContactComponent  implements OnInit{
    myForm: ControlGroup;
    constructor(private _dataService: ContactDataService,
                private _router: Router,
                private _routeParams: RouteParams,
                private _formBuilder: FormBuilder){

    }
    ngOnInit():any{
        this.myForm=this._formBuilder.group({
           'firstName' : ['',Validators.required],
            'lastName' : [this._routeParams.get('lastName'), Validators.required]
        });
    }
    onSubmit(value){
        console.log("value",this.myForm);
        this._dataService.insertContact(value);
        this._router.navigate(['MainContacts']);
       
    }
}
