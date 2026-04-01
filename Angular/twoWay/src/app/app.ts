import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  name: any;
  x: any;
  fun() {
    let el = document.getElementById('name') as HTMLInputElement; //here used type assertion, as in angular we cannot directly get value, so we use type assertion
    this.name = el.value;
  }
}
