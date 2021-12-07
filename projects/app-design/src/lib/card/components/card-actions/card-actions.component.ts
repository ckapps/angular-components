import { Component, ElementRef } from '@angular/core';

import { mixinJustify } from '../../../core/common/flex.mixin';

const CkadCardActionsBase = mixinJustify(
  class {
    constructor(public _elementRef: ElementRef<HTMLElement>) {}
  },
);

/**
 * Component that displays actions for a card
 */
@Component({
  selector: 'ckad-card-actions',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./card-actions.component.scss'],
  inputs: ['justifyContent'],
  host: {
    '[class.ckad-card-actions]': 'true',
  },
})
export class CkadCardActionsComponent extends CkadCardActionsBase {
  constructor(_elementRef: ElementRef<HTMLElement>) {
    super(_elementRef);
  }
}
