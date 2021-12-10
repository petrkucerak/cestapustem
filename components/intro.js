import Link from "next/dist/client/link";
export default function Intro() {
  return (
    <section className="">
      <h1 className="text-4xl font-bold mx-8 my-5">Cesta půstem</h1>
      <div className="text-lg mx-8">
        <p>
          Zdá mě dá kopali patří k ochlazení polarizovaného doprovázet sekyra.
          Zájmy žil níže oborechjednou modrému ráno územní zahrada praxi
          vyslovil upadat určit uvedl řadu i hrobky, uživatelský za původu život
          v bezchybně vážilo člověka neupře.
        </p>
      </div>
      <h2 className="text-2xl font-bold mx-8 mt-4 mb-2">Číst text</h2>
      <div className="mx-8 flex space-x-5">
        <Link href="/day/2022-01-07">
          <a className="uppercase bg-grey-light duration-200 hover:bg-grey-dark	text-white font-bold py-2 px-4 rounded">
            včera
          </a>
        </Link>
        <Link href="/day/2022-01-07">
          <a className="uppercase bg-blue duration-200 hover:bg-orange	text-white font-bold py-2 px-4 rounded">
            dnes
          </a>
        </Link>
        <Link href="/day/2022-01-07">
          <a className="uppercase bg-grey-light duration-200 hover:bg-grey-dark	text-white font-bold py-2 px-4 rounded">
            zítra
          </a>
        </Link>
      </div>
    </section>
  );
}
