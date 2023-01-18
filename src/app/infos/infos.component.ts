import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent {
  //showId;
  selectCand;
  constructor(
    private activatedRoute: ActivatedRoute,
    private candSer: ListCandidatsService,
    private router: Router
  ) {}

  ngOnInit() {
    //V1
    //this.showId = this.activatedRoute.snapshot.paramMap.get('id');
    //this.showId = this.activatedRoute.snapshot.params['id'];

    // V2
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.selectCand = this.candSer.getCandidatById(p.get('id'));
        //if (!this.selectCand) this.router.navigateByUrl('/not-found');
      },
    });
  }

  onDelete() {
    if (confirm('Etes-vous sur de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidat(this.selectCand.id);
      this.router.navigateByUrl('/cv');
    }
  }
}
