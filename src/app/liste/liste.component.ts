import { Component, Input } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent {
  @Input() allCandidats: Candidat[];
  cdt1;
  constructor() {}
  ngOnInit(): void {
    console.log(this.allCandidats);
    this.cdt1 = this.allCandidats[0];
  }
}
