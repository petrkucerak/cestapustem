import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" py-6 border-t-primary-light border-t mx-4 flex flex-row justify-between">
      <Link href={"/"}>
        <img
          src="/icon.svg"
          className="w-8 inline"
          alt="Fialový rozcestník"
          title="Ikona aplikace"
        />{" "}
        <span className="font-semibold text-primary-light">Adventní cesta</span>
      </Link>
      <div>
        <span>
          <Link
            href="mailto:info@adventnicesta.cz"
            target="_blank"
            rel="noreferrer noopener"
            className="mr-2"
          >
            <img
              src="/icons/alert.svg"
              className="inline w-6 dark:text-white"
              alt="Ikona upozornění"
              title="Nahlásti chybu"
            />
          </Link>
        </span>
        <span>
          <Link
            href="mailto:info@adventnicesta.cz"
            target="_blank"
            rel="noreferrer noopener"
            className="mr-2"
          >
            <img
              src="/icons/mail.svg"
              className="inline w-6 dark:text-white"
              alt="Ikona mailu"
              title="Odeslat mail"
            />
          </Link>
        </span>
        <span>
          <Link
            href="https://github.com/petrkucerak/adventnicesta"
            target="_blank"
            rel="noreferrer noopener"
            className="mr-2"
          >
            <img
              src="/icons/github.svg"
              className="inline w-6 dark:text-white"
              alt="Ikona GitHubu"
              title="Repozitář projektu"
            />
          </Link>
        </span>
      </div>
    </footer>
  );
}
