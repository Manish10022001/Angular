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

  // if someone clicks on +,- or reset method, count value increment or decrement or resut based on button cliced in header component,
  // now main parent component see this header componnent and names it hc, now moment we click on click button from app.html it calls method in app component
  //in htis methed we are taking this value from component, and give that value to c, and printing it on screen
  c = 0;
  @ViewChild(Header) hc!: Header;
  received() {
    this.c = this.hc.count;
  }
}
