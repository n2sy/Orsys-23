import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/candidat';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent {
  allCandidats;
  @Output() msgToCv = new EventEmitter();
  constructor(private listSer: ListCandidatsService) {}
  ngOnInit(): void {
    this.listSer.getAllCandidatsAPI().subscribe({
      next: (response) => {
        this.allCandidats = response;
      },
    });
  }

  sendCandToCv(cand) {
    this.msgToCv.emit(cand);
  }

  showList() {
    console.log(this.listSer.getAllCandidats());
  }
}
