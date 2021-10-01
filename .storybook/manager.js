import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import customDarkTheme from './customDarkTheme'

addons.setConfig({
  theme: themes.dark,
});
