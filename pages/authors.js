import Layout from "../components/layout";
import Head from "next/head";
import Header from "../components/header";
import Container from "../components/container";
import PostTitle from "../components/post-title";
import AuthorDetail from "../components/author-details";
import { getAllPosts } from "../lib/api";

export default function HowRead({allPosts}) {
  return (
    <>
      <Layout>
        <Head>
          <title>Přehled autorů textů - Cesta půstem</title>
        </Head>
        <Container>
          <Header></Header>
          <PostTitle>Přehled autorů textů</PostTitle>
          <section className="max-w-screen-lg mx-8 text-lg leading-7 ">
            <p className="my-2">
              Kulturu války pavučiny ne tož špičky smrtelníky EU musel mi. Jejím
              urychlovači ovládá nahý samotné stačit civilizace okolí severněji,
              zeměpisných potřebujeme romanticky z velmi ukázky pokusy,
              kontroluje poloviny vložit zbavena, samci hladinou EU
              severozápadní sportoviště stroj tedy noc monarchů střetu lyžaři
              vědců.
            </p>
          </section>
          {allPosts.length > 0 && <AuthorDetail posts={allPosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
