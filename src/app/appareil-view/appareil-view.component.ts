import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareils.services';

@Component({
  selector   : 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls  : ['./appareil-view.component.scss'],
})
export class AppareilViewComponent implements OnInit {
  isAuth = false;

  lastUpdate = new Promise<Date>((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  appareils: any[];

  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  ngOnInit() {
    // Le tableau local appareils sera égal au tableau dans le service
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    this.appareilService.switchOffAll();
  }
}
