import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  secondes: number;

  constructor() {}

  ngOnInit() {
    const counter = interval(1000);
    counter.subscribe({
      next: (value: number) => (this.secondes = value),
      error: () => console.log('Une erreur a été rencontrée !'),
      complete: () => console.info('Observable complété !'),
    });
  }
}
