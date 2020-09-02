import { Injectable, EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/Ingredient.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientAdded = new EventEmitter <Ingredient[]>();
  onIngredientEdited = new EventEmitter <Number>();
  private ingredients :Ingredient[] = [new Ingredient("Apple", 10), new Ingredient("Orange", 15), 
  new Ingredient("Banana", 20)]
  
  constructor() { }

  getIngredients() {
    return this.ingredients;
  }
  
  getIngredient(index) {
   return this.ingredients[index];
  }
  
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(this.ingredients.slice());
  }  

  editIngredient(index:number, ingredient:Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientAdded.next(this.ingredients.slice());
  }
  
  deleteIngredient(index:number) {
    this.ingredients.splice(index, 1);
  }
  addIngredientsToShopping(ingredients: Ingredient[]) {
      this.ingredients.push(...ingredients);
      this.ingredientAdded.next(this.ingredients.slice());
  }
}
