import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SecondService {
  constructor() {}

  afficherInfos() {
    console.log('Je suis le second service');
  }
}
