import { Component } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css'],
})
export class MsWordComponent {
  listFonts = ['', 'Phosphate', 'Arial', 'Garamond'];

  bg;
  cl;
  size;
  fontF;

  changeSize(inp) {
    // console.log(inp.value);
    this.size = inp.value + 'px';
  }
}
