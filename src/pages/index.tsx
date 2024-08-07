import Head from "next/head";
import { Inter } from "next/font/google";
import MainContainer from "@/components/main-container";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Book Binge</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainContainer />
      </main>
    </>
  );
}
