import {RecipeEditComponent} from "./recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail.component";
import { RouterConfig }          from '@angular/router';
export const RecipesComponentRoute: RouterConfig = [
    {path: '/RecipeDetail',          name: 'RecipeDetail', component: RecipeDetailComponent, useAsDefault: true},
    {path: '/:editMode', name: 'RecipeEdit',   component: RecipeEditComponent}
];
