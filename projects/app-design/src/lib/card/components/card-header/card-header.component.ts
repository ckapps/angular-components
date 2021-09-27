import { Component, ElementRef } from '@angular/core';

import { mixinColor } from '../../../core';

const CkadCardHeaderBase = mixinColor(
  class {
    constructor(public _elementRef: ElementRef) {}
  },
);

@Component({
  selector: 'ckad-card-header',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./card-header.component.scss'],
  inputs: ['color'],
  host: {
    '[class.ckad-card-header]': 'true',
  },
})
export class CkadCardHeaderComponent extends CkadCardHeaderBase {
  constructor(el: ElementRef) {
    super(el);
  }
}
