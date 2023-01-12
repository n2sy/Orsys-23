import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent {
  @Input() salih = 'blue';
  @Input() age = 1000;
  @Output() msgToFirst = new EventEmitter();

  sendMsg() {
    this.msgToFirst.emit('Message de la part de SecondComponent');
  }
}
