import { AbstractCtor, Ctor } from '../types/ctor';

export interface CanDisable {
  /**
   * Disabled state
   */
  disabled: boolean;
}

type CanDisableCtor = Ctor<CanDisable> & AbstractCtor<CanDisable>;

export function mixinDisabled<T extends AbstractCtor<{}>>(
  base: T,
): CanDisableCtor & T;
export function mixinDisabled<T extends Ctor<{}>>(
  base: T,
): CanDisableCtor & T {
  return class extends base {
    private _disabled: boolean = false;

    /**
     * Getter for disabled
     */
    get disabled() {
      return this._disabled;
    }
    /**
     * Setter for disabled
     */
    set disabled(value: any) {
      this._disabled = !!value;
    }
  };
}
