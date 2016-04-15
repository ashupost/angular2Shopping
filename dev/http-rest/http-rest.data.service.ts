import {Http} from "angular2/http";
import {Injectable} from "angular2/core";
import "rxjs/add/operator/map";

@Injectable()
export class HTTPRestDataService {
    private _data = ["Mritunjay", "Sapna", "Kumar"];
    constructor(private _http: Http){

    }
    getCall(){
        return this._http.get("package.json")
            .map(res => res.json());
    }
    postData(value: string){
        this._data.push(value);
    }
}