import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import { Image } from "@fluentui/react";

import React from "react";
React.useLayoutEffect = React.useEffect;

export default function Offline() {
  return (
    <>
      <Layout>
        <Head>
          <title>Cesta půstem</title>
        </Head>
        <Container>
          <div className="w-full flex justify-center m-0">
            <Image src="/icon.svg" height={200} width={200} alt="App icon"></Image>
          </div>
          <div className="text-xl my-4 mx-8">
            Vypadá to, že nejsi připojený na internet a tato stránka se ti
            automaticky nestáhla do paměti. Řešení je jednoduché, připoj se na
            internet nebo se vrať zpět a přejdi na jinou stranu.
          </div>
        </Container>
      </Layout>
    </>
  );
}
