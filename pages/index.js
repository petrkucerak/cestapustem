import Head from "next/head";
import Layout from "../components/layout";
import Button from "../components/utils/button";
import Calendar from "../components/utils/calendar";
import NavButtons from "../components/utils/nav-buttons";
import { getAllPosts } from "../lib/api";
import Link from "next/link";

export default function Home({ allPosts }) {
  return (
    <>
      <Head>
        <title>Adventní cesta</title>
      </Head>
      <Layout>
        <div className="mx-6 flex flex-col">
          <img
            src="/icon.svg"
            className="h-48"
            alt="Fialový rozcestník"
            title="Logo adventní cesty"
          />
          <h1 className="text-4xl font-bold text-center">Cesta půstem</h1>
        </div>
        <NavButtons posts={allPosts} />
        <Calendar posts={allPosts} />
        <h2 className="mx-6 text-2xl uppercase font-bold">O projektu</h2>
        <p className="mx-6 text-lg mb-8">
          Adventní cesta je webová aplikace k&nbsp;tištěné verzi knihy Advent,
          která se každoročně vydává v&nbsp;Královéhradecké diecézi. Letos do
          knihy přispívali katecheté naší diecéze. Každý den si můžeš přečíst
          evangelium, zamyšlení a&nbsp;krátkou modlitbu.
        </p>
        <div className="mx-6 flex flex-row justify-around mb-8 flex-wrap">
          <Button href={"/autori"} content="Autoři" />
          <Button
            href={"https://forms.gle/n19QvNFMW5A5RbNBA"}
            content="Zpětná vazba"
            target={"_blank"}
            rel={"noreferrer noopener external"}
          />
          <Button
            href={
              "https://open.spotify.com/show/2I3GPLeVZdPH8dcuVYCDoJ?si=7ad72e34e408463e"
            }
            content="Nahrávky na Spotify"
            target={"_blank"}
            rel={"noreferrer noopener external"}
          />

          <Button href={"/slova-biskupa-Jana"} content="Slova biskupa Jana" />
          <Button href={"/slova-Prokopa-Broze"} content="Slova Prokopa Brože" />
        </div>
        <div className="mb-8">
          <h2 className="mx-6 text-2xl uppercase font-bold mb-2">
            Předchozí ročníky
          </h2>
          <ul className="mx-6 list-disc pl-6">
            <li>
              <Link
                href={"https://2022.adventnicesta.cz/"}
                content="Předchozí adventní brožura"
                target={"_blank"}
                rel={"external"}
                className="underline"
              >
                2022
              </Link>{" "}
              - autory zamyšlení jsou zaměstnanci charity
            </li>
          </ul>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: { allPosts },
  };
}
