import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  nam: any;
  x: any;
  fun() {
    let el = document.getElementById('name') as HTMLInputElement; //here used type assertion, as in angular we cannot directly get value, so we use type assertion
    this.nam = el.value;
  }
  name!: string; //if there is not initialer then we can either set it to entry string  or give ! before colon
  email!: string;
  password!: string;
  submit() {
    alert(`Successfully Login \n ${this.name} \n ${this.email} \n${this.password}`);
  }
}
