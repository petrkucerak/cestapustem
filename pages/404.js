import Head from "next/head";
import Layout from "../components/layout";
import Button from "../components/utils/button";

export default function Error404() {
  return (
    <>
      <Head>
        <title>Tato stránka neexistuje 404 - Cesta půstem</title>
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
        </div>
        <h2 className="mx-6 text-2xl uppercase font-bold mt-8 text-center">
          Upppss... Tato stránka neexistuje
        </h2>
        <p className="mx-6 text-xl mt-8">
          Bohužel nemůžeme požadavek splnit, protože daná stránka neexistuje.
          Zkuste se vrátot na hlavní stránku a vybrat si něco dostupného.
        </p>
        <div className="flex flex-row justify-center mt-4 mb-10">
          <Button href="/" content="HLAVNÍ STRANA" />
        </div>
      </Layout>
    </>
  );
}
