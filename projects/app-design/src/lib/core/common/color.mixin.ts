import { AbstractCtor, Ctor } from '../types/ctor';
import { HasElementRef } from './has-element-ref.type';

export type DefinedThemePalette = 'primary' | 'accent' | 'warn';
/** Possible color palette values. */
export type ThemePalette = DefinedThemePalette | undefined;

export interface CanColor {
  /** Theme color palette for the component. */
  color: ThemePalette;

  /** Default color to fall back to if no value is set. */
  defaultColor: ThemePalette | undefined;
}

type CanColorCtor = Ctor<CanColor> & AbstractCtor<CanColor>;

/**
 * @param color Named theme palette color
 * @returns
 * CSS class name for theme palette `color`
 */
function getCssClass(color: DefinedThemePalette) {
  return `ckad-color-${color}`;
}

/**
 * Mixin to augment a directive with a `color` property.
 */
export function mixinColor<T extends AbstractCtor<HasElementRef<HTMLElement>>>(
  base: T,
  defaultColor?: ThemePalette,
): CanColorCtor & T;
export function mixinColor<T extends Ctor<HasElementRef<HTMLElement>>>(
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args: any[]) {
      super(...args);

      // Set the default color that can be specified from the mixin.
      this.color = defaultColor;
    }
  };
}
