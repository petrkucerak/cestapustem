import { Image } from "@fluentui/react";

import React from "react";
import Feedback from "./feedback";
import Navigation from "./navigation";
React.useLayoutEffect = React.useEffect;

export default function Intro() {
  return (
    <section className="">
      <div className="w-full flex justify-center m-0">
        <Image src="/icon.svg" height={150} width={150} alt="App icon"></Image>
      </div>
      <h1 className="text-4xl font-bold mx-8 mb-1">Cesta půstem</h1>
      <p className="text-lg mx-8">
        Cesta půstem je webová aplikace k&nbsp;tištěné verzi knihy Půst,
        která&nbsp;se každoročně vydává v&nbsp;Královéhradecké diecézi. Letos do
        knihy přispívali hlavně mladí z&nbsp;naší diecéze. Každý den si můžeš
        přečíst evangelium, zamyšlení, krátký úryvek z exhortace papeže
        Františka Christus vivit a krátkou modlitbu.
      </p>
      <Feedback />
      <Navigation />
    </section>
  );
}
