import "../styles/globals.css";
import "../scss/main.scss";
import Navbar from "../components/layout/navbar";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
