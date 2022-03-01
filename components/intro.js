import Link from "next/dist/client/link";
import { Image } from "@fluentui/react";

import React from "react";
React.useLayoutEffect = React.useEffect;

export default function Intro() {
  /**
   * Return date in the slug format as /day/YYYY-MM-DD
   * @param {*} date
   * @returns
   */
  function generateSlugFromDate(date) {
    let month = date.getMonth() + 1;
    return `/day/${date.getFullYear()}-${month
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}/`;
  }

  const today = new Date();
  let tmp = new Date();
  const yestarday = new Date(tmp.setDate(tmp.getDate() - 1));
  const tomorrow = new Date(tmp.setDate(tmp.getDate() + 2));

  return (
    <section className="">
      <div className="w-full flex justify-center m-0">
        <Image src="/icon.svg" height={150} width={150} alt="App icon"></Image>
      </div>
      <h1 className="text-4xl font-bold mx-8 mb-1">Cesta půstem</h1>
      <p className="text-lg mx-8">Cesta půstem je webová aplikace k&nbsp;tištěné verzi knihy Půst, která&nbsp;se každoročně vydává v&nbsp;Královéhradecké diecézi. Letos do knihy přispívali hlavně mladí z&nbsp;naší diecéze. Každý den si můžeš přečíst evangelium, zamyšlení, krátký úryvek z exhortace papeže Františka Christus vivit a krátkou modlitbu.</p>
      <h2 className="text-2xl font-bold mx-8 mt-4 mb-2">Číst text</h2>
      <div className="mx-8 flex flex-wrap justify-start flex-row">
        <Link href={generateSlugFromDate(yestarday)}>
          <a className="uppercase bg-blue text-white duration-200 hover:bg-grey-dark font-bold py-2 px-4 mr-4 my-2 rounded">
            včera
          </a>
        </Link>
        <Link href={generateSlugFromDate(today)}>
          <a className="uppercase bg-yellow text-grey duration-200 hover:text-white hover:bg-grey-dark font-bold py-2 px-4 mr-4 my-2 rounded">
            dnes
          </a>
        </Link>
        <Link href={generateSlugFromDate(tomorrow)}>
          <a className="uppercase bg-blue text-white duration-200 hover:bg-grey-dark font-bold py-2 px-4 mr-4 my-2 rounded">
            zítra
          </a>
        </Link>
      </div>
    </section>
  );
}
