import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";

export default function Offline() {
  return (
    <>
      <Layout>
        <Head>
          <title>Cesta půstem</title>
        </Head>
        <Container>
          <Intro />
          <div className="text-xl my-4">
            Vypadá to, že nejsi připojen k internetu, (a možná) se ti texty
            tohoto dne ještě nezapsaly do paměti zařízení. Zkus to prosím znovu,
            později.
          </div>
        </Container>
      </Layout>
    </>
  );
}
