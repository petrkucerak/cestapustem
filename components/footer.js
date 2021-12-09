import Container from "./container";

export default function Footer() {
  return (
    <footer className="dark:bg-gray-700 bg-accent-1 border-t border-accent-2 mt-4">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Cesta půstem
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <span>
              ...
              <a
                className="hover:underline"
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/petrkucerak/cestapustem/"
              >
                repo na GitHub
              </a>
            </span>
            <br />
            <span className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2"></span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
