import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-exp-obs',
  templateUrl: './exp-obs.component.html',
  styleUrls: ['./exp-obs.component.css'],
})
export class ExpObsComponent {
  rompreSubscribe: Subscription;
  ngOnDestroy() {
    //this.rompreSubscribe.unsubscribe();
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:3000/cv/persons').subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
    });

    // const customObs = new Observable((observer: Observer<number>) => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next(count);
    //     count++;
    //   }, 1000);
    // });

    // this.rompreSubscribe = customObs.subscribe({
    //   next: (response: number) => {
    //     console.log(response);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    //   complete: () => {
    //     console.log('Flux terminé !');
    //   },
    // });
    // const customObs = new Observable((observer: Observer<string>) => {
    //   setTimeout(() => {
    //     observer.next('first package');
    //   }, 2000);
    //   setTimeout(() => {
    //     observer.next('second package');
    //   }, 4000);
    //   setTimeout(() => {
    //     observer.next('Third Package');
    //   }, 6000);
    //   setTimeout(() => {
    //     observer.complete();
    //   }, 8000);

    // });
  }
}
