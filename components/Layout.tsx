import Head from "next/head";
import { Main } from "../styles/home";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <Navbar />
      <Main className={"main__container"}>{children}</Main>
      <Footer />
    </>
  );
}
