import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  private tabCandidats: Candidat[] = [
    new Candidat(1, 'Marge', 'Simpson', 36, 'Formateur', 'marge.jpeg'),
    new Candidat(2, 'Bart', 'Simpson', 26, 'Ingénieur', 'bart.jpeg'),
    new Candidat(3, 'Homer', 'Simpson', 51, 'Directeur'),
  ];

  getAllCandidats() {
    return this.tabCandidats;
  }

  getCandidatById(id) {
    return this.tabCandidats.find((c) => c.id == id);
  }

  addCandidat(newCand) {
    newCand.id = this.tabCandidats[this.tabCandidats.length - 1].id + 1;
    this.tabCandidats.push(newCand);
  }

  deleteCandidat(id) {
    let i = this.tabCandidats.findIndex((c) => c.id == id);
    this.tabCandidats.splice(i, 1);
  }

  updateCandidat(uCand) {
    let i = this.tabCandidats.indexOf(uCand);
    this.tabCandidats[i] = uCand;
  }

  constructor() {}
}
