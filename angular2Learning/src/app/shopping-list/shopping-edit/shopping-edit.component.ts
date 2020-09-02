import { Component, OnInit,Output,EventEmitter,ViewChild } from '@angular/core';
import {Ingredient} from '../../shared/Ingredient.model';
import {ShoppingListService} from '../../Services/shopping-list.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') shoppingForm; 
  @Output() itemAdded = new EventEmitter <Ingredient>();
  editMode = false;
  editItem;
  editItemIndex;
  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.shoppingListService.onIngredientEdited.subscribe((index:number)=>{
      this.editMode = true;
      this.editItemIndex = index;
      this.editItem = this.shoppingListService.getIngredient(index);
      this.shoppingForm.setValue({
        name: this.editItem.name,
        amount:this.editItem.amount
      });
      
    });
  }
  
  onSubmit(form) {
    const itemName = form.form.controls.name.value;
    const itemAmount = form.form.controls.amount.value;
    const newIngredient = new Ingredient(itemName, itemAmount);
    if(this.editMode) {
       this.shoppingListService.editIngredient(this.editItemIndex, newIngredient);
    } else {
        this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }
  
  resetIngredient(form) {
    this.shoppingForm.reset();
  }

  onDeleteIngredient() {
    this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.shoppingForm.reset();
    this.editMode = false;
  }
}
