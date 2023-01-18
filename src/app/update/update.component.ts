import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent {
  editedCand;
  constructor(
    private activatedRoute: ActivatedRoute,
    private candSer: ListCandidatsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.editedCand = this.candSer.getCandidatById(p.get('id'));
      },
    });
  }

  editCandidat() {
    this.candSer.updateCandidat(this.editedCand);
    this.router.navigateByUrl('/cv');
  }
}
