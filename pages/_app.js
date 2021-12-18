import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Freeboard</title>
        <meta
          name="Description"
          content="Free decentralised company reviews and job board."
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
