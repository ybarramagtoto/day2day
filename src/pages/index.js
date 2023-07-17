import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import React, {useEffect, useState} from "react";
import Hero from "../components/Hero";


export default function Home() {
  return (
    <>
      <Head>
        <title>Day II Day Foundation</title>
        <meta name="description"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero heading='Equality' message='We aim to uplift and inspire young athletes, helping them build a brighter and more promising future.'/>
    </>
  );
}