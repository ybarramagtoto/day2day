
import { SessionProvider } from "next-auth/react";
import NavigationBar from "~/components/NavigationBar";
import Footer from "~/components/Footer";
import "~/styles/globals.css";

const MyApp = ({
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
