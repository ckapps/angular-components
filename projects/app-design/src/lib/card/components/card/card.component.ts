import { Component, ElementRef } from '@angular/core';

import { mixinColor } from '../../../core';

const CkadCardBase = mixinColor(
  class {
    constructor(public _elementRef: ElementRef) {}
  },
  'primary',
);

/**
 * Component that represents a card
 */
@Component({
  selector: 'ckad-card',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./card.component.scss'],
  inputs: ['color'],
  host: {
    '[class.ckad-card]': 'true',
  },
})
export class CkadCardComponent extends CkadCardBase {
  constructor(el: ElementRef) {
    super(el);
  }
}
