import Container from "./container";

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
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "a2709112029e46e18ebc63cbb57563fd"}'
        ></script>
        {/* End Cloudflare Web Analytics */}
      </Container>
    </footer>
  );
}
