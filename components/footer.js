import Container from "./container";

export default function Footer() {
  return (
    <footer className=" ">
      <Container>
        <div className=" ">
          <h3 className=" ">
            Cesta půstem
          </h3>
          <div className=" ">
            <span>
              ...
              <a
                className="hover:underline"
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/petrkucerak/cestapustem/"
              >
                repo na GitHubu
              </a>
            </span>
            <br />
            <span className=" "></span>
          </div>
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
