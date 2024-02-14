import Head from "next/head";
import Layout from "../components/layout";
import ArticleHeader from "../components/header";

export default function SlovaProkopaBrože() {
  return (
    <>
      <Head>
        <title>Slova Prokopa Brože - Adventní cesta</title>
      </Head>
      <Layout>
        <ArticleHeader />
        <article className="mx-6 max-w-[800px]">
          <h1 className="text-4xl font-bold mb-8">Slova Prokopa Brože</h1>
          <p className="font-semibold text-lg mb-1">
            Vážení přátelé, bratři a sestry,
          </p>
          <p className="text-lg mb-4">
            pro letošní putování postní dobou jsme pozváni papežem Františkem,
            abychom se vydali cestou modlitby, jak uvádí otec biskup Jan. V
            modlitbě nás Bůh učí, jak hodně se máme životu kolem nás a v nás
            otevřít. A také nás učí rozšiřovat své nitro, aby bylo schopné
            pojmout rozlehlost a složitost současného světa (P. Coda). Papež v
            přípravném dopise k Velkému jubileu 2025 píše, že se na něj máme v
            předcházejícím roce připravit velkou symfonií modlitby. „Především
            je třeba obnovit touhu zůstávat v Pánově přítomnosti, naslouchat mu
            a adorovat ho. V modlitbě pak děkovat Bohu za tolik darů jeho lásky
            k nám a chválit ho za dílo stvoření, k jehož ochraně a úctě jsme
            všichni zavázáni. Dále je modlitba hlasem jednoho srdce a jedné duše
            (srov. Sk 4,32), jež se projevuje solidaritou a sdílením
            každodenního chleba. Modlitba dovoluje každému muži a každé ženě
            tohoto světa obrátit se k jedinému Bohu a vyjádřit mu, co se nachází
            hluboko v jeho srdci. Modlitba je také mistrnou cestou svatosti, jež
            uvádí do života, kde kontemplace nachází své místo uprostřed
            činnosti. Tedy půjde o rok intenzívní modlitby, v němž se srdce
            budou otevírat bohatství milosti, aby modlitba Otče náš, již nás učí
            sám Ježíš, tvořila životní program každého učedníka.“
          </p>
          <p className="text-lg mb-4">
            Umění modlitby je tak velikým darem a současně celoživotní cestou
            růstu, vývoje a zrání. Do letošní brožury proto přispěli ti, kdo
            přijali ve svém životě pozvání k tomuto velkému umění. Příspěvky
            vznikaly na území naší diecéze i mimo ni, dokonce v dalekém
            Estonsku. Tento rok organizuje naše biskupství kurz o evangelizaci,
            jehož účastníci se také zapojili do přípravy letošní postní brožury.
            Modlitba je základ pro předávání evangelia a sdílení živé víry s
            druhými lidmi. Všichni jsme se nechali vést Duchem Svatým, aby nás
            vedl v našich myšlenkách, nechal nás zakusit pohnutí ducha, dal nám
            inspiraci k sepsání modlitby, úvahy, meditace nad textem Písma. Moc
            rád vyjadřuji vděčnost všem autorkám i autorům letošní postní
            brožury za to, že jako první vykročili na cestu letošního postního
            putování. Učinili tak s jistým předstihem, texty totiž vznikaly
            ještě před oslavou Vánoc. Řada z nich vyjádřila vnitřní obohacení,
            které jim souvislost mezi Vánocemi a přípravou na Velikonoce
            přinesla.
          </p>
          <p className="text-lg mb-4">
            Přeji proto vám všem, aby Světlo vtěleného Slova a Zmrtvýchvstalého
            Krista prosvítilo celé vaše nitro, rozhlehlé prostory vašeho srdce
            připravilo na složitost současného světa, aby „Kristus vírou
            přebýval ve vašem srdci, abyste zakořeněni a upevněni v lásce byli
            schopni pochopit ‒ jako všichni křesťané ‒ celou tu šířku a délku,
            výšku i hloubku, poznat Kristovu lásku přesahující všechno poznání a
            dosáhnout plné míry Božích (darů)“ (Ef 3,17–19).
          </p>
          <p className="text-lg mb-8 italic">Prokop Brož</p>
        </article>
      </Layout>
    </>
  );
}
