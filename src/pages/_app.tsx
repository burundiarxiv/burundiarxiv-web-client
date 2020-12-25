import { AppProps } from 'next/app';
import App from 'next/app';
import { appWithTranslation } from '../i18n';
import { GeistProvider, CssBaseline } from '@geist-ui/react';
import { theme } from 'theme';
import { ThemeProvider } from 'styled-components';

import 'assets/scss/global-styles.scss'; // global styles

import { HomeProvider } from 'context';

const MyApp = ({ Component, pageProps }: AppProps) => {
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

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
