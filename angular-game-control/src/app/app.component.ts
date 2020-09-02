import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers = [];
  oddNumbers = [];

  displayEvenNumbers(evenNumber) {
    this.evenNumbers.push(evenNumber);
    console.log("even", this.evenNumbers);
  }
  
  displayOddNumbers(oddNumber) {
    this.oddNumbers.push(oddNumber);
    console.log("odd", this.oddNumbers);
  }
}
