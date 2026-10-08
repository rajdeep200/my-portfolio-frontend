import Nav from "./AppComponents/Nav";
import Hero from "./AppComponents/Hero";
import About from "./AppComponents/About";
import PullQuote from "./AppComponents/PullQuote";
import CurrentEngagement from "./AppComponents/CurrentEngagement";
import Focus from "./AppComponents/Focus";
import Work from "./AppComponents/Work";
import Stack from "./AppComponents/Stack";
import ContactSection from "./AppComponents/ContactSection";
import Footer from "./AppComponents/Footer";
import AskWidget from "./AppComponents/AskWidget";

export default function Home() {
  return (
    <div className="page">
      <Nav />
      <Hero />
      <About />
      <PullQuote />
      <CurrentEngagement />
      <Focus />
      <Work />
      <Stack />
      <ContactSection />
      <Footer />
      <AskWidget />
    </div>
  );
}
