import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  firstName = '';
  secondName = '';
  thirdName = '';
  submit(){
    return{
    FirstName: this.firstName,
    SecondName: this.secondName,
    ThirdName: this.thirdName,
  }
  }
}
