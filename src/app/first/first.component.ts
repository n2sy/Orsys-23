import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  name: string = 'Nidhal';
  formation = ' Angular';
  color = 'pink';
  hd = false;
  ageFirst = 20;

  clickHander() {
    alert("J'ai été cliqué !");
  }

  traitementDuParent(msg) {
    alert(msg);
  }
}
