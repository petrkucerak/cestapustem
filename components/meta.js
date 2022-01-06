import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <meta name="application-name" content="Cesta půstem" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="PWA App" />
      <meta
        name="description"
        content="Projdi půstem s myšlenou na každý den."
      />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#50A2A7" />

      <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/favicon/touch-icon-ipad.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/touch-icon-iphone-retina.png" />
      <link rel="apple-touch-icon" sizes="167x167" href="/favicon/touch-icon-ipad-retina.png" />

      <link href="/images/splashscreens/iphone5_splash.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
      <link href="/images/splashscreens/iphone6_splash.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
      <link href="/images/splashscreens/iphoneplus_splash.png" media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
      <link href="/images/splashscreens/iphonex_splash.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
      <link href="/images/splashscreens/iphonexr_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
      <link href="/images/splashscreens/iphonexsmax_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
      <link href="/images/splashscreens/ipad_splash.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
      <link href="/images/splashscreens/ipadpro1_splash.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
      <link href="/images/splashscreens/ipadpro3_splash.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
      <link href="/images/splashscreens/ipadpro2_splash.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />

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
      <link rel="manifest" href="/manifest.json" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://cestapustem.cz/" />
      <meta name="twitter:title" content="Cesta půstem" />
      <meta
        name="twitter:description"
        content="Projdi půstem s myšlenou na každý den."
      />
      <meta name="twitter:site" content="@petrkucerak" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Cesta půstem" />
      <meta
        property="og:description"
        content="Projdi půstem s myšlenou na každý den."
      />
      <meta property="og:site_name" content="Cesta půstem" />
      <meta property="og:url" content="https://cestapustem.cz/" />

      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#50A2A7" />

      <meta
        name="description"
        content={`Projdi půstem s myšlenou na každý den.`}
      />
    </Head>
  );
}
