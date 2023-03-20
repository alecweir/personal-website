import type { AppProps } from "next/app";

import GlobalStyle from "@/components/shared/GlobalStyle";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
