import { Layout } from "../components/common";
import "../styles/sass/globals.scss";//this is the global stylesheet of our application

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

//in this file we import our global styles
