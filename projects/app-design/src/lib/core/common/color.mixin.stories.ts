import { ArgType, ArgTypes } from '@storybook/addons';
import { ThemePalette } from './color.mixin';

const options: ThemePalette[] = ['primary', 'accent', 'warn'];

/**
 * Creates the arg type for a `ThemePalette` input
 *
 * @param defaultValue The applied default value
 * @param description Optional descripton
 *
 * @returns
 * `ArgType` for a `ThemePalette` input.
 */
export function colorArgType(
  defaultValue?: ThemePalette,
  description = 'Color scheme to use',
): ArgType<ThemePalette> {
  return {
    table: { defaultValue: { summary: defaultValue } },
    description,
    control: 'select',
    options,
    defaultValue,
  };
}

/**
 * Creates the default arg types when `mixinColor` is used
 * for a component.
 *
 * @param defaultValue Default value for the color
 *
 * @returns
 * Injected arguments when using the `mixinColor`.
 */
export function colorArgTypes(defaultValue?: ThemePalette): ArgTypes {
  return {
    color: colorArgType(defaultValue),
  };
}

/**
 * Use this to map the input for a `[color]` prop
 * @param value Actual value
 * @param fallback Fallback value if `value` is not a color
 *
 * @returns
 * Template binding for a `[color]` prop.
 */
export function colorTemplateInput(
  value: ThemePalette,
  fallback = 'null',
): string {
  return value ? `'${value}'` : fallback;
}
