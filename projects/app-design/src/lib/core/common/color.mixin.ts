import { AbstractCtor, Ctor } from '../types/ctor';
import { HasElementRef } from './has-element-ref.type';

/** @docs-private */
export interface CanColor {
  /** Theme color palette for the component. */
  color: ThemePalette;

  /** Default color to fall back to if no value is set. */
  defaultColor: ThemePalette | undefined;
}

type CanColorCtor = Ctor<CanColor> & AbstractCtor<CanColor>;

/** Possible color palette values. */
export type ThemePalette = 'primary' | 'accent' | 'warn' | undefined;

function getCssClass(color: ThemePalette) {
  return `ckad-color-${color}`;
}

/**
 * Mixin to augment a directive with a `color` property.
 */
export function mixinColor<T extends AbstractCtor<HasElementRef>>(
  base: T,
  defaultColor?: ThemePalette,
): CanColorCtor & T;
export function mixinColor<T extends Ctor<HasElementRef>>(
  base: T,
  defaultColor?: ThemePalette,
): CanColorCtor & T {
  return class extends base {
    private _color: ThemePalette;
    defaultColor = defaultColor;

    get color(): ThemePalette {
      return this._color;
    }
    set color(value: ThemePalette) {
      const colorPalette = value || this.defaultColor;

      const nativeElement = this._elementRef?.nativeElement;

      if (nativeElement) {
        if (colorPalette !== this._color) {
          if (this._color) {
            nativeElement.classList.remove(getCssClass(this._color));
          }
          if (colorPalette) {
            nativeElement.classList.add(getCssClass(colorPalette));
          }

          this._color = colorPalette;
        }
      }
    }

    constructor(...args: any[]) {
      super(...args);

      // Set the default color that can be specified from the mixin.
      this.color = defaultColor;
    }
  };
}
