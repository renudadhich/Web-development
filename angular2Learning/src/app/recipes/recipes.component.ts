import { Component, OnInit } from '@angular/core';
import { RecipeListService } from '../Services/recipe-list.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
constructor(private recipeListService : RecipeListService) { }

  ngOnInit() {
  }
 }
