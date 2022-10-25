import Head from 'next/head';
import Calendar from '../components/Calendar';
import HomepageLayout from '../components/HomepageLayout';

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

      <HomepageLayout>
        <Calendar />
      </HomepageLayout>
    </div>
  );
}
