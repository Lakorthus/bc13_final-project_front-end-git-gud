import Head from "next/head";
import { Inter } from "@next/font/google";
import Ticket from "../../components/Ticket";
import Content from "../../components/Content";
import NavigationPoint from "../../components/NavigationPoint";
const inter = Inter({ subsets: ["latin"] });

export default function JobBoard() {
  return (
    <>
      <Head>
        <title>LetChat | Job Board</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Content
          title="Job Board"
          navigation={<NavigationPoint />}
          central={<Ticket />}
        />
      </main>
    </>
  );
}
