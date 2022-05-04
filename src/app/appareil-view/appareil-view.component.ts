import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  appareils           : any[];
  appareilSubscription: Subscription;

  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

 /**
  * We subscribe to the appareilSubject of the AppareilService, and we update the appareils array with
  * the new value of the appareilSubject
  */
  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        if (appareils.length) { //  checking array length of the stream parameter before assigning it to appareils
          this.appareils = appareils;
        }
      }
    );
    this.appareilService.emitAppareilSubject()
  }

/**
 * It calls the switchOnAll() method of the AppareilService service
 */
  onAllumer() {
    this.appareilService.switchOnAll();
  }

/**
 * It calls the switchOffAll() method of the AppareilService service
 */
  onEteindre() {
    this.appareilService.switchOffAll();
  }

/**
 * We call the saveAppareilsToServer() method of the AppareilService service
 */
  onSave() {
    this.appareilService.saveAppareilsToServer();
  }

/**
 * We call the getAppareilsFromServer() method of the AppareilService service
 */
  onFetch() {
    this.appareilService.getAppareilsFromServer();
  }
}
