import { ArgTypes } from '@storybook/addons';

export const disabledArgTypes: ArgTypes = {
  disabled: {
    table: { defaultValue: { summary: 'false' } },
    description: 'Disabled',
    control: 'boolean',
  },
};
