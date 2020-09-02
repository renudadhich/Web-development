import { Component, OnInit, Input } from '@angular/core';
import {RecipeListService} from '../../Services/recipe-list.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeDetails;
  recipeId;
  
  constructor(private recipeListService : RecipeListService, private activatedRoute: ActivatedRoute,
  private router : Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params:Params)=>{
      if(params.id) {
        this.recipeId = +params["id"];
        this.recipeDetails = this.recipeListService.getRecipes().find(x=> x.id === parseInt(params.id));
        console.log("recipe", this.recipeDetails);  
      }
    })
  }
  
  onAddIngredientsToShopList() {
    this.recipeListService.addIngredientsToShoppingList(this.recipeDetails.ingredients);
  }
  
  onEditRecipe() {
    this.router.navigate([`/recipe/${this.recipeId}/edit`]);
  }
  
  onDeleteRecipe(index) {
    this.recipeListService.deleteRecipe(index);
    this.router.navigate(['/recipe']);
  }
}
