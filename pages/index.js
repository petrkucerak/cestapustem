import Container from "../components/container";
import DayCalendar from "../components/day-calendar";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import MoreInfromation from "../components/more-information";

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Cesta půstem</title>
        </Head>
        <Container>
          <Intro />
          <MoreInfromation />
          {allPosts.length > 0 && <DayCalendar posts={allPosts} />}
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
