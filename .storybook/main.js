module.exports = {
  stories: [
    // Any stories inside
    '../projects/**/*.stories.mdx',
    '../projects/**/*.stories.@(js|ts)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
  ],
  core: {
    builder: 'webpack5',
  },
};
