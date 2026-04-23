import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() parentData!: string;

  childData!: string;
  @Output() manish = new EventEmitter();
  sendToParent() {
    this.manish.emit(this.childData);
  }
}
