import {Component} from 'angular2/core';

import {AfterContentParentComponent} from './after-content.component';
import {AfterViewParentComponent} from './after-view.component';
import {CounterParentComponent} from './counter.component';
import {DoCheckParentComponent} from './do-check.component';
import {OnChangesParentComponent} from './on-changes.component';
import {PeekABooParentComponent} from './peek-a-boo-parent.component';
import {SpyParentComponent} from './spy.component';

@Component({
    
    templateUrl: 'templates/lifecycle-hooks/app.component.html',
    directives: [
        AfterContentParentComponent,
        AfterViewParentComponent,
        CounterParentComponent,
        DoCheckParentComponent,
        OnChangesParentComponent,
        PeekABooParentComponent,
        SpyParentComponent,
    ]
})
export class LifecycleComponent {
}
