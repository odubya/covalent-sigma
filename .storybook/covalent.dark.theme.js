import { create } from '@storybook/theming';

import brandImage from '../stories/assets/teradata.svg';
import { themes } from '@storybook/theming';

export default create({
  base: 'dark',
  colorPrimary: '#afb6b9',
  colorSecondary: '#59cecd',
  brandTitle: 'Teradata Design System',
  brandUrl: 'https://github.com/storybookjs/storybook-addon-console',
  brandImage,
  appContentBg: '#28353b',
  appBg: '#161c1f',
  barBg: '#1f282e',
  barSelectedColor: '#59cecd',
  background: { content: 'red' },
  inputBg: 'transparent',


  // Text colors
  textColor: 'rgba(255,255,255,0.87)',
  textInverseColor: 'red',

  addonActionsTheme: {
    // ...chromeLight,
    // BASE_FONT_FAMILY: typography.fonts.mono,
    BASE_BACKGROUND_COLOR: 'black',
  },
});
