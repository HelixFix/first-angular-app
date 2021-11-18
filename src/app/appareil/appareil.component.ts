import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareils.services';

@Component({
  selector   : 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls  : ['./appareil.component.scss'],
})
export class AppareilComponent implements OnInit {
  @Input() appareilName   : string;
  @Input() appareilStatus : string;
  @Input() indexOfAppareil: number;
  @Input() id             : number;

  constructor(private appareilService: AppareilService) {}

  ngOnInit(): void {}

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      return 'red';
    } else {
      return '';
    }
  }

  onSwitchOn() {
    this.appareilService.switchOnOne(this.indexOfAppareil)
  }

  onSwitchOff() {
    this.appareilService.switchOffOne(this.indexOfAppareil)
  }
}
