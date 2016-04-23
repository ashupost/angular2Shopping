import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, AuxRoute} from 'angular2/router';
import {RecipesComponent} from './recipe-book/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {MyFormComponent} from './my-form/my-form.component';
import {DIMasterComponent} from "./di/di-master.compoment";
import {DataFlowMasterComponent} from "./data-flow/master.component";
import {HTTPRestMasterComponent} from "./http-rest/http-rest.master.component";
import {ContactMasterComponent} from "./contact/contact.master.component";
import {StructuralDirectivesComponent} from "./structural-directives/structural-directives.component";
import {LifecycleComponent} from "./lifecycle-hooks/lifecycle-component";
import {JqueryComponent} from "./jquery/jquery.component";
import {WikiHttpMainComponent} from "./wiki-http/wiki-http.main.component";
import {HierarchicalDependencyInjectionComponent} from "./hierarchical-dependency-injection/hierarchical-dependency-injection.component";
import {BootstrapMainComponent} from "./bootstrap/bootstrap-main.component";
import {AttributeDirectiveAppComponent} from "./attribute-directive/attrubute-directive.app.component";
import {BootstrapSecondComponent} from "./bootstrap/bootstrap-second.component";
import {BootstrapThirdComponent} from "./bootstrap/bootstrap-third.component";
import {TemplateAppComponent} from "./template-syntax/template.app.component";
import {RXJSComponent} from "./rx-js/rx-js.component";
import {PipeMainComponent} from "./pipe-example/pipe.main.component";
import {DataService} from "./di/di-data.service";

@Component({
    selector: 'my-app',
    template: `
  			<router-outlet></router-outlet>
   `,
    directives: [ROUTER_DIRECTIVES],
    providers: [DataService] // common for DIMasterComponent and HTTPRestMasterComponent

})
@RouteConfig([
    {path: '/home', name: 'Bootstrap-Second', component: BootstrapSecondComponent},
    {path: '/recipes/...', name: 'Recipes', component: RecipesComponent},
	{path: '/shopping-list', name: 'ShoppingList', component: ShoppingListComponent},
    {path: '/my-form', name: 'My-form', component: MyFormComponent},
    {path: '/di-demo', name: 'Di-demo', component: DIMasterComponent,  useAsDefault: true},
    {path: '/data-flow', name: 'Data-flow', component: DataFlowMasterComponent},
    {path: '/http-rest', name: 'Http-rest', component: HTTPRestMasterComponent},
    {path: '/contact/...', name: 'Contacts', component: ContactMasterComponent},
    {path: '/structural', name: 'Structural', component: StructuralDirectivesComponent},
    {path: '/lifecycle', name: 'Lifecycle', component: LifecycleComponent},
    {path: '/jquery', name: 'JQuery', component: JqueryComponent},
    {path: '/wiki-http', name: 'Wiki-Http', component: WikiHttpMainComponent},
    {path: '/hierarchical-dependency-injection', name: 'Hierarchical-Dependency-Injection', component: HierarchicalDependencyInjectionComponent},
    {path: '/template-syntax', name: 'Template-Syntax', component: TemplateAppComponent},
    {path: '/attribute-directive', name: 'Attribute-Directive', component: AttributeDirectiveAppComponent},
    {path: '/rx-js', name: 'Rx-Js', component: RXJSComponent},
    {path: '/pipe-example', name: 'Pipe-Example', component: PipeMainComponent},
    {path: '/bootstrap', name: 'Bootstrap', component: BootstrapMainComponent},
    {path: '/bootstrap-third', name: 'Bootstrap-Third', component: BootstrapThirdComponent}


])
export class AppComponent {
}
