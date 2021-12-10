import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`Projdi půstem s myšlenou na každý den.`}
      />
    </Head>
  )
}
