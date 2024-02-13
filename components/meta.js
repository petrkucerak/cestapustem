import Head from "next/head";

const appName = `Adventní cesta`;
const appDescription = `Tvůj průvodce na cestě Adventem`;
const mainColor = `#543fb6`;
const appUrl = `https://adventnicesta.cz/`;
const coverImage = `https://adventnicesta.cz/icon.png`;
const appAuthor = `Petr Kučera`;

export default function Meta() {
  return (
    <Head>
      <meta name="msvalidate.01" content="9E75B78C2EE6CAE9C654F28AF759C4D0" /> {/* Bing webmasters verification*/}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color={mainColor}
      />
      <meta name="msapplication-TileColor" content="#ffc40d" />
      <meta
        name="msapplication-TileImage"
        content="/favicon/mstile-144x144.png"
      />
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
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/favicon/touch-icon-ipad.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/touch-icon-iphone-retina.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="167x167"
        href="/favicon/touch-icon-ipad-retina.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
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
