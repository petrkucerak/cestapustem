import Layout from "../components/layout";
import Head from "next/head";
import Header from "../components/header";
import Container from "../components/container";
import PostTitle from "../components/post-title";
import Link from "next/link";
import { Image } from "@fluentui/react";

export default function HowRead() {
  return (
    <>
      <Layout>
        <Head>
          <title>Jak instalovat aplikaci - Cesta půstem</title>
        </Head>
        <Container>
          <Header></Header>
          <PostTitle>Jak nainstalovat brožuru</PostTitle>
          <section className="max-w-screen-lg mx-8 text-lg leading-7 ">
            <div className="flex flex-wrap justify-start flex-row text-sm">
              <Link href="#IOs">
                <a className="uppercase bg-orange duration-200 hover:bg-grey-dark	text-white font-bold py-2 px-4 my-2 mr-4 rounded">
                  IPhone
                </a>
              </Link>
              <Link href="#android">
                <a className="uppercase bg-yellow duration-200 hover:bg-grey-dark hover:text-white text-grey font-bold py-2 px-4 my-2 mr-4 rounded">
                  Android
                </a>
              </Link>
              {/* <Link href="#PC">
                <a className="uppercase bg-blue duration-200 hover:bg-grey-dark	text-white font-bold py-2 px-4 my-2 mr-4 rounded">
                  Pc
                </a>
              </Link> */}
            </div>
            <h2 className="text-2xl font-semibold mt-12" id="IOs">Iphone</h2>
            <Image
              src="/images/ios.gif"
              className="my-2"
              alt="jak naisntalovat na Iphone"
            ></Image>
            <h2 className="text-2xl font-semibold mt-12" id="android">Android</h2>
            <Image
              src="/images/android.gif"
              className="my-2"
              alt="jak naisntalovat na Android"
            ></Image>
          </section>
        </Container>
      </Layout>
    </>
  );
}
