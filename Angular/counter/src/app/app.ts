import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',

  templateUrl: './app.html',
  styleUrl: './app.css',
})

//TAST #2
/* Task2: In your counter, on top right print a flag value which shows even/odd based on the value of counter */
export class App {
  count: number = 0;
  isEven = 'Even';
  checkEvenOdd() {
    if (this.count % 2 == 1) {
      this.isEven = 'Odd';
    } else {
      this.isEven = 'Even';
    }
  }
  incr() {
    if (this.count < 20) {
      this.count++;
    }
    this.checkEvenOdd();
  }
  decr() {
    if (this.count > 0) {
      this.count--;
    }

    this.checkEvenOdd();
  }
  reset() {
    this.count = 0;
  }
}
