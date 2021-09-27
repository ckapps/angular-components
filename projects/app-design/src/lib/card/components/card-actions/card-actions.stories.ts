import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import {
  CkadCardComponent,
  CkadCardActionsComponent,
  CkadCardContentComponent,
  CkadCardHeaderComponent,
  CkadCardTitleComponent,
} from '../../public-api';
import { colorArgTypes } from '../../../core/common/color.mixin.stories';
import { CkadButtonModule } from '../../../button/public-api';

export default {
  title: 'components/Card/actions',
  component: CkadCardComponent,
  argTypes: {
    ...colorArgTypes(),
  },
  decorators: [
    moduleMetadata({
      declarations: [
        CkadCardActionsComponent,
        CkadCardContentComponent,
        CkadCardHeaderComponent,
        CkadCardTitleComponent,
      ],
      imports: [CommonModule, CkadButtonModule],
    }),
  ],
} as Meta;

const Template: Story<CkadCardComponent> = (args: CkadCardComponent) => ({
  props: args,
  template: `
  <ckad-card>
    <ckad-card-header>
      <ckad-card-title>Title</ckad-card-title>
    </ckad-card-header>
    <ckad-card-content>This is just a simple card with a simple content.</ckad-card-content>

    <ckad-card-actions justifyContent="end">
      <button ckad-button >Action 1</button>
      <button ckad-button >Action 2</button>
    </ckad-card-actions>
  </ckad-card>`,
});

export const CardWithActions = Template.bind({});
CardWithActions.args = {
  // user: {},
  color: 'primary',
};
