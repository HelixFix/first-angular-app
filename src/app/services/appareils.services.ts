export class AppareilService {
  appareils = [
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

  getAppareilById(id: number) {
    return this.appareils.find((appareilObject) => appareilObject.id === id);
  }

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }

  switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
  }

  switchOffOne(index: number) {
    this.appareils[index].status = 'éteint';
  }
}
