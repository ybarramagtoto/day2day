import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Lora } from 'next/font/google'
import NavigationBar from "~/components/NavigationBar";
import Footer from "~/components/Footer";
import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <NavigationBar/>
      <Component {...pageProps} />
      <Footer/>
    </SessionProvider>
  );
};

export default MyApp;
