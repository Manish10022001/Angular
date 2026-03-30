import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-nature',
  templateUrl: './nature.html',
  standalone: false,
  styleUrl: './nature.css',
})
export class Nature {
  protected readonly title = signal('first');
}
