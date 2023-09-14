import "../styles/globals.css";
import { Cursor } from "../components/Cursor";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShopProvider from "context/shopContext";
import DevTools from "@/components/DevTools";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const env = process.env.NODE_ENV;

  return (
    <ShopProvider>
      <main>
        <Cursor />
        <Header />
        <Component {...pageProps} key={router.asPath} />
        <Footer />
        {env === "development" ? <DevTools /> : null}
      </main>
    </ShopProvider>
  );
}

export default MyApp;
