module.exports = {
  "stories": [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-a11y',
    'storybook-dark-mode',
    'addon-screen-reader',
    'aria-live-storybook-addon',
    'storybook-addon-pseudo-states'
  ]
}
