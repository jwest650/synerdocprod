import Head from 'next/head';
import HomePage from '../components/home';

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Synerdoc</title>
        <meta
          name="description"
          content="the ultimate software for your management"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
}
