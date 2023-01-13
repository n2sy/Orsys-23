import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  tabCandidats: Candidat[] = [
    new Candidat(1, 'Nidhal', 'Jelassi', 36, 'Formateur', 'nidhal.jpg'),
    new Candidat(2, 'Bart', 'Simpson', 26, 'Ingénieur', 'bart.jpeg'),
    new Candidat(1, 'Homer', 'Simpson', 51, 'Directeur', 'homer.jpg'),
  ];
}