import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AppareilService {

  appareilSubject = new Subject<any[]>();

  private appareils = [
    {
      id    : 1,
      name  : 'Machine à laver',
      status: 'éteint',
    },
    {
      id    : 2,
      name  : 'Télévision',
      status: 'allumé',
    },
    {
      id    : 3,
      name  : 'Ordinateur',
      status: 'éteint',
    },
  ];

  constructor(private httpClient: HttpClient) {}

/**
 * It emits a copy of the appareils array
 */
  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice())
  }

  getAppareilById(id: number) {
    return this.appareils.find((appareilObject) => appareilObject.id === id);
  }

/**
 * It loops through the array of appareils and sets the status of each appareil to 'allumé'.
 */
  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
    this.emitAppareilSubject()
  }

/**
 * It loops through the appareils array and sets the status of each appareil to 'éteint'
 */
  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
    this.emitAppareilSubject()
  }

/**
 * It takes an index as a parameter, then it changes the status of the appareil at the given index to
 * 'allumé' and then it emits the appareilSubject.
 * @param {number} index - number
 */
  switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
    this.emitAppareilSubject()
  }

 /**
  * It takes an index as a parameter, and then sets the status of the appareil at that index to
  * 'éteint' (off).
  * @param {number} index - number
  */
  switchOffOne(index: number) {
    this.appareils[index].status = 'éteint';
    this.emitAppareilSubject()
  }

  addAppareil(name: string, status: string) {
    const appareilObject = {
      id    : 0,
      name  : '',
      status: ''
    }
    appareilObject.name   = name;
    appareilObject.status = status;
    appareilObject.id     = this.appareils[(this.appareils.length - 1)].id + 1;
    
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

/**
 * It takes the appareils array and sends it to the server
 */
  saveAppareilsToServer() {
    this.httpClient
      .put('https://http-client-demo-8a3d5-default-rtdb.europe-west1.firebasedatabase.app/appareils.json', this.appareils)
      .subscribe({complete: console.info});
  }

  /**
   * This function gets the appareils from the server and then emits the appareil subject.
   */
  getAppareilsFromServer() {
    this.httpClient
      .get<any[]>('https://http-client-demo-8a3d5-default-rtdb.europe-west1.firebasedatabase.app/appareils.json')
      .subscribe(
        (response) => {
          this.appareils = response;
          console.log(this.appareils);
          
          this.emitAppareilSubject();
        }
      )
  }
}