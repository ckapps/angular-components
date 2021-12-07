// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { disabledArgTypes } from '../core/common/disabled.mixin.stories';
import {
  colorArgTypes,
  colorTemplateInput,
} from '../core/common/color.mixin.stories';

import { CkadButtonComponent } from './button.component';

export default {
  title: 'components/Button',
  component: CkadButtonComponent,
  argTypes: {
    ...disabledArgTypes,
    ...colorArgTypes(),
  },
} as Meta;

// TODO: Make this a global helper
function booleanTemplateInput(value: boolean) {
  return value ? `'true'` : `'null'`;
}

const Template: Story<CkadButtonComponent> = args => ({
  props: args,
  template: `
  <button ckad-button
    [disabled]="${booleanTemplateInput(args.disabled)}"
    [color]="${colorTemplateInput(args.color)}"
    [outlined]="${booleanTemplateInput(args.outlined)}">
      Click me
  </button>`,
});

export const Primary = Template.bind({});
Primary.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
  outlined: true,
};
