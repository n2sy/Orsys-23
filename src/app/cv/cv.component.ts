import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  selectedCandidat: Candidat;
  tabCandidats: Candidat[] = [
    new Candidat(1, 'Marge', 'Simpson', 36, 'Formateur', 'marge.jpeg'),
    new Candidat(2, 'Bart', 'Simpson', 26, 'Ingénieur', 'bart.jpeg'),
    new Candidat(1, 'Homer', 'Simpson', 51, 'Directeur'),
  ];

  getSelectedCandidat(cand) {
    this.selectedCandidat = cand;
  }
}
