/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Type for constructors
 */
export type Ctor<T> = new (...args: any[]) => T;

/**
 * Type for abstract constructors
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export type AbstractCtor<T = object> = abstract new (...args: any[]) => T;
