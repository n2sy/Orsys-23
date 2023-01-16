import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent {
  showId;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    //V1
    //this.showId = this.activatedRoute.snapshot.paramMap.get('myid');

    //V2
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.showId = p.get('myid');
      },
    });
  }
}
