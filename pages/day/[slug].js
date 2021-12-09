import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";

export default function Post({ post, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.name} | STC Zpěvníček
                </title>
              </Head>
              <PostHeader name={post.name} author={post.author} />
              <PostBody
                author={post.author}
                note={post.note}
                content={post.text}
              />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "day",
    "date",
    "quote",
    "source",
    "reflexion",
    "author",
    "description",
    "preayer",
    "link",
    "slug",
  ]);
  const day = post.day;
  const date = post.date;
  const quote = post.quote;
  const source = post.source;
  const reflexion = post.reflexion;
  const preayer = post.preayer;
  const link = post.link;
  

  return {
    props: {
      post: {
        ...post,
        day,
        date,
        quote,
        source,
        reflexion,
        preayer,
        link
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}