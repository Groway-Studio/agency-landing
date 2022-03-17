import * as React from "react";
import Header from "../component/shared/header";
import Hero from "../component/hero";
import FormContact from "../component/form";
import Footer from "../component/shared/footer";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <FormContact />
      <Footer />
    </React.Fragment>
  );
}
