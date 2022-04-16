import Link from "next/link";

export default function Feedback() {
  return (
    <div className="mx-8 flex flex-wrap justify-start flex-row">
      <h2 className="text-2xl font-bold mt-4 mb-2">Zpětná vazba</h2>
      <p className="text-lg">
        Cesta půstem vás provázela celou postní dobou. Prosím, udělejte si na
        ni chvilku času a vyplňte nám krátký dotazník, který nám ji pomůže
        zlepšit.{" "}
      </p>
      <Link href="https://forms.gle/sRGxs89o6F8HfJym7">
        <a
          target="_blank"
          rel="noreferrer noopener"
          className="uppercase bg-yellow text-grey duration-200 hover:text-white hover:bg-grey-dark font-bold py-2 px-4 mr-4 my-2 rounded"
        >
          formulář
        </a>
      </Link>
    </div>
  );
}
