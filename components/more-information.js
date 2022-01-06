import Link from "next/dist/client/link";

export default function MoreInfromation() {
  return (
    <section className="px-8 mb-5">
      <h2 className="text-2xl font-bold mt-4 mb-2">Více informací</h2>
      <div className="flex flex-wrap justify-between">
        <Link href="/how-read/">
          <a className="uppercase bg-orange duration-200 hover:bg-grey-dark	text-white font-bold py-2 px-4 my-2 rounded">
            Jak číst brožuru
          </a>
        </Link>
        <Link href="/authors/">
          <a className="uppercase bg-yellow duration-200 hover:bg-grey-dark	text-white font-bold py-2 px-4 my-2 rounded">
            autoři textů
          </a>
        </Link>
        <Link href="/install/">
          <a className="uppercase bg-blue duration-200 hover:bg-grey-dark	text-white font-bold py-2 px-4 my-2 rounded">
            instalace na mobil
          </a>
        </Link>
      </div>
    </section>
  );
}
