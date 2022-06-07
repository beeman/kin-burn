import type { NextPage } from 'next';
import Head from 'next/head';
import { HomeView } from '../views';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kin DApp Demo</title>
        <meta name="description" content="Kin DApp Demo" />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
