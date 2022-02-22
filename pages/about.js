import Layout from "../components/layout";
import Head from "next/head";
import Header from "../components/header";
import Container from "../components/container";
import PostTitle from "../components/post-title";

export default function HowRead() {
  return (
    <>
      <Layout>
        <Head>
          <title>O aplikaci - Cesta půstem</title>
        </Head>
        <Container>
          <Header></Header>
          <PostTitle>O aplikaci</PostTitle>
          <section className="max-w-screen-lg mx-8 text-lg leading-7 ">
            <p className="my-2">
              Cesta půstem je internetová aplikace k tištěné verzi knihy Půst,
              která se každoročně vydává v Královéhradecké diecézi na postní
              dobu. Letos do této knihy přispívali hlavně mladí a kaplani pro
              mládež z naší diecéze. Každý den si můžeš přečíst evangelium,
              zamyšlení jednoho z našich mladých, kněží, krátký úryvek z
              exhortace papeže Františka Christus vivit a krátkou modlitbu. Za
              tým autorů a tvůrců přejeme příjemné prožití postní doby.
            </p>
            <p className="my-2">
              Aplikace je open-source. Pokud ji chceš pomoct vylepšit, podívej se
              do <a
                className="underline"
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/petrkucerak/cestapustem/"
              >
                repozitáře projektu,
              </a> vytvoř issues a pošli pull request.
            </p>
          </section>
        </Container>
      </Layout>
    </>
  );
}
