import { AbstractCtor, Ctor } from '../types/ctor';
import { HasElementRef } from './has-element-ref.type';

export interface CanJustify {
  /**
   * Controls justification of content
   */
  justifyContent: JustifyContent;
}

type CanColorCtor = Ctor<CanJustify> & AbstractCtor<CanJustify>;

export type JustifyContent =
  | 'stretch'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'center'
  | 'end'
  | 'start'
  | undefined;

function getCssClass(justify: JustifyContent) {
  return `ckad-flex-justify-${justify}`;
}

/** Mixin to augment a directive with a `justifyContent` property. */
export function mixinJustify<T extends AbstractCtor<HasElementRef>>(
  base: T,
  defaultJustify?: JustifyContent,
): CanColorCtor & T;
export function mixinJustify<T extends Ctor<HasElementRef>>(
  base: T,
  defaultJustify?: JustifyContent,
): CanColorCtor & T {
  return class extends base {
    private _justify: JustifyContent;

    get justifyContent(): JustifyContent {
      return this._justify;
    }

    set justifyContent(value: JustifyContent) {
      const justify = value || defaultJustify;

      const nativeElement = this._elementRef?.nativeElement;

      if (nativeElement) {
        if (justify !== this._justify) {
          if (this._justify) {
            nativeElement.classList.remove(getCssClass(this._justify));
          }
          if (justify) {
            nativeElement.classList.add(getCssClass(justify));
          }

          this._justify = justify;
        }
      }
    }

    constructor(...args: any[]) {
      super(...args);

      // Set the default value.
      this.justifyContent = defaultJustify;
    }
  };
}
