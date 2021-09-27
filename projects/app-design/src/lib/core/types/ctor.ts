
/**
 * Type for constructors
 */
export type Ctor<T> = new (...args: any[]) => T;

/**
 * Type for abstract constructors
 */
export type AbstractCtor<T = object> = abstract new (
  ...args: any[]
) => T;
