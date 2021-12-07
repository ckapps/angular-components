import { ElementRef } from '@angular/core';

/**
 * Interface for instance that has an ElementRef
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface HasElementRef<T = any> {
  _elementRef: ElementRef<T>;
}
