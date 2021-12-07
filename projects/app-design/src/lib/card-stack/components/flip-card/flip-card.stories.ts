import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { colorArgTypes } from '../../../core/common/color.mixin.stories';
import { CkadCardModule } from '../../../card/public-api';
import { CkadFlipCardComponent } from './flip-card.component';

export default {
  title: 'components/FlipCard',
  component: CkadFlipCardComponent,
  argTypes: {
    // ...colorArgTypes(),
  },
  decorators: [
    moduleMetadata({
      imports: [CommonModule, CkadCardModule],
    }),
  ],
  parameters: {
    controls: {
      // See https://github.com/storybookjs/storybook/issues/16865
      exclude: ['flipOnSubject', 'flipped$']
    }
  }
} as Meta;

const Template: Story<CkadFlipCardComponent> = (
  args: CkadFlipCardComponent,
) => ({
  props: args,
  template: `
  <ckad-flip-card >
    <ckad-card
      ckad-flip-card-front
      color="primary"
      [class.fill]="true"
    >
      <ckad-card-content>
        Lorem ipsum front side
      </ckad-card-content>
    </ckad-card>

    <ckad-card
      ckad-flip-card-back
      color="accent"
      [class.fill]="true"
      [class.deck]="true"
    >
      <ckad-card-content>
        Lorem ipsum back side
      </ckad-card-content>
    </ckad-card>
  </ckad-flip-card>
  `,
});

export const FlipCard = Template.bind({});
FlipCard.args = {
  // user: {},
  // color: 'primary',
};
