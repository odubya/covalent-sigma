import darkTheme from './theme/covalent.dark.theme';
import lightTheme from './theme/covalent.light.theme';

import '!style-loader!css-loader!sass-loader!./theme/markdown-elements.scss';

import anysort from 'anysort'

export const parameters = {
  options: {
    // storySort: {
    //   method: 'alphabetical',
    //   order: [
    //     'Introduction', 
    //     'Guides', 
    //     'Pattern', 
    //     'Example', 
    //     [
    //       '*', 
    //       ['Overview'],
    //     ],
    //   ],
    // },
    storySort: (previous, next) => {
      const [previousStory, previousMeta] = previous
      const [nextStory, nextMeta] = next

      return anysort(previousMeta.kind, nextMeta.kind, [
        'Introduction',
        'Guides/**',
        'Patterns/**',
        'Basics/**',
        'Components/**/Overview',
      ])
    }
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'twitter',
    values: [
      {
        name: 'twitter',
        value: '#00aced',
      },
      {
        name: 'facebook',
        value: '#3b5998',
      },
    ],
    grid: {
      disable: true,
    }
  },
  darkMode: {
    // Override the default dark theme
    dark: { 
      ...darkTheme,
    },
    // Override the default light theme
    light: lightTheme,

    // Add dark and light class to preview
    stylePreview: true,
  },
  layout: 'centered'
}