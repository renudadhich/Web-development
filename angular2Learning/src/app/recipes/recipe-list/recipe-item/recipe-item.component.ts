import { Component, OnInit, Input} from '@angular/core';
import {RecipeListService} from '../../../Services/recipe-list.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe;
@Input() index;
  constructor(private recipeListService : RecipeListService ) { }

  ngOnInit() {
  }
}
