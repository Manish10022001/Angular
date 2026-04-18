import { Component, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from './header/header';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('TaskFour');
  @ViewChild(Header) header!: Header;
  submittedData!: any;

  submitted() {
    this.submittedData = this.header.submit();
  }
}
