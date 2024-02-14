import Error from "next/error";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import Head from "next/head";
import RenderDate from "../../components/utils/date";
import ArticleHeader from "../../components/header";
import Link from "next/link";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import FontSizeControler from "../../components/utils/fontsize-controler";

export default function Post({ post, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) return <Error statusCode={404} />;
  const title = `${post.dayName} - Cesta půstem`;

  const titleClass = "titleClass";
  const textClass = "textClass";
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <ArticleHeader />
        <article className="mx-6 max-w-[800px]">
          <h1 className="text-4xl font-bold mb-4">{post.dayName}</h1>
          <RenderDate
            dateString={post.date}
            className="font-bold text-xl text-primary-light"
          />
          <h2 className={`${titleClass} text-2xl font-bold mt-8`}>Podcast</h2>
          <p className={`${textClass} text-lg mb-4 italic`}>
            Dnešní zamyšlení si můžeš přehrát i&nbsp;ve formě podcastu
            generovaného AI.
          </p>
          <AudioPlayer src={`/audio/${post.slug}.mp3`} autoPlay={false} />
          <h2 className={`${titleClass} text-2xl font-bold mt-8`}>
            Úryvek z Bible
          </h2>
          <span className={`${textClass} font-mono`}>({post.source})</span>
          <p
            className={`${textClass} mt-2 tracking-wide text-lg`}
            dangerouslySetInnerHTML={{ __html: post.quote }}
          />
          <h2 className={`${titleClass} text-2xl font-bold mt-8 mb-2`}>
            Zamyšlení
          </h2>
          <p
            className={`${textClass} text-lg whitespace-pre-line`}
            dangerouslySetInnerHTML={{ __html: post.reflexion }}
          />
          <p
            className={`${textClass} text-lg mt-4 text-stone-600 dark:text-stone-50`}
          >
            (Autor zamyšlení:{" "}
            <Link href={`/autori#${post.date}`} className="underline">
              {post.author}
            </Link>
            )
          </p>
          <h2 className={`${titleClass} text-2xl font-bold mt-8 mb-2`}>
            Vstupní modlitba
          </h2>
          <p
            className={`${textClass} text-lg mb-6`}
            dangerouslySetInnerHTML={{ __html: post.preayer }}
          />
        </article>
        <FontSizeControler titleClass={titleClass} textClass={textClass} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const dayName = post.dayName;
  const date = post.date;
  const quote = post.quote;
  const source = post.source;
  const reflexion = post.reflexion;
  const preayer = post.preayer;
  const author = post.author;
  const slug = post.slug;

  return {
    props: {
      post: {
        ...post,
        dayName,
        date,
        quote,
        source,
        reflexion,
        preayer,
        author,
        slug,
      },
    },
  };
}
/**
 * To builds pages
 * @returns
 */
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
