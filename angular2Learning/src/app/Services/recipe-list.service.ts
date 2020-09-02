import { Injectable, EventEmitter} from '@angular/core';
import {Recipe} from '../recipes/Recipe.model';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import {ShoppingListService} from '../Services/shopping-list.service'
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeListService {
  recipeChanged = new Subject <Recipe[]>();
   private recipes :Recipe[] = [
     new Recipe(0,"Ice-Cream","awesome",
      "https://greatist.com/sites/default/files/styles/article-card-558x383/public/RecipeLandingPage_Dessert.jpg?itok=6YuxxKCI",
        [new Ingredient("Choco", 78),new Ingredient("Coco", 78)]),
    new Recipe(1,"veg-pasta Recipe","description2"
   , "http://finedininglovers.cdn.crosscast-system.com/BlogPost/l_5109_StockFood-00231182.jpg",
   [new Ingredient("Chocolate", 78),new Ingredient("Coco", 80)]),
   new Recipe(2, "tikki Recipe","description3",
    "http://dodskypict.com/D/Delicious-Food-Wallpaper-On-Wallpaper-Hd-17.jpg",
   [new Ingredient("Choco-Choco", 78),new Ingredient("Coco", 90)])];
  
   constructor(private shoppingListService : ShoppingListService) { }
  
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientsToShopping(ingredients);
  }
  
  addRecipe(recipe:Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index, recipe:Recipe) {
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice());
    console.log(this.recipes);
  }
  
  deleteRecipe(index) {
    this.recipes.splice(index, 1);
  }
}
