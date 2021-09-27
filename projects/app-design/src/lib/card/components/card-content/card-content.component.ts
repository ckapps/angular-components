import { Component } from '@angular/core';

@Component({
  selector: 'ckad-card-content',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./card-content.component.scss'],
  host: {
    '[class.ckad-card-content]': 'true',
  },
})
export class CkadCardContentComponent {}
