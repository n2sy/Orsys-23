import { Component } from '@angular/core';

@Component({
  selector: 'app-home-account',
  templateUrl: './home-account.component.html',
  styleUrls: ['./home-account.component.css'],
})
export class HomeAccountComponent {
  tabAccounts = [
    {
      nom: 'Master Account',
      statut: 'active',
    },
    {
      nom: 'Djamel Account',
      statut: 'inactive',
    },
  ];

  addNewAccount(newAcc) {
    this.tabAccounts.push(newAcc);
  }
}
