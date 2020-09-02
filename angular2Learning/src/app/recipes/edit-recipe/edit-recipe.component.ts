import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { RecipeListService } from '../../Services/recipe-list.service';
import {Router} from '@angular/router';
import {Ingredient} from '../../shared/Ingredient.model';
import {Recipe} from '../Recipe.model';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
 recipeId;
 editMode = false;
 recipeForm : FormGroup;
 imagePath;
  constructor(private activatedRoute: ActivatedRoute, private recipeListService: RecipeListService,
  private router : Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params:Params) =>{
        this.recipeId = +params['id'];
        this.editMode = params['id'] != null;
    });
    this.initForm();
  }
  
  initForm() {
    let recipeName = '';
    let recipeDescription = '';
    let recipeImagePath = '';
    let recipeIngredients = new FormArray([]);
    if(this.editMode) {
      const recipe = this.recipeListService.getRecipes().find(x=>x.id === this.recipeId);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingredients']) {
        for(let ingredient of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }))
        }
      }
    }
   this.recipeForm = new FormGroup({
     name: new FormControl(recipeName, [Validators.required]),
     imagePath: new FormControl(recipeImagePath, [Validators.required]),
     description: new FormControl(recipeDescription, [Validators.required]),
     ingredients: recipeIngredients
     
   })
  }
  
  onAddIngredient() {
    (<FormArray>this.recipeForm.controls.ingredients).push(new FormGroup({
      'name': new FormControl('', Validators.required),
      'amount':new FormControl('', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }))
  }

  onDeleteIngredient() {

  }

  onSubmit() {
    
    if(this.editMode) {
      const newRecipe = new Recipe(this.recipeId, this.recipeForm.value['name'],
      this.recipeForm.value['description'], this.recipeForm.value['imagePath'], this.recipeForm.value['ingredients']);
      this.recipeListService.updateRecipe(this.recipeId, newRecipe);
    } else {
      const newRecipe = new Recipe(this.recipeListService.getRecipes().length, this.recipeForm.value['name'],
      this.recipeForm.value['description'], this.recipeForm.value['imagePath'], this.recipeForm.value['ingredients']);
      this.recipeListService.addRecipe(newRecipe);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }
}
