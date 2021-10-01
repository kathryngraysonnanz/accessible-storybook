import { themes } from '@storybook/theming';
import customDarkTheme from './customDarkTheme'

export const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: { ...customDarkTheme, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'white' },
    current: 'dark',
    darkClass: 'lights-out',
    lightClass: 'lights-on',
    stylePreview: true
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
