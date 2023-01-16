import { Component } from '@angular/core';
import { ListRecruesService } from '../services/list-recrues.service';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-recruter',
  templateUrl: './recruter.component.html',
  styleUrls: ['./recruter.component.css'],
})
export class RecruterComponent {
  recruesTab: Candidat[] = [];
  constructor(private recSer: ListRecruesService) {}
  ngOnInit() {
    this.recruesTab = this.recSer.getAllRecrues();
  }
}
