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

@Component({
    selector: 'my-app',
    template: `
   <!--
    <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">WebSiteName</a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li class="active"><a [routerLink]="['Bootstrap-Third']">Home</a></li>
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">Click me for Menu <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a [routerLink]="['Recipes']">Recipes</a></li>
                                <li><a [routerLink]="['ShoppingList']">ShoppingList</a></li>
                                <li><a [routerLink]="['My-form']">My-form</a></li>
                                <li><a [routerLink]="['Di-demo']">Dependency-Injection</a></li>
                                <li><a [routerLink]="['Data-flow']">Data-flow</a></li>
                                <li><a [routerLink]="['Http-rest']">Http-rest</a></li>
                                <li><a [routerLink]="['Contacts']">Contact</a></li>
                                <li><a [routerLink]="['Structural']">Structural</a></li>
                                <li><a [routerLink]="['Lifecycle']">Lifecycle</a></li>
                                <li><a [routerLink]="['JQuery']">JQuery</a></li>
                                <li><a [routerLink]="['Wiki-Http']">Wiki-Http</a></li>
                                <li><a [routerLink]="['Hierarchical-Dependency-Injection']">Hierarchical-DI</a></li>
                                <li><a [routerLink]="['Bootstrap']">Bootstrap</a></li>
                                <li><a [routerLink]="['Bootstrap-Second']">Bootstrap-Second</a></li>
                                <li><a [routerLink]="['Tootstrap-Third']">Tootstrap-Third</a></li>
                            </ul>
                        </li>
                        <li><a [routerLink]="['Attribute-Directive']">Attribute-Directive</a></li>
                        <li><a href="#">Page 3</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>
            </div>
    </nav>
    -->
   
			<router-outlet></router-outlet>
   	
    `,
    directives: [ROUTER_DIRECTIVES]

})
@RouteConfig([
    {path: '/', name: 'Bootstrap-Second', component: BootstrapSecondComponent,  useAsDefault: true},
    {path: '/recipes/...', name: 'Recipes', component: RecipesComponent},
	{path: '/shopping-list', name: 'ShoppingList', component: ShoppingListComponent},
    {path: '/my-form', name: 'My-form', component: MyFormComponent},
    {path: '/di-demo', name: 'Di-demo', component: DIMasterComponent},
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
