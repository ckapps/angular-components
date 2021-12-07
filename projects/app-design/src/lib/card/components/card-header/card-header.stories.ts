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
import {
  colorArgType,
  colorArgTypes,
  colorTemplateInput,
} from '../../../core/common/color.mixin.stories';
import { ThemePalette } from '../../../core';

export default {
  title: 'components/Card/CardHeader',
  component: CkadCardComponent,
  argTypes: {
    ...colorArgTypes(),
    headerColor: colorArgType(),
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

interface CardYolo {
  color: ThemePalette;
  headerColor: ThemePalette;
}

const TemplateWithHeader: Story<CardYolo> = (args: CardYolo) => ({
  props: args,
  template: `
  <ckad-card [color]="${colorTemplateInput(args.color)}">
    <ckad-card-header [color]="${colorTemplateInput(args.headerColor)}">
      <ckad-card-title>Title</ckad-card-title>
    </ckad-card-header>
    <ckad-card-content>This is just a simple card with a simple content.</ckad-card-content>
  </ckad-card>`,
});

export const CardWithHeader = TemplateWithHeader.bind({});
CardWithHeader.args = {
  // user: {},
  color: 'primary',
  headerColor: 'accent',
};
