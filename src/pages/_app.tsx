import { AppProps } from 'next/app';
import { GeistProvider, CssBaseline } from '@geist-ui/react';
import { theme } from 'theme';
import { ThemeProvider } from 'styled-components';

import 'assets/scss/global-styles.scss'; // global styles

import { HomeProvider } from 'context';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GeistProvider theme={theme}>
        <CssBaseline />
        <HomeProvider>
          <Component {...pageProps} />
        </HomeProvider>
      </GeistProvider>
    </ThemeProvider>
  );
};

export default App;
