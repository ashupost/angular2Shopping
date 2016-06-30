import {Component, OnInit} from '@angular/core';
import {DataService} from "./di-data.service";
@Component({
    selector: 'di-level2-component',
    template: `
        <div>
                <h1>Component 2</h1>
                <button (click)="getRandomData()">Get Randaom Data</button>
                <p>Data selected is: {{data}}</p>
                <input type="text" #inputData> 
                <button (click)="pushData(inputData.value)" >Add</button>
		</div>
    `
})
export class DILevel2Component {
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