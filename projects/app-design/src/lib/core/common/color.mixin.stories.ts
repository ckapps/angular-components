import { ArgTypes } from '@storybook/addons';
import { ThemePalette } from './color.mixin';

const options: ThemePalette[] = ['primary', 'accent', 'warn'];

export function colorArgTypes(defaultValue?: ThemePalette): ArgTypes {
  return {
    color: {
      table: { defaultValue: { summary: defaultValue } },
      description: 'Color scheme to use',
      control: 'select',
      options,
    },
  };
}
