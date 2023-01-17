import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListServersService {
  tabServers = [
    {
      id: 1,
      nom: 'Serveur de Djamel',
      statut: 'online',
    },
    {
      id: 2,
      nom: 'Serveur de Vianney',
      statut: 'offline',
    },
    {
      id: 3,
      nom: 'Serveur de Fabian',
      statut: 'offline',
    },
  ];

  getServerById(id) {
    return this.tabServers.find((s) => s.id == id);
  }
  constructor() {}
}
