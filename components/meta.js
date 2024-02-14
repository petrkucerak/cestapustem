import Head from "next/head";

const appName = `Adventní cesta`;
const appDescription = `Tvůj průvodce na cestě Adventem`;
const mainColor = `#50A2A7`;
const appUrl = `https://adventnicesta.cz/`;
const coverImage = `https://adventnicesta.cz/icon.png`;
const appAuthor = `Petr Kučera`;

export default function Meta() {
  return (
    <Head>
      <meta name="theme-color" content={mainColor} />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <meta name="application-name" content={appName} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={appName} />
      <meta name="description" content={appDescription} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="twitter:card" content={appDescription} />
      <meta name="twitter:url" content={appUrl} />
      <meta name="twitter:title" content={appName} />
      <meta name="twitter:description" content={appDescription} />
      <meta name="twitter:image" content={coverImage} />
      <meta name="twitter:creator" content={appAuthor} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={appName} />
      <meta property="og:description" content={appDescription} />
      <meta property="og:site_name" content={appName} />
      <meta property="og:url" content={appUrl} />
      <meta property="og:image" content={coverImage} />
    </Head>
  );
}
