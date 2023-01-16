import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';
import { FirstService } from '../services/first.service';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  selectedCandidat: Candidat;
  tabCandidats: Candidat[] = [];

  constructor(
    private FirstSer: FirstService,
    private candSer: ListCandidatsService
  ) {}

  ngOnInit() {
    this.FirstSer.showInfos();
  }

  getSelectedCandidat(cand) {
    this.selectedCandidat = cand;
  }

  addNewCand() {
    this.candSer.addCandidat();
  }

  showList() {
    console.log(this.candSer.getAllCandidats());
  }
}
