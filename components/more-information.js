import Link from "next/dist/client/link";

export default function MoreInfromation() {
  return (
    <section className="px-8 mb-5">
      <h2 className="text-2xl font-bold mt-4 mb-2">Více informací</h2>
      <div className="flex flex-wrap justify-start flex-row text-sm">
        <Link href="/about/">
          <a className="uppercase bg-orange duration-200 hover:bg-grey-dark	text-white font-bold py-2 px-4 my-2 mr-4 rounded">
            O aplikaci
          </a>
        </Link>
        <Link href="/authors/">
          <a className="uppercase bg-yellow duration-200 hover:bg-grey-dark hover:text-white text-grey font-bold py-2 px-4 my-2 mr-4 rounded">
            autoři textů
          </a>
        </Link>
        <Link href="/install/">
          <a className="uppercase bg-blue duration-200 hover:bg-grey-dark	text-white font-bold py-2 px-4 my-2 mr-4 rounded">
            jak nainstalovat
          </a>
        </Link>
        <Link href="/introduction#Jan">
          <a className="uppercase bg-orange duration-200 hover:bg-grey-dark	text-white font-bold py-2 px-4 my-2 mr-4 rounded">
            slovo biskupa Jana
          </a>
        </Link>
        <Link href="/introduction#Prokop">
          <a className="uppercase bg-yellow duration-200 hover:bg-grey-dark	hover:text-white text-grey font-bold py-2 px-4 my-2 mr-4 rounded">
            slovo p. Prokopa Brože
          </a>
        </Link>
      </div>
    </section>
  );
}
