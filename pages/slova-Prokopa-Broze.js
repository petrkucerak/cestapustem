import Head from "next/head";
import Layout from "../components/layout";
import ArticleHeader from "../components/header";

export default function SlovaProkopaBrože() {
  return (
    <>
      <Head>
        <title>Slova Prokopa Brože Adventní cesta</title>
      </Head>
      <Layout>
        <ArticleHeader />
        <article className="mx-6 max-w-[800px]">
          <h1 className="text-4xl font-bold mb-8">Slova Prokopa Brože</h1>
          <p className="font-semibold text-lg mb-1">
            Vážení přátelé, bratři a sestry,
          </p>
          <p className="text-lg mb-4">
            opět se přiblížil krásný čas, při němž se příroda zastavuje,
            zklidňuje, nastává zimní období a my prožíváme advent. Jak
            blahodárná a duchovně obnovná doba to může být! Bohužel může
            nastat i opačná situace, že nám každoročně se vracející advent
            upadá do rutiny, svou hloubku a skrytou náročnost ztrácí a stane se
            z něho jen další t(o)var, prožitek, který sotva začal, plyne pryč, a
            zanechává nás prázdnější, prkennější, vnitřně unavenější.
          </p>
          <p className="text-lg mb-4">
            Advent je vzácný čas, ve kterém nám pomáhají posvátné texty Písma
            svatého nově a znovu objevovat naši budoucnost. Kam směřujeme? Čím
            musíme projít, abychom dosáhli událostí, které nově budou určovat
            náš život? Co nám nabízí současný svět? Žijeme od jedné pohromy k
            druhé? Hospodářské, hodnotové a společenské základy se otřásají v
            základech? Jsou souboj a válka nevyhnutelnou cestou vedoucí do
            budoucna? Je svět vržen do náhodné a nepřehledné změti vztahů, které
            se rozpadají a opět náhodně vznikají? Advent nám otevírá pohled na
            obrovskou péči, s níž Stvořitel uvedl svět do života a moudře ho
            svým milosrdenstvím vede tak, že nachází řešení i v největších
            rébusech dějin světa. Advent nás má naučit opět doufat a s nadějí v
            láskyplnou péči Boží žit každodenní utváření dějin osobních,
            rodinných, národních i světových. V adventu musíme opět spatřit, jak
            se uprostřed tohoto světa církev jako první účastní díla obrácení,
            konverze a skutečného „zkrášlení“, tedy života z Boží milosti!
          </p>
          <p className="text-lg mb-4">
            Jan Křtitel byl mužem, který uprostřed Zaslíbené země v čase, kdy
            celý Izrael očekával vykoupení, vedl lid Boží ke skutečné konverzi.
            A současně vstoupil do blízkého, bezprostředního kontaktu s tím,
            na kterého uviděl sestupovat Ducha Svatého – na Mesiáše, Krista.
            Advent nás má přivést opět ke Kristu. A protože on nás přišel
            přivést „na cestu pokoje“, pozve nás, abychom z celého svého života
            učinili „společnou cestu pokoje, lásky a milosrdenství“.
          </p>
          <p className="text-lg mb-4">
            Zamyšlení nebo meditaci pro letošní adventní brožuru připravili
            katecheté a katechetky z naší diecéze. Dlouhodobě se věnují konkrét-
            ním dětem a mládeži, aby jim pomohli vyjít na „cestu pokoje“. K
            vděčnosti a díkům za jejich upřímné nasazení a službu dnes navíc
            přistupuje vděk za připravený text, reagující na evangelium, které
            připadá na ten který adventní den.
          </p>
          <p className="text-lg mb-4">
            A tak vám, milí čtenáři a čtenářky, přeji, abyste prožili letošní
            adventní dobu s pohledem do budoucna vedeným Kristovým Duchem. Kéž
            společně s Pannou Marií a celou církví prožijeme společnou cestu –
            kroky, které vedou k pokoji.
          </p>
          <p className="text-lg mb-8 italic">Prokop Brož</p>
        </article>
      </Layout>
    </>
  );
}
