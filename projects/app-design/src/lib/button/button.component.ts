import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';

import { mixinColor, mixinDisabled } from '../core';

const CkadButtonBase = mixinColor(
  mixinDisabled(
    class {
      constructor(public _elementRef: ElementRef<HTMLElement>) {}
    },
  ),
);

/**
 * Button.
 */
@Component({
  selector: `button[ckad-button]`,
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  inputs: ['disabled', 'color'],
  host: {
    '[attr.disabled]': 'disabled || null',
    '[class.ckad-button--disabled]': 'disabled',
    '[class.ckad-button]': 'true',
    '[class.ckad-button--filled]': '!outlined',
    '[class.ckad-button--outlined]': 'outlined',
  },
})
export class CkadButtonComponent extends CkadButtonBase {
  /**
   * Use an outlined version of the button
   */
  @Input() outlined = false;

  constructor(el: ElementRef<HTMLElement>) {
    super(el);
  }
}

/**
 * Anchor button
 */
@Component({
  selector: `a[ckad-button]`,
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  inputs: ['disabled', 'color', 'outlined'],
  host: {
    '[attr.disabled]': 'disabled || null',
    '[class.ckad-button--disabled]': 'disabled',
    '[class.ckad-button]': 'true',
    '[class.ckad-button--filled]': '!outlined',
    '[class.ckad-button--outlined]': 'outlined',
  },
})
export class CkadAnchorButtonComponent extends CkadButtonComponent {
  constructor(el: ElementRef<HTMLElement>) {
    super(el);
  }
}

/**
 * Toggle button
 */
@Component({
  selector: `[ckad-toggle-button]`,
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  inputs: ['disabled', 'color'],
  host: {
    '[attr.disabled]': 'disabled || null',
    '[class.ckad-button--disabled]': 'disabled',
    '[class.ckad-button]': 'true',
    '[class.ckad-button-toggle]': 'true',
    '[class.ckad-button--toggled]': 'toggled',
  },
})
export class CkadToggleButtonComponent extends CkadButtonComponent {
  @Input() toggled = false;

  constructor(el: ElementRef<HTMLElement>) {
    super(el);
    this.outlined = true;
  }
}
