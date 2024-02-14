import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="cs">
        <Head />
        <body className="dark:bg-black dark:text-white bg-stone-200 flex flex-row justify-center shadow-xl">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
