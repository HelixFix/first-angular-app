import { Component } from '@angular/core';
import { AppareilService } from './services/appareils.services';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss'],
})
export class AppComponent {
  isAuth = false;

  lastUpdate = new Promise<Date>(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(() => {
        resolve(date);
      }, 2000);
    }
  );

  appareils = [
    {
      name  : "Machine à laver",
      status: 'éteint'
    },
    {
      name  : "Télévision",
      status: 'allumé'
    },
    {
      name  : "Ordinateur",
      status: 'éteint'
    }
  ]

  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
   
    
  } onAllumer() {
      console.log('On allume tout !');
    }
}
