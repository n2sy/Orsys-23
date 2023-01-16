import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToServers() {
    this.router.navigateByUrl('/servers'); // route statique
  }

  goToCv() {
    //....
    this.router.navigate(['/cv']); // route dynamique
  }
}
