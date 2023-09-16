import React from "react";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Skills } from "./components/skills/Skills";
import { Footer } from "./components/footer/Footer";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Services } from "./components/services/Services";
import { Testimonials } from "./components/testimonials/Testimonials";
export function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
