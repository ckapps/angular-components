import { AbstractCtor, Ctor } from '../types/ctor';

/**
 * Describes any instanciable type via a ctor
 */
// eslint-disable-next-line @typescript-eslint/ban-types
type InstanceType = {};

export interface CanDisable {
  /**
   * Disabled state
   */
  disabled: boolean;
}

type CanDisableCtor = Ctor<CanDisable> & AbstractCtor<CanDisable>;

export function mixinDisabled<T extends AbstractCtor<InstanceType>>(
  base: T,
): CanDisableCtor & T;
export function mixinDisabled<T extends Ctor<InstanceType>>(
  base: T,
): CanDisableCtor & T {
  return class extends base {
    private _disabled = false;

    /**
     * Getter for disabled
     */
    get disabled() {
      return this._disabled;
    }
    /**
     * Setter for disabled
     */
    set disabled(value: boolean) {
      this._disabled = !!value;
    }
  };
}
