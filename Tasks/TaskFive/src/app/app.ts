import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('TaskFive');
  parentInput!: string;
  inputValue!: string;
  sendToChild() {
    this.parentInput = this.inputValue;
  }

  dataFromChild!: any;
  receive(data: string) {
    this.dataFromChild = data;
  }
}
