import { Component } from '@angular/core';

@Component({
  selector: 'ckad-card-title',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./card-title.component.scss'],
  host: {
    '[class.ckad-card-title]': 'true',
  },
})
export class CkadCardTitleComponent {}
