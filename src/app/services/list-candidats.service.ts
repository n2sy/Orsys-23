import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  private tabCandidats: Candidat[] = [
    new Candidat(1, 'Marge', 'Simpson', 36, 'Formateur', 'marge.jpeg'),
    new Candidat(2, 'Bart', 'Simpson', 26, 'Ingénieur', 'bart.jpeg'),
    new Candidat(1, 'Homer', 'Simpson', 51, 'Directeur'),
  ];

  getAllCandidats() {
    return this.tabCandidats;
  }

  addCandidat() {
    this.tabCandidats.push(
      new Candidat(4, 'NEW', 'CANDIDAT', 26, 'Ingénieur', 'bart.jpeg')
    );
  }

  constructor() {}
}
