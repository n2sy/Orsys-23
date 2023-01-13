import { Component, Input, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  @Input() allCandidats: Candidat[];
  constructor() {}
  ngOnInit(): void {
    console.log(this.allCandidats);
  }
}
