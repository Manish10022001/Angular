import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',

  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  count: number = 0;
  incr() {
    this.count++;
  }
  decr() {
    this.count--;
  }
  reset() {
    this.count = 0;
  }
}
