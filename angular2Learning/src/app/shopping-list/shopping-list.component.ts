import { Component, OnInit, OnDestroy} from '@angular/core';
import {ShoppingListService} from '../Services/shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
ingredients= [];
private subscription :Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription= this.shoppingListService.ingredientAdded.subscribe((items)=>{
      this.ingredients = items;
    });
  }
 
  onEditItem(index:number) {
    this.shoppingListService.onIngredientEdited.next(index);
  }
  
  ngOnDestroy () {
    this.subscription.unsubscribe();
  }
}
