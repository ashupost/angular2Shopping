import {Component, OnInit} from 'angular2/core';
import {DataService} from "./di-data.service";

@Component({ // NO SELECTOR BECAUSE IT IS A ROUTE
    selector: 'di-level1-component',
    template: `
        <div>
                <h1>Component 1</h1>
                <button (click)="getRandomData()">Get Randaom Data</button>
                <p>Data selected is: {{data}}</p>
                <input type="text" #inputData> 
                <button (click)="pushData(inputData.value)" >Add</button>
		</div>
    `


})
export class DILevel1Component {
   data: string;
    constructor(private _dataService: DataService){

    }
    getRandomData(){
        this.data=this._dataService.getRandomData();
    }
    pushData(inputData: string){
        this._dataService.insertData(inputData);
    }
}