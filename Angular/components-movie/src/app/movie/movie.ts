import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-movie',
  standalone: false,
  templateUrl: './movie.html',
  styleUrl: './movie.css',
})
export class Movie {
  @Input() img!: string;
  @Input() title: string = '';
}
