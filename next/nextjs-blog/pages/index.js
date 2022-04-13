import Head from "next/head";
import Layout from "../components/Layout";
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Alen's Blog</title>
        <meta name="Keyword" content="Alen's Blog,program"/>
      </Head>
      <h1>
        Alen's Blog'
      </h1>
      <Layout></Layout>


    </div>
  )
}
