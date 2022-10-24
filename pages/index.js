import Head from 'next/head';
import Calendar from '../components/Calendar';
import Layout from '../components/Layout';
import Welcome from '../components/Welcome';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Synerdoc</title>
        <meta
          name="description"
          content="the ultimate software for your management"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Layout> */}
      <Welcome />
      <Calendar />
      {/* </Layout> */}
    </div>
  );
}
