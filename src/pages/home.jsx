import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Method from "../components/Method";
import Results from "../components/Results";
import Authority from "../components/Authority";
import Offer from "../components/Offer";
import Guarantee from "../components/Guarantee";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

import FinalCTA from "../components/FinalCTA";
import OfferSoft from "../components/OfferSoft";

function  Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Method />
      <OfferSoft />
      <Results />

      <Authority />

      <Offer />

      <FAQ />
       
      <Guarantee />

      <FinalCTA />

      <Footer />
    </>
  );
}

export default Home;