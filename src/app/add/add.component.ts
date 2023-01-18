import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  constructor(private candSer: ListCandidatsService, private router: Router) {}
  addNewCandidat(newC) {
    console.log(newC);
    this.candSer.addCandidatAPI(newC).subscribe({
      next: (response) => {
        alert(response['message']);
        this.router.navigateByUrl('/cv');
      },
    });
  }
}
