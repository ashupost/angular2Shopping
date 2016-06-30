import {Injectable} from '@angular/core';
import {Jsonp, URLSearchParams} from '@angular/http';
import {Observable} from "rxjs/Observable";

@Injectable()
export class WikipediaService {
    constructor(private jsonp: Jsonp) {}

    search (term: string) {

        let wikiUrl = 'http://en.wikipedia.org/w/api.php';

        var params = new URLSearchParams();
        params.set('search', term); // the user's search value
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        //return Observable.forkJoin(this.jsonp.get(wikiUrl, { search: params }).map(request => <string[]> request.json()[2]));
        // TODO: Add error handling
        return this.jsonp.get(wikiUrl, { search: params })
            .map(request => <string[]> request.json()[2]);
    }
}
