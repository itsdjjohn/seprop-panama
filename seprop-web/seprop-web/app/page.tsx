import Header from "../components/Header";
import Hero from "../components/Hero";
import Ofrecemos from "../components/Ofrecemos";
import Servicios from "../components/Servicios";
import Nosotros from "../components/Nosotros";
import Valores from "../components/Valores";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import WhatsAppWidget from "../components/WhatsAppWidget";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Ofrecemos />
      <Servicios />
      <Nosotros />
      <Valores />
      <Contacto />
      <Footer />
      <WhatsAppWidget />
    </>
  );
}