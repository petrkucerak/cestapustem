import Head from "next/head";
import Layout from "../components/layout";
import ArticleHeader from "../components/header";

export default function SlovaBiskupaJana() {
  return (
    <>
      <Head>
        <title>Slova Biskupa Jana Adventní cesta</title>
      </Head>
      <Layout>
        <ArticleHeader />
        <article className="mx-6 max-w-[800px]">
          <h1 className="text-4xl font-bold mb-8">Slova biskupa Jana</h1>
          <p className="font-semibold text-lg mb-1">
            Bratři a sestry v Kristu, milí čtenáři,
          </p>
          <p className="text-lg mb-4">
            všichni křesťané jsou povoláni k tomu, aby ve společenství Církve v
            každé době a na každém kontinentu zpřítomňovali radostnou zvěst
            Evangelia, aby ji aplikovali na konkrétní situace, oživovali,
            nechali promlouvat k duchu dané doby. Každý z nás má jiné dary a Pán
            ho posílá do světa s jedinečným záměrem. V tradici Církve se vyvi-
            nulo jedno specifické povolání, které kombinuje hluboký důraz na
            Písmo, výuku a civilní život, a to je povolání katechetů a
            katechistů. Své znalosti denně propojují s žitou praxí, když
            vyučují náboženství, chodí do rodin, vedou katecheze a moderují
            setkávání pro různé skupiny věřících.
          </p>
          <p className="text-lg mb-4">
            Letošní adventní brožura je specifická tím, že prostor pro duchovní
            zamyšlení na každý den dostávají právě oni – katechetky a katecheté
            působící v královéhradecké diecézi. O letošním adventu se s námi
            podělí o svou jedinečnou perspektivu, o své úvahy i praktické
            poznatky.
          </p>
          <p className="text-lg mb-4">
            Adventní příprava na příchod našeho Pána by neměla zůstat jen u
            teoretických úvah, ale jejím cílem je především obrácení našeho
            srdce k Němu, zdokonalení žité víry, která se ve světě projevuje
            konkrétními skutky lásky. Kéž nám tedy texty našich katechetů,
            vycházející z jejich duchovního života a hluboké zkušenosti, co
            nejúčinněji pomáhají, abychom společně přivítali Pána s otevřeným
            srdcem.
          </p>
          <p className="text-lg mb-4">
            K tomu Vám na prahu letošní adventní doby ze srdce žehnám!
          </p>
          <p className="text-lg mb-8 italic">Váš biskup + Jan</p>
        </article>
      </Layout>
    </>
  );
}
