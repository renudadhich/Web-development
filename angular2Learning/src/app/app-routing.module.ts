import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipesComponent} from './recipes/recipes.component';
import {Router,RouterModule,Routes} from '@angular/router';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import {EditRecipeComponent} from './recipes/edit-recipe/edit-recipe.component';

export const routes :Routes = [
  {path:'',component:RecipesComponent},
  {path :'recipe',component: RecipesComponent, children:[
    {path:'', component : RecipeStartComponent},
    {path:'new', component: EditRecipeComponent},
    {path:':id', component: RecipeDetailComponent},
    {path:':id/edit', component: EditRecipeComponent}
  ]},
  {path:'shopping-list',component:ShoppingListComponent}

]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
