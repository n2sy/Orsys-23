import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrls: ['./manage-servers.component.css'],
})
export class ManageServersComponent {
  tabServers = [
    {
      nom: 'Development Server',
      type: 'large',
      date_d: new Date(),
      statut: 'critical',
    },
    {
      nom: 'Test Development Server',
      type: 'small',
      date_d: new Date(),
      statut: 'stable',
    },
    {
      nom: 'Production Server',
      type: 'large',
      date_d: new Date(),
      statut: 'offline',
    },
    {
      nom: 'Nidhal Server',
      type: 'medium',
      date_d: new Date(),
      statut: 'stable',
    },
  ];
  selectedStatut = '';

  // prix = 329;

  changeSelectedStatut(inpValue) {
    this.selectedStatut = inpValue;
  }

  addServer() {
    this.tabServers.push({
      nom: 'NEW SERVER',
      type: 'large',
      date_d: new Date(),
      statut: 'stable',
    });
  }

  affecterClass(st) {
    // console.log(st);

    return {
      'list-group-item-success': st == 'stable',
      'list-group-item-warning': st == 'offline',
      'list-group-item-danger': st == 'critical',
    };
  }
}
