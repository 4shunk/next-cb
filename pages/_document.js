import Document, { Html, Head, Main, NextScript } from "next/document";
import GtagComponent from "../components/gtag.component";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <GtagComponent />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
