import Head from 'next/head';
import Layout from '../components/Layout';


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Homepage</title>
      </Head>     
      <div>
        Homepage
      </div>
    </Layout>
  );
}