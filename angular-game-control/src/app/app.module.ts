import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenNumberComponent } from './even-number/even-number.component';
import { OddNumberComponent } from './odd-number/odd-number.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    EvenNumberComponent,
    OddNumberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
