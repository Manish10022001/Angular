import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('outputCounter');

  receivedData!: string;
  receive(str: string) {
    this.receivedData = str;
  }
}
