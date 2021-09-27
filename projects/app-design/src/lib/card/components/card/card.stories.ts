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

export default {
  title: 'components/Card/a',
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
      imports: [CommonModule],
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
  </ckad-card>`,
});

const TemplateWithContent: Story<CkadCardComponent> = (
  args: CkadCardComponent,
) => ({
  props: args,
  template: `
  <ckad-card>
    <ckad-card-content>This is just a simple card with a simple content.</ckad-card-content>
  </ckad-card>`,
});

const TemplateWithHeader: Story<CkadCardComponent> = (
  args: CkadCardComponent,
) => ({
  props: args,
  template: `
  <ckad-card>
    <ckad-card-header>
      <ckad-card-title>Title</ckad-card-title>
    </ckad-card-header>
  </ckad-card>`,
});

export const Card = Template.bind({});
Card.args = {
  // user: {},
  color: 'primary',
};

// export const CardWithContent = TemplateWithContent.bind({});
// CardWithContent.args = {
//   // user: {},
// };

// export const CardWithHeader = TemplateWithHeader.bind({});
// CardWithHeader.args = {};

const TemplateWithActions: Story<CkadCardComponent> = (
  args: CkadCardComponent,
) => ({
  props: args,
  template: `
  <ckad-card>
    <ckad-card-header>
      <ckad-card-title>Title</ckad-card-title>
    </ckad-card-header>
    <ckad-card-content>This is just a simple card with a simple content.</ckad-card-content>
  </ckad-card>`,
});
