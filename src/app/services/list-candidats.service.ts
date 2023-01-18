import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  private tabCandidats: Candidat[] = [
    // new Candidat(1, 'Marge', 'Simpson', 36, 'Formateur', 'marge.jpeg'),
    // new Candidat(2, 'Bart', 'Simpson', 26, 'Ingénieur', 'bart.jpeg'),
    // new Candidat(3, 'Homer', 'Simpson', 51, 'Directeur'),
  ];
  link = 'http://localhost:3000/cv/persons';

  constructor(private http: HttpClient) {}

  getAllCandidats() {
    return this.tabCandidats;
  }

  getAllCandidatsAPI() {
    return this.http.get(this.link);
  }

  getCandidatById(id) {
    return this.tabCandidats.find((c) => c.id == id);
  }
  getCandidatByIdAPI(id) {
    return this.http.get(`${this.link}/${id}`);
  }

  addCandidat(newCand) {
    newCand.id = this.tabCandidats[this.tabCandidats.length - 1].id + 1;
    this.tabCandidats.push(newCand);
  }
  addCandidatAPI(newCand) {
    return this.http.post(this.link, newCand);
  }

  deleteCandidat(id) {
    let i = this.tabCandidats.findIndex((c) => c.id == id);
    this.tabCandidats.splice(i, 1);
  }
  deleteCandidatAPI(id) {
    return this.http.delete(`${this.link}/${id}`);
  }

  updateCandidat(uCand) {
    let i = this.tabCandidats.indexOf(uCand);
    this.tabCandidats[i] = uCand;
  }
  updateCandidatAPI(uCand) {
    return this.http.put(`${this.link}/${uCand._id}`, uCand);
  }
}
