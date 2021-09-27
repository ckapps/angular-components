import { ArgTypes } from '@storybook/addons';
import { JustifyContent } from './flex.mixin';

const options: JustifyContent[] = ['start', 'end', 'center'];

export function justifyArgTypes(defaultValue?: JustifyContent): ArgTypes {
  return {
    justifyContent: {
      table: { defaultValue: { summary: defaultValue } },
      description: 'Justify content',
      control: 'select',
      options,
    },
  };
}
