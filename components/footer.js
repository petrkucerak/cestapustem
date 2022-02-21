import Container from "./container";
import Script from "next/script";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <Container>
        <div className="text-grey text-base px-8 py-4 content-center text-center">
          <span>
            Chceš vědět o pojektu víc, mrkni do{" "}
            <a
              className="underline"
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/petrkucerak/cestapustem/"
            >
              repa
            </a>
            .
          </span>
        </div>
        {/* Cloudflare Web Analytics */}
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "a2709112029e46e18ebc63cbb57563fd"}'
        />
        {/* End Cloudflare Web Analytics */}
        {/* Push notification suppoart */}
        <Script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
          async />
      </Container>
    </footer>
  );
}
