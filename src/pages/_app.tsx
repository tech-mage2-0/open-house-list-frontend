import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'providers/Provider';
import { Hydrate } from 'react-query';

import GlobalStyles from 'styles/global';

if (process.env.NEXT_PUBLIC_API_MOCKING) {
  require('../mocks');
}

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>OpenHouseList</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Provider>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </Provider>
    </>
  );
}

export default App;
