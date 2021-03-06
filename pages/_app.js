import "../styles.scss";
import Router from "next/router";

import * as gtag from "../gtag";

Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
