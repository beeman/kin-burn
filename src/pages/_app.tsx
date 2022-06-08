import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { AppBar } from '../components/AppBar';

require('../styles/globals.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Kin DApp Demo</title>
      </Head>
      <div className="flex flex-col h-screen">
        <AppBar />
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
