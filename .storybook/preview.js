// ********************************************************
// Applying theme styles
// ********************************************************
// There seems to be an issue with storybook + Angular 12.2
// with a related issue here https://github.com/storybookjs/storybook/issues/15855
//
// The suggested solution that is applied here, is to have a
// "storybook" project in `angular.json`.

// An alternative is to manually apply the styles, which
// is a good fallback, but seems to have its drawbacks.

// import GlobalStyles from '../projects/app-design/src/assets/styles/ckapps-design.scss';
// const storybookStyles = document.createElement('style');
// storybookStyles.innerHTML = GlobalStyles;
// document.body.appendChild(storybookStyles);

// ********************************************************
// ********************************************************
// ********************************************************

import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      // color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  docs: { inlineStories: true },
};

// ********************************************************
// Apply typography styles
// ********************************************************
document.body.classList.add('ckad-typography');
