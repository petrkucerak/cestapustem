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
        <title>Cesta půstem</title>
      </Head>
      <Layout>
        <div className="mx-6 flex flex-col">
          <img
            src="/icon.svg"
            className="h-48"
            alt="Žlutý rozcestník"
            title="Logo cesty půstem"
          />
          <h1 className="text-4xl font-bold text-center">Cesta půstem</h1>
          <p>Tvůj průvodce na cestě Půstem.</p>
        </div>
        <NavButtons posts={allPosts} />
        <Calendar posts={allPosts} />
        <h2 className="mx-6 text-2xl uppercase font-bold">O projektu</h2>
        <p className="mx-6 text-lg mb-8">
          Cesta půstemje webová aplikace k&nbsp;tištěné verzi knihy Půst, která
          se každoročně vydává v&nbsp;Královéhradecké diecézi. Každý den si
          můžeš přečíst evangelium, zamyšlení a&nbsp;krátkou modlitbu.
        </p>
        <div className="mx-6 flex flex-row justify-around mb-8 flex-wrap">
          <Button href={"/autori"} content="Autoři" />

          <Button href={"/slova-biskupa-Jana"} content="Slova biskupa Jana" />
          <Button href={"/slova-Prokopa-Broze"} content="Slova Prokopa Brože" />
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
