import { Component, OnInit} from '@angular/core';
import {RecipeListService} from '../../Services/recipe-list.service'
import {Recipe} from '../Recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes;
  
constructor(private recipeListService: RecipeListService) { }

  ngOnInit() {
    this.recipes = this.recipeListService.getRecipes();
    this.recipeListService.recipeChanged.subscribe((recipes : Recipe[])=>{
      this.recipes = recipes;
    })
  }
}
