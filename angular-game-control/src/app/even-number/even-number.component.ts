import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even-number',
  templateUrl: './even-number.component.html',
  styleUrls: ['./even-number.component.css']
})
export class EvenNumberComponent implements OnInit {
  @Input() numbers;
  constructor() { }

  ngOnInit() {
    console.log("numbers", this.numbers);
  }

}
