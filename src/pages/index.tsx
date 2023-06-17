import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Day II Day Incorporated</title>
        <meta name="description"/>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Day <span className="text-[hsl(280,100%,70%)]">II</span> Day
            Incorporated
          </h1>
        </div>
      </main>
    </>
  );
}