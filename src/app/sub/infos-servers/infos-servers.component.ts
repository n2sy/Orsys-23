import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ListServersService } from '../list-servers.service';

@Component({
  selector: 'app-infos-servers',
  templateUrl: './infos-servers.component.html',
  styleUrls: ['./infos-servers.component.css'],
})
export class InfosServersComponent {
  clickedServer;
  disableBtn;
  constructor(
    private actRoute: ActivatedRoute,
    private serverSer: ListServersService
  ) {}

  ngOnInit() {
    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.clickedServer = this.serverSer.getServerById(p.get('id'));
      },
    });

    this.actRoute.queryParamMap.subscribe({
      next: (p: ParamMap) => {
        this.disableBtn = p.get('allowEdit') == '1' ? false : true;
      },
    });
  }
}
