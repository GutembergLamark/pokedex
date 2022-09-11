import Head from "next/head";
import { GlobalStyle } from "../styles/globals";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <GlobalStyle />
    </Layout>
  );
}

export default MyApp;
