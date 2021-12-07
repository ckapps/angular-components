import { AbstractCtor, Ctor } from '../types/ctor';
import { HasElementRef } from './has-element-ref.type';

/** Possible justify values. */
export type DefinedJustifyContent =
  | 'stretch'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'center'
  | 'end'
  | 'start';
/** Possible justify values and undefined. */
export type JustifyContent = DefinedJustifyContent | undefined;

export interface CanJustify {
  /**
   * Controls justification of content
   */
  justifyContent: JustifyContent;
}

type CanJustifyCtor = Ctor<CanJustify> & AbstractCtor<CanJustify>;

function getCssClass(justify: DefinedJustifyContent) {
  return `ckad-flex-justify-${justify}`;
}

/** Mixin to augment a directive with a `justifyContent` property. */
export function mixinJustify<
  T extends AbstractCtor<HasElementRef<HTMLElement>>,
>(base: T, defaultJustify?: JustifyContent): CanJustifyCtor & T;
export function mixinJustify<T extends Ctor<HasElementRef<HTMLElement>>>(
  base: T,
  defaultJustify?: JustifyContent,
): CanJustifyCtor & T {
  return class extends base {
    private _justify: JustifyContent;

    get justifyContent() {
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args: any[]) {
      super(...args);

      // Set the default value.
      this.justifyContent = defaultJustify;
    }
  };
}
