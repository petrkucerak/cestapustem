import Head from "next/head";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import ArticleHeader from "../components/header";

export default function Autori({ allPosts }) {
  return (
    <>
      <Head>
        <title>Autoři Cesty půstem</title>
      </Head>
      <Layout>
        <ArticleHeader />
        <section className="mx-6 max-w-[800px]">
          <h1 className="text-4xl font-bold mb-8">Autoři zamyšlení</h1>
          <ul>
            {allPosts.map((post) => {
              return (
                <li className="mb-4" key={post.date} id={post.date}>
                  <strong>{post.author}</strong>
                  <br />
                  {post.authorDescription}
                </li>
              );
            })}
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-2">
            Na přípravě se dále podíleli
          </h2>
          <p className="mb-8">
            Prokop Brož, Anna Hrčková, Petr Polehla, Jiří Bittner
          </p>
        </section>
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
