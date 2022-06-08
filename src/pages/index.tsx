import type { NextPage } from 'next';
import Head from 'next/head';
import { BurntView } from '../views';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Burnt Kin</title>
        <meta name="description" content="Kin DApp Demo" />
      </Head>
      <BurntView />
    </>
  );
};

export default Home;
