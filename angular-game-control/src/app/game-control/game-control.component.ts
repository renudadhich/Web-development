import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
 counter = 0;
 @Output() evenNumber = new EventEmitter ();
 @Output() oddNumber = new EventEmitter();
 startGameCounter;
  
 constructor() { }

  ngOnInit() {
  }
  
  startGame() {
   this.startGameCounter = setInterval(() => {
    if(this.counter%2===0) {
      this.evenNumber.emit(this.counter);
    } else {
      this.oddNumber.emit(this.counter);
    }
    this.counter++;
   // console.log(this.counter);
  }, 1000);
  //console.log(this.startGameCounter);
}
  stopGame() {
    clearInterval(this.startGameCounter);
  }
}
