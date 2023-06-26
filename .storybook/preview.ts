import type { Preview } from '@storybook/react';

import '../src/styles/globalStyles/globals.css';
import 'react-loading-skeleton/dist/skeleton.css';

import { createGlobalStyle } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles,
    }),
  ],
};

export default preview;
