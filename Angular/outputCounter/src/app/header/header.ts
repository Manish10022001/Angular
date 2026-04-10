import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  //we need to give data from child to parent so using @Output method,
  //to use it frist need to create a even using evenEmitter
  @Output() manish = new EventEmitter(); //event created
  value1!: string;
  value2!: string;
  value3!: string;
  send() {
    this.manish.emit(`${this.value1} \n ${this.value2} \n ${this.value3}`);
  }
}
