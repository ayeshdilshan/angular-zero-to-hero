import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() messageFromParent!: string;

  // Declare an EventEmitter to send data to the parent
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    // Emit a message to the parent
    this.messageEvent.emit('Hello from the Child!');
  }
}
