import {Http, Response} from "angular2/http";
import {Injectable} from "angular2/core";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable()
export class HTTPRestDataService {
    private _data = ["Mritunjay", "Sapna", "Kumar"];
    constructor(private _http: Http){

    }
    getCall(): Observable<any>{
        return this._http.get("package.json")
            .map(this.extractData).catch(this.handleError);
    }
    postData(value: string){
        this._data.push(value);
    }


    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body.data || { };
    }
    private handleError (error: any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}