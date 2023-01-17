import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListServersService } from '../list-servers.service';

@Component({
  selector: 'app-edit-servers',
  templateUrl: './edit-servers.component.html',
  styleUrls: ['./edit-servers.component.css'],
})
export class EditServersComponent {
  editedServer;
  constructor(
    private actRoute: ActivatedRoute,
    private serverSer: ListServersService
  ) {}

  ngOnInit() {
    this.actRoute.paramMap.subscribe({
      next: (p) => {
        this.editedServer = this.serverSer.getServerById(p.get('id'));
      },
    });
  }
}
