import '../styles/index.css'
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  // notifications
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "c0faad38-a3b1-4bd5-8faf-c7f6b109f32d",
        notifyButton: {
          enable: true,
        },

        allowLocalhostAsSecureOrigin: true,
      });
    });

    return () => {
      window.OneSignal = undefined;
    };
  }, []); // <-- run this effect once on mount
  return <Component {...pageProps} />
}
