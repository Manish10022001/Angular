import { Component, signal, ViewChild } from '@angular/core';
import { Header } from './header/header';
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
  c = 0;
  @ViewChild(Header) hc!: Header;
  received() {
    this.c = this.hc.count;
  }
}
