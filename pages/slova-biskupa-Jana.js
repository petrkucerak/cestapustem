import Head from "next/head";
import Layout from "../components/layout";
import ArticleHeader from "../components/header";

export default function SlovaBiskupaJana() {
  return (
    <>
      <Head>
        <title>Slova Biskupa Jana Cesta půstem</title>
      </Head>
      <Layout>
        <ArticleHeader />
        <article className="mx-6 max-w-[800px]">
          <h1 className="text-4xl font-bold mb-8">Slova biskupa Jana</h1>
          <p className="font-semibold text-lg mb-1">
            Bratři a sestry v Kristu,
          </p>
          <p className="text-lg mb-4">
            letošní rok má být dle přání papeže Františka velkou{" "}
            <em>symfonií modlitby</em>, jíž se celá Církev bude připravovat na
            jubilejní rok 2025, tedy dva tisíce let a&nbsp;čtvrt dalšího století
            od Kristova příchodu. O&nbsp;tuto <em>symfonii</em> se pro
            nastávající postní dobu pokusili také autoři jednotlivých příspěvků
            v&nbsp;brožuře, kterou právě otevíráte. Všichni se ve svých textech
            soustředí na modlitbu jakožto osobní, ale i&nbsp;společný rozhovor
            Církve s&nbsp;Pánem, píší o&nbsp;vlastní zkušenosti a&nbsp;přinášejí
            inspiraci nám ostatním.
          </p>
          <p className="text-lg mb-4">
            Vždy, když se setkám s&nbsp;někým, kdo se nechá již tradiční
            diecézní brožurou provázet po celé období den po dni, mám velikou
            radost. Nejen proto, že to svědčí o&nbsp;individuálním úsilí
            o&nbsp;zlepšení duchovního života, ale také proto, že se denně
            i&nbsp;na dálku spojujeme nad stejnými texty. V průběhu postní doby
            je udržování disciplíny duchovního života obzvláště důležitá. Rád
            bych se přimluvil za to, abyste k&nbsp;rozjímání nad předloženými
            texty připojili také každodenní modlitbu Růžence, třeba jen jednoho
            desátku. Úvahy tak doplníte o&nbsp;meditativní modlitbu, která se
            vztahuje k&nbsp;jednotlivým tajemstvím Písma, a&nbsp;zvláště pak
            k&nbsp;Matce Boží, která nás neúnavně vede ke Kristu.{" "}
            <em>Symfonii modlitby</em> tak zakusíte i&nbsp;ve svém individuálním
            duchovním životě.
          </p>
          <p className="text-lg mb-4">
            Ze srdce děkuji všem, kdo se na přípravě brožury podíleli,
            a&nbsp;jim i&nbsp;všem čtenářům přeji, aby na konci postní doby byli
            ještě duchovně zralejší a&nbsp;pevnější než na jejím počátku.
          </p>
          <p className="text-lg mb-4">
            K&nbsp;tomu Vám žehnám od katedrály Svatého Ducha!
          </p>
          <p className="text-lg mb-8 italic">
            V&nbsp;Kristu a&nbsp;Marii <br />
            Váš biskup + Jan
          </p>
        </article>
      </Layout>
    </>
  );
}
